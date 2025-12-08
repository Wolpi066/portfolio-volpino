# 🚀 Portfolio Interactivo - Emiliano Volpino

¡Hola! Bienvenidos a mi repositorio.

Es una **Single Page Application (SPA)** diseñada como una experiencia narrativa. Básicamente, te llevo desde una terminal de sistema retro hasta un entorno 3D en el espacio.

---

## 🌟 La Experiencia (Cómo funciona)

La app está dividida en "Fases" que controlan la narrativa:

1.  **Fase 1: Boot Sequence** 🟢
    * Un pre-loader estilo BIOS/Terminal que simula la carga del sistema operativo.

2.  **Fase 2: Main Interface (Aerospace UI)** 🛸
    * Mi perfil, skills y estudios presentados con una estética de ingeniería aeroespacial.
    * Le metí mucho cariño al **Scroll-Telling** (animaciones al bajar) y al **Cursor Táctico** personalizado.
    * **Skills Matrix:** Mis habilidades no son una lista aburrida, son chips holográficos.

3.  **Fase 3: The System Trap** ⚠️
    * Hay un botón de "System Reset" escondido abajo de todo.

4.  **Fase 4: Glitch & Data Corruption** 👾
    * Uso `html2canvas` para sacarle una "foto" a la web en tiempo real y después la rompo con **Shaders WebGL** (Three.js) simulando un fallo de tarjeta gráfica y corrupción de datos.

5.  **Fase 5: Holo Rebirth (El Planeta 3D)** 🌍
    * El sistema se reinicia en un entorno 3D interactivo.
    * Es un planeta wireframe con físicas de ondas (Ripple Effect) al hacer click.
    * Los marcadores orbitando son mis proyectos reales (como **Breath Shop** y **El Cisma**). Podés clickearlos para ver info y videos.

---

## 🛠️ Stack Tecnológico

* **Framework:** Angular 17+ (Aprovechando Standalone Components, Signals y la nueva sintaxis `@defer`).
* **3D & Gráficos:** Three.js (WebGL puro).
* **VFX:** html2canvas + Custom GLSL Shaders (para el efecto Matrix/Glitch).
* **Estilos:** CSS3 Puro. Todo el diseño grid/flex y las animaciones están hechas a mano.
* **Deploy:** GitHub Pages (automatizado con `angular-cli-ghpages`).

---

## 🚀 ¿Querés correrlo en tu máquina?

Es súper fácil. Si tenés Node.js y Angular CLI instalados:

1.  **Cloná el repo:**
    git clone [https://github.com/Wolpi066/portfolio-volpino.git](https://github.com/Wolpi066/portfolio-volpino.git)
    cd portfolio-volpino

2.  **Instalá las dependencias:**
    npm install

3.  **Levantá el servidor:**
    ng serve
    Y andá a `http://localhost:4200/` para ver la magia.

---

## 👤 Autor

**Emiliano Volpino**
*Full Stack Developer & Creative Coder*

Me encanta resolver problemas complejos y crear interfaces que impacten. Si te gustó el proyecto o querés charlar sobre código, ¡contactame!

[LinkedIn](https://www.linkedin.com/) | [GitHub](https://github.com/Wolpi066) | 📧 volpinoemiliano@gmail.com

---

*Hecho con 💻, 🎵 y mucho café.*