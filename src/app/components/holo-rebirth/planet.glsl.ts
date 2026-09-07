/**
 * Shaders de la vista orbital.
 *
 * Direccion: cuerpo real iluminado por una estrella lejana, no una lampara
 * de neon. El color casi no participa —la escena es gris azulada— y lo que
 * da la lectura es la luz: difusa, especular apretado y un limbo frio y fino.
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
    for (int i = 0; i < 6; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
    return v;
  }
`;

/** Direccion de la estrella. La misma en todos los shaders o la luz no cierra. */
const SUN = 'vec3 SUN = normalize(vec3(0.72, 0.40, 0.56));';

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
    // Amplitud corta: es un pulso de instrumento, no una explosion.
    float dt = uTime - uHitAt;
    if (dt > 0.0 && dt < 2.4) {
      float d = distance(p, uHit) - dt * 13.0;
      p += normal * sin(d) * exp(-abs(d) * 0.6) * 0.34 * (1.0 - dt / 2.4);
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
    ${SUN}
    vec3 n = normalize(vN);
    vec3 v = normalize(vView);

    // --- Albedo: roca oscura con variacion, sin color propio -------------
    float t1 = fbm(vPos * 0.26);
    float t2 = fbm(vPos * 1.05 + 17.0);
    vec3 base = mix(vec3(0.048, 0.055, 0.068), vec3(0.105, 0.114, 0.132),
                    smoothstep(0.34, 0.72, t1));
    base = mix(base, vec3(0.185, 0.196, 0.218), smoothstep(0.58, 0.88, t2) * 0.75);

    // --- Luz: difusa + especular apretado --------------------------------
    float ndl = max(dot(n, SUN), 0.0);
    vec3 h = normalize(SUN + v);
    float spec = pow(max(dot(n, h), 0.0), 56.0) * 0.30;

    // El termino ambiente es bajisimo a proposito: el lado en sombra tiene
    // que estar oscuro de verdad, que es lo que lo hace leer como un cuerpo
    // y no como una lampara.
    vec3 col = base * (0.045 + ndl * 1.18) + vec3(0.62, 0.72, 0.88) * spec;

    // --- Limbo frio y fino ------------------------------------------------
    float rim = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 5.5);
    col += vec3(0.34, 0.50, 0.70) * rim * 0.55 * smoothstep(-0.45, 0.35, dot(n, SUN));

    // --- Barrido de sensor: una banda tenue recorriendo latitudes ---------
    float sweep = smoothstep(0.9955, 1.0, sin(vPos.y * 0.33 - uTime * 0.22) * 0.5 + 0.5);
    col += vec3(0.42, 0.60, 0.78) * sweep * 0.14 * ndl;

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
  varying vec3 vWorld;
  void main() {
    vN = normalize(normalMatrix * normal);
    vWorld = normalize(mat3(modelMatrix) * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`;

export const AIR_FRAG = /* glsl */ `
  varying vec3 vN;
  varying vec3 vView;
  varying vec3 vWorld;

  void main() {
    ${SUN}
    float d = 1.0 - clamp(dot(normalize(vN), normalize(vView)), 0.0, 1.0);
    float band = smoothstep(0.40, 0.92, d) * (1.0 - smoothstep(0.92, 1.0, d));

    // La atmosfera solo brilla del lado iluminado: encendida en la cara
    // oscura es el error que delata que la luz es falsa.
    float lit = smoothstep(-0.55, 0.25, dot(normalize(vWorld), SUN));

    gl_FragColor = vec4(vec3(0.42, 0.60, 0.82) * band * lit * 0.9, band * lit * 0.42);
  }
`;

// =========================================================================
// ANILLOS ORBITALES
// Finos y frios. Un destello los recorre: sin el, un anillo fijo se lee como
// una linea muerta alrededor del planeta.
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
    float glint = pow(abs(sin((vUv.x - uTime * uSpeed) * 3.14159)), 30.0);
    float base = 0.16;
    gl_FragColor = vec4(uColor * (base + glint * 2.0), base * 0.85 + glint * 0.8);
  }
`;

// =========================================================================
// MASTIL DEL MARCADOR
// Una linea fina que se apaga hacia arriba. Antes era un haz grueso que le
// competia al planeta.
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
    float fade = pow(1.0 - vY, 2.4);
    float pulse = 0.80 + 0.20 * sin(uTime * 1.6 + uSeed);
    gl_FragColor = vec4(uColor, fade * 0.30 * pulse);
  }
`;
