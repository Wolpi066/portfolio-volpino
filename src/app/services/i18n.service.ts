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
        systemOnline: 'SYSTEM: ONLINE',
        uptime: 'UPTIME',
        version: 'VER',
        langToggle: 'EN',
        langAria: 'Switch to English',

        operatorProfile: '// PERFIL_OPERADOR',
        labelLoc: 'UBIC:',
        labelPhone: 'TEL:',
        labelEmail: 'EMAIL:',
        btnGithub: 'GITHUB []',
        btnLinkedin: 'LINKEDIN []',
        btnCv: '[ VER CV ]',
        cvFile: 'assets/CV_Emiliano_Volpino.pdf',
        scrollDown: 'BAJAR [v]',

        projectsTitle: '// ARCHIVO_DE_PROYECTOS',
        projectCta: 'ACCEDER_A_DATOS >>',
        statusPRODUCTION: 'EN PRODUCCIÓN',
        statusDELIVERED: 'ENTREGADO',
        statusDEPLOYED: 'DESPLEGADO',
        statusPROTOTYPE: 'PROTOTIPO',

        subChallenge: '// DESAFÍO_TÉCNICO',
        subShots: '// CAPTURAS',
        subDemo: '// DEMO',
        subPreview: '// VISTA PREVIA',
        subStack: '// STACK',
        btnClose: '[ ESC ]',
        btnRepo: 'REPOSITORIO →',
        btnLive: 'VER EN VIVO →',
        ariaClose: 'Cerrar',
        ariaZoom: 'Captura ampliada',

        skillsTitle: '// MATRIZ_DE_CAPACIDADES',
        catCORE: 'FUNDAMENTOS',
        catBACKEND: 'BACKEND',
        catFRONTEND: 'FRONTEND',
        catTOOLS: 'INFRA Y HERRAMIENTAS',

        eduTitle: '// REGISTRO_ACADÉMICO',
        modulesLoaded: 'CONTENIDOS:',
        certLink: 'VER_CERTIFICADO >>',

        orbitTeaser: 'Hay una vista 3D de este sistema. No es necesaria para nada, pero está.',
        orbitBtn: '[ INICIAR_SECUENCIA_ORBITAL ]',

        trapHeader: 'SECUENCIA_ORBITAL',
        trapTitle: '¿DESMONTAR LA INTERFAZ?',
        trapDesc: 'El sistema va a colapsar esta vista para reconstruirse en el entorno orbital.',
        trapReassure: 'Podés volver cuando quieras.',
        trapEngage: '[ EJECUTAR ]',
        trapCancel: '[ CANCELAR ]',

        orbitView: '// VISTA_ORBITAL',
        legendLive: 'EN PRODUCCIÓN',
        legendWeb: 'WEB / APP',
        legendGame: 'MOTOR / JUEGO',
        orbitExit: '<< VOLVER AL PERFIL',
        hintDrag: '[ ARRASTRÁ PARA ROTAR ]',
        hintTap: '[ TOCÁ UN NODO PARA ABRIR EL PROYECTO ]',
        privateCode: 'CÓDIGO PRIVADO',

        bootBooting: 'INICIANDO...',
        bootLogs: [
            'Iniciando núcleo Angular...',
            'Cargando motor de geometría...',
            'Montando DOM virtual...',
            'Descifrando perfil: Volpino...',
            'Estableciendo conexión segura...',
            'Sistema listo.'
        ]
    },
    en: {
        systemOnline: 'SYSTEM: ONLINE',
        uptime: 'UPTIME',
        version: 'VER',
        langToggle: 'ES',
        langAria: 'Cambiar a español',

        operatorProfile: '// OPERATOR_PROFILE',
        labelLoc: 'LOC:',
        labelPhone: 'PHONE:',
        labelEmail: 'EMAIL:',
        btnGithub: 'GITHUB []',
        btnLinkedin: 'LINKEDIN []',
        btnCv: '[ VIEW CV ]',
        cvFile: 'assets/CV_Emiliano_Volpino_EN.pdf',
        scrollDown: 'SCROLL DOWN [v]',

        projectsTitle: '// PROJECT_ARCHIVE',
        projectCta: 'ACCESS_DATA >>',
        statusPRODUCTION: 'IN PRODUCTION',
        statusDELIVERED: 'DELIVERED',
        statusDEPLOYED: 'DEPLOYED',
        statusPROTOTYPE: 'PROTOTYPE',

        subChallenge: '// TECHNICAL_CHALLENGE',
        subShots: '// SCREENSHOTS',
        subDemo: '// DEMO',
        subPreview: '// PREVIEW',
        subStack: '// STACK',
        btnClose: '[ ESC ]',
        btnRepo: 'REPOSITORY →',
        btnLive: 'VIEW LIVE →',
        ariaClose: 'Close',
        ariaZoom: 'Enlarged screenshot',

        skillsTitle: '// SYSTEM_CAPABILITIES_MATRIX',
        catCORE: 'CORE',
        catBACKEND: 'BACKEND',
        catFRONTEND: 'FRONTEND',
        catTOOLS: 'INFRA & TOOLING',

        eduTitle: '// EDUCATION_LOGS',
        modulesLoaded: 'MODULES:',
        certLink: 'VIEW_CERTIFICATE >>',

        orbitTeaser: 'There is a 3D view of this system. Entirely optional, but it is there.',
        orbitBtn: '[ INITIATE_ORBIT_SEQUENCE ]',

        trapHeader: 'ORBIT_SEQUENCE',
        trapTitle: 'DISMANTLE THE INTERFACE?',
        trapDesc: 'The system will collapse this view and rebuild itself in the orbital environment.',
        trapReassure: 'You can come back whenever you want.',
        trapEngage: '[ ENGAGE ]',
        trapCancel: '[ CANCEL ]',

        orbitView: '// ORBIT_VIEW',
        legendLive: 'IN PRODUCTION',
        legendWeb: 'WEB / APP',
        legendGame: 'ENGINE / GAME',
        orbitExit: '<< BACK TO PROFILE',
        hintDrag: '[ DRAG TO ROTATE ]',
        hintTap: '[ TAP A NODE TO OPEN THE PROJECT ]',
        privateCode: 'PRIVATE CODE',

        bootBooting: 'BOOTING...',
        bootLogs: [
            'Initializing Angular core...',
            'Loading geometry engine...',
            'Mounting virtual DOM...',
            'Decrypting profile: Volpino...',
            'Establishing secure connection...',
            'System ready.'
        ]
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
