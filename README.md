# Emiliano Volpino · Portfolio

**Live:** [wolpi066.github.io/portfolio-volpino](https://wolpi066.github.io/portfolio-volpino/)

My interactive portfolio, in Spanish and English. It shows the systems I've built, with real figures, screenshots and links to the ones that are public.

## What's inside

- **Cold start:** a short three-act boot sequence that you can skip with any key.
- **Profile and projects:** the five projects that best show how I work, each one opening in a draggable window with the problem, the technical challenge, my role, the stack and screenshots.
- **Capability map:** a draggable graph that links each skill to the projects that actually use it. Every edge comes from what each project actually uses.
- **Orbital view:** all twelve projects as markers on a 3D planet, built with Three.js and custom shaders. If the machine has no 3D acceleration, the projects still open from the main page.
- **Command palette:** `Ctrl+K` / `⌘K` to jump to any project or action.

## Stack

Angular 20 (standalone components and signals), Three.js with GLSL shaders, GSAP and plain CSS. Deployed to GitHub Pages.

## Run it locally

```bash
npm install
npm start          # http://localhost:4200
npm run deploy     # builds and publishes to GitHub Pages
```

Project content lives in `src/app/data/projects.data.ts`. Adding a project means adding one object there.

## More

[GitHub profile](https://github.com/Wolpi066) · [Vixit Labs](https://vixit-labs.vercel.app), my independent studio · [LinkedIn](https://linkedin.com/in/emilianovolpino)
