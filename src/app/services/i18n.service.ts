import { Injectable, computed, effect, signal } from '@angular/core';

export type Lang = 'es' | 'en';

/** Texto que existe en los dos idiomas. */
export interface L10n {
    es: string;
    en: string;
}

const STORAGE_KEY = 'volpino-lang';

/** Textos de interfaz. El contenido (proyectos, estudios) vive en DataService. */
const UI = {
    es: {
        // ---- Sistema ----
        systemOnline: 'SISTEMA: EN LÍNEA',
        uptime: 'ACTIVO',
        version: 'VER',
        skipLink: 'Saltar a los proyectos',

        // ---- Arranque ----
        bootColdStart: 'arranque en frío',
        bootSkip: 'tocá una tecla para saltear',

        // ---- Perfil ----
        operatorProfile: '// PERFIL_OPERADOR',
        labelLoc: 'UBIC',
        labelPhone: 'TEL',
        labelEmail: 'EMAIL',
        btnGithub: 'GITHUB',
        btnLinkedin: 'LINKEDIN',
        btnCv: 'VER CV',
        cvFile: 'assets/CV_Emiliano_Volpino.pdf',
        scrollDown: 'BAJAR',

        // ---- Proyectos ----
        projectsTitle: '// ARCHIVO_DE_PROYECTOS',
        projectsLead:
            'Once sistemas, todos construidos solo y de punta a punta. Acá abajo van los cinco que mejor muestran cómo trabajo: cuatro corriendo en producción —uno de ellos para un cliente real— y una pieza publicada. Cada número sale de una medición o de un conteo real.',
        projectCta: 'ABRIR',
        moreInOrbit: 'Los otros seis —los que están en curso y los del archivo— se recorren en la vista orbital, junto con estos cinco.',

        statusPRODUCTION: 'EN PRODUCCIÓN',
        statusDELIVERED: 'ENTREGADO',
        statusDEPLOYED: 'PUBLICADO',
        statusIN_DEVELOPMENT: 'EN DESARROLLO',
        statusPROTOTYPE: 'PROTOTIPO',
        statusARCHIVED: 'ARCHIVADO',


        // ---- Paleta de comandos ----
        cmdTitle: 'Paleta de comandos',
        cmdPlaceholder: 'Buscar un proyecto o una acción…',
        cmdProjects: 'PROYECTOS',
        cmdGo: 'IR A',
        cmdSystem: 'SISTEMA',
        cmdTop: 'Volver al perfil',
        cmdProjectsSection: 'Sección de proyectos',
        cmdLang: 'Cambiar idioma',
        cmdEmpty: 'Sin resultados.',
        cmdMove: 'moverse',
        cmdRun: 'abrir',
        cmdHint: 'para buscar',
        // ---- Ventanas ----
        winMoveHint: 'Barra de la ventana: arrastrá para mover, o usá las flechas',
        winMinimize: 'Minimizar',
        winMaximize: 'Maximizar',
        winRestore: 'Restaurar',
        winClose: 'Cerrar ventana',
        winResize: 'Redimensionar',
        taskbarLabel: 'Ventanas abiertas',
        closeAll: 'CERRAR TODO',

        // ---- Detalle ----
        subChallenge: 'DESAFÍO TÉCNICO',
        subRole: 'MI ROL',
        subShots: 'CAPTURAS',
        subDemo: 'DEMO',
        subPreview: 'VISTA PREVIA',
        subStack: 'STACK',
        btnClose: 'ESC',
        btnRepo: 'REPOSITORIO',
        btnLive: 'VER EN VIVO',
        repoPrivate: 'REPOSITORIO PRIVADO',
        ariaClose: 'Cerrar',

        // ---- Capacidades y estudios ----
        skillsTitle: '// MATRIZ_DE_CAPACIDADES',
        catCORE: 'FUNDAMENTOS',
        catBACKEND: 'BACKEND',
        catFRONTEND: 'FRONTEND',
        catTOOLS: 'INFRA Y HERRAMIENTAS',

        skillsLead: 'No es una lista de deseos: cada capacidad está cruzada contra el stack real de los once sistemas. El número dice en cuántos se usa.',
        capUsedIn: 'sistemas',
        capAcademic: '— de formación, todavía sin sistema propio en producción.',
        capHint: 'Pasá por una capacidad para ver en qué sistemas se usa.',

        eduTitle: '// REGISTRO_ACADÉMICO',
        modulesLoaded: 'CONTENIDOS',
        certLink: 'VER CERTIFICADO',

        // ---- Orbital ----
        orbitTeaser: 'Y si llegaste hasta acá: los once sistemas están en la vista orbital, no solo los cinco de arriba.',
        orbitBtn: 'INICIAR SECUENCIA ORBITAL',
        orbitUnavailable: 'Tu equipo no tiene aceleración 3D, así que la vista orbital no puede abrirse. Los once proyectos se abren igual desde acá.',
        orbitView: '// VISTA_ORBITAL',
        legendLive: 'EN PRODUCCIÓN',
        legendWeb: 'PUBLICADO',
        legendGame: 'MOTOR / PROTOTIPO',
        orbitExit: 'VOLVER AL PERFIL',
        hintDrag: 'arrastrá para rotar · rueda para acercar',
        hintTap: 'tocá un nodo para abrir el proyecto',
        privateCode: 'CÓDIGO PRIVADO'
    },
    en: {
        // ---- System ----
        systemOnline: 'SYSTEM: ONLINE',
        uptime: 'UPTIME',
        version: 'VER',
        skipLink: 'Skip to the projects',

        // ---- Boot ----
        bootColdStart: 'cold start',
        bootSkip: 'press any key to skip',

        // ---- Profile ----
        operatorProfile: '// OPERATOR_PROFILE',
        labelLoc: 'LOC',
        labelPhone: 'PHONE',
        labelEmail: 'EMAIL',
        btnGithub: 'GITHUB',
        btnLinkedin: 'LINKEDIN',
        btnCv: 'VIEW CV',
        cvFile: 'assets/CV_Emiliano_Volpino_EN.pdf',
        scrollDown: 'SCROLL',

        // ---- Projects ----
        projectsTitle: '// PROJECT_ARCHIVE',
        projectsLead:
            'Eleven systems, all of them built solo and end to end. Below are the five that best show how I work: four running in production —one of them for a paying client— and one published piece. Every figure comes from a measurement or a real count.',
        projectCta: 'OPEN',
        moreInOrbit: 'The other six —the ones in progress and the archived ones— can be explored in the orbital view, together with these five.',

        statusPRODUCTION: 'IN PRODUCTION',
        statusDELIVERED: 'DELIVERED',
        statusDEPLOYED: 'PUBLISHED',
        statusIN_DEVELOPMENT: 'IN DEVELOPMENT',
        statusPROTOTYPE: 'PROTOTYPE',
        statusARCHIVED: 'ARCHIVED',


        // ---- Command palette ----
        cmdTitle: 'Command palette',
        cmdPlaceholder: 'Search a project or an action…',
        cmdProjects: 'PROJECTS',
        cmdGo: 'GO TO',
        cmdSystem: 'SYSTEM',
        cmdTop: 'Back to the profile',
        cmdProjectsSection: 'Projects section',
        cmdLang: 'Switch language',
        cmdEmpty: 'No results.',
        cmdMove: 'move',
        cmdRun: 'open',
        cmdHint: 'to search',
        // ---- Windows ----
        winMoveHint: 'Window bar: drag to move, or use the arrow keys',
        winMinimize: 'Minimise',
        winMaximize: 'Maximise',
        winRestore: 'Restore',
        winClose: 'Close window',
        winResize: 'Resize',
        taskbarLabel: 'Open windows',
        closeAll: 'CLOSE ALL',

        // ---- Detail ----
        subChallenge: 'TECHNICAL CHALLENGE',
        subRole: 'MY ROLE',
        subShots: 'SCREENSHOTS',
        subDemo: 'DEMO',
        subPreview: 'PREVIEW',
        subStack: 'STACK',
        btnClose: 'ESC',
        btnRepo: 'REPOSITORY',
        btnLive: 'VIEW LIVE',
        repoPrivate: 'PRIVATE REPOSITORY',
        ariaClose: 'Close',

        // ---- Capabilities and studies ----
        skillsTitle: '// SYSTEM_CAPABILITIES_MATRIX',
        catCORE: 'CORE',
        catBACKEND: 'BACKEND',
        catFRONTEND: 'FRONTEND',
        catTOOLS: 'INFRA & TOOLING',

        skillsLead: 'Not a wish list: every capability is cross-referenced against the real stack of the eleven systems. The number says how many use it.',
        capUsedIn: 'systems',
        capAcademic: '— from training, no system of my own in production yet.',
        capHint: 'Hover a capability to see which systems use it.',

        eduTitle: '// EDUCATION_LOGS',
        modulesLoaded: 'MODULES',
        certLink: 'VIEW CERTIFICATE',

        // ---- Orbital ----
        orbitTeaser: 'And if you made it this far: all eleven systems live in the orbital view, not just the five above.',
        orbitBtn: 'INITIATE ORBIT SEQUENCE',
        orbitUnavailable: 'Your machine has no 3D acceleration, so the orbital view cannot open. All eleven projects still open from here.',
        orbitView: '// ORBIT_VIEW',
        legendLive: 'IN PRODUCTION',
        legendWeb: 'PUBLISHED',
        legendGame: 'ENGINE / PROTOTYPE',
        orbitExit: 'BACK TO PROFILE',
        hintDrag: 'drag to rotate · wheel to zoom',
        hintTap: 'tap a node to open the project',
        privateCode: 'PRIVATE CODE'
    }
} as const;

@Injectable({ providedIn: 'root' })
export class I18nService {
    lang = signal<Lang>(this.readInitialLang());

    /** Diccionario de la interfaz en el idioma activo. */
    t = computed(() => UI[this.lang()]);

    constructor() {
        effect(() => {
            const l = this.lang();
            document.documentElement.lang = l;
            try {
                localStorage.setItem(STORAGE_KEY, l);
            } catch {
                // modo incognito o storage bloqueado: no es critico
            }
        });
    }

    setLang(lang: Lang) {
        this.lang.set(lang);
    }

    toggle() {
        this.lang.update(l => (l === 'es' ? 'en' : 'es'));
    }

    /** Resuelve un texto bilingue al idioma activo. */
    pick(value: L10n): string {
        return value[this.lang()];
    }

    private readInitialLang(): Lang {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'es' || saved === 'en') return saved;
        } catch {
            // ignorado
        }
        // Si el navegador no esta en espanol, arrancamos en ingles.
        const nav = (navigator.language || 'es').toLowerCase();
        return nav.startsWith('es') ? 'es' : 'en';
    }
}
