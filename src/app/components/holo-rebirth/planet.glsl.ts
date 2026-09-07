/**
 * Shaders de la vista orbital.
 *
 * Viven aparte del componente porque son la pieza visual, no logica de
 * interfaz, y mezclarlos con TypeScript hace ilegibles a los dos.
 */

/** Ruido de valor 3D + fbm. Compacto a proposito: corre por fragmento. */
const NOISE = /* glsl */ `
  float hash(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }
  float noise(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
          mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
      mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
          mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  float fbm(vec3 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
    return v;
  }
`;

// =========================================================================
// NUCLEO
// =========================================================================
export const CORE_VERT = /* glsl */ `
  uniform float uTime;
  uniform vec3 uHit;
  uniform float uHitAt;
  varying vec3 vN;
  varying vec3 vView;
  varying vec3 vPos;

  void main() {
    vN = normalize(normalMatrix * normal);
    vPos = position;
    vec3 p = position;

    // Onda al tocar la superficie: nace en el punto, se expande y muere.
    float dt = uTime - uHitAt;
    if (dt > 0.0 && dt < 2.4) {
      float d = distance(p, uHit) - dt * 14.0;
      p += normal * sin(d) * exp(-abs(d) * 0.5) * 0.75 * (1.0 - dt / 2.4);
    }

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`;

export const CORE_FRAG = /* glsl */ `
  uniform float uTime;
  varying vec3 vN;
  varying vec3 vView;
  varying vec3 vPos;
  ${NOISE}

  void main() {
    vec3 n = normalize(vN);
    float fres = 1.0 - clamp(dot(n, normalize(vView)), 0.0, 1.0);

    // Dos capas de ruido que se desplazan a distinta velocidad: eso es lo
    // que hace que la superficie parezca fluir y no girar rigida.
    vec3 q = vPos * 0.19;
    float f1 = fbm(q + vec3(0.0, uTime * 0.045, uTime * 0.022));
    float f2 = fbm(q * 1.9 + vec3(uTime * 0.031, 0.0, 0.0));

    // Bandas de energia siguiendo la latitud, deformadas por el ruido.
    float bands = pow(abs(sin(vPos.y * 0.42 + f1 * 3.4 + uTime * 0.12)), 5.0);
    float veins = smoothstep(0.50, 0.78, f1 * 0.72 + f2 * 0.46);

    // Terminador: un hemisferio iluminado y otro en sombra dan volumen.
    vec3 sun = normalize(vec3(0.72, 0.44, 0.53));
    float lit = smoothstep(-0.28, 0.58, dot(n, sun));

    vec3 deep  = vec3(0.018, 0.028, 0.052);
    vec3 amber = vec3(1.00, 0.62, 0.24);
    vec3 cyan  = vec3(0.20, 0.70, 0.96);

    vec3 col = deep;
    col += amber * bands * 0.92 * (0.04 + lit * 0.92);
    col += cyan  * veins * 0.34 * lit;
    col  = mix(col, amber * 1.25, pow(fres, 5.0));
    col += amber * 0.045 * lit;

    gl_FragColor = vec4(col, 1.0);
  }
`;

// =========================================================================
// ATMOSFERA
// Con BackSide el fresnel es maximo en la silueta de la cascara, no en el
// limbo del planeta: por eso un fresnel pelado da un disco plano con el
// borde cortado. Se usa una banda que sube cerca del limbo y se apaga antes
// del borde exterior.
// =========================================================================
export const AIR_VERT = /* glsl */ `
  varying vec3 vN;
  varying vec3 vView;
  void main() {
    vN = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`;

export const AIR_FRAG = /* glsl */ `
  uniform float uTime;
  varying vec3 vN;
  varying vec3 vView;

  void main() {
    float d = 1.0 - clamp(dot(normalize(vN), normalize(vView)), 0.0, 1.0);
    float band = smoothstep(0.34, 0.90, d) * (1.0 - smoothstep(0.90, 1.0, d));
    // Respiracion lenta: la atmosfera no queda congelada.
    float breathe = 0.88 + 0.12 * sin(uTime * 0.55);
    vec3 col = mix(vec3(1.0, 0.68, 0.34), vec3(1.0, 0.84, 0.62), band);
    gl_FragColor = vec4(col * band * breathe * 0.85, band * 0.62);
  }
`;

// =========================================================================
// ANILLOS ORBITALES
// Un destello recorre el anillo: sin el, un anillo fijo se lee como una
// linea muerta alrededor del planeta.
// =========================================================================
export const RING_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const RING_FRAG = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uSpeed;
  varying vec2 vUv;

  void main() {
    float glint = pow(abs(sin((vUv.x - uTime * uSpeed) * 3.14159)), 26.0);
    float base = 0.22;
    gl_FragColor = vec4(uColor * (base + glint * 3.2), base * 0.9 + glint);
  }
`;

// =========================================================================
// HAZ DEL MARCADOR
// Columna de luz que se desvanece hacia arriba.
// =========================================================================
export const BEAM_VERT = /* glsl */ `
  varying float vY;
  void main() {
    vY = uv.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const BEAM_FRAG = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  uniform float uSeed;
  varying float vY;

  void main() {
    float fade = pow(1.0 - vY, 1.8);
    float pulse = 0.72 + 0.28 * sin(uTime * 2.1 + uSeed);
    gl_FragColor = vec4(uColor * (0.9 + pulse), fade * 0.55 * pulse);
  }
`;
