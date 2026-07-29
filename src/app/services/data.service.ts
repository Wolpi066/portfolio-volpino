import { Injectable, computed, inject } from '@angular/core';
import { Skill, Project, Study } from '../models/portfolio.models';
import { I18nService, L10n } from './i18n.service';

/**
 * El contenido vive aca en los dos idiomas y se resuelve con computed(),
 * asi los componentes reciben strings planos y no se enteran del idioma.
 */
@Injectable({ providedIn: 'root' })
export class DataService {
    private i18n = inject(I18nService);
    private p = (v: L10n) => this.i18n.pick(v);

    profile = computed(() => ({
        name: 'EMILIANO VOLPINO',
        title: this.p({
            es: 'DESARROLLADOR FULL STACK — DISEÑO DE SISTEMAS & BACKEND',
            en: 'FULL STACK DEVELOPER — SYSTEMS DESIGN & BACKEND'
        }),
        location: this.p({ es: 'CABA, ARGENTINA', en: 'BUENOS AIRES, ARGENTINA (UTC−3)' }),
        email: 'volpinoemiliano@gmail.com',
        phone: '+54 9 11 4989-1169',
        github: 'github.com/Wolpi066',
        linkedin: 'linkedin.com/in/emilianovolpino',
        photo: 'assets/fotoDePerfil.png',
        bio: this.p({
            es: 'Diseño y construyo sistemas completos, no features aisladas. Llevo plataformas de la pizarra a producción y las mantengo funcionando: reglas de negocio, modelo de datos, arquitectura de backend, integraciones, despliegue e infraestructura. Hoy opero varios sistemas en producción. Mi terreno fuerte es lo que pasa cuando el sistema se cruza con la realidad: concurrencia, consistencia transaccional, límites de recursos y fallas diagnosticadas hasta la causa raíz.',
            en: 'I design and build complete systems, not isolated features. I take platforms from whiteboard to production and keep them running: business rules, data modelling, backend architecture, integrations, deployment and infrastructure. I currently operate several systems in production. My strongest ground is what happens when a system meets reality: concurrency, transactional consistency, resource limits and failures traced to root cause.'
        })
    }));

    skills = computed<Skill[]>(() => {
        const core = this.p({ es: 'DISEÑO DE SISTEMAS', en: 'SYSTEMS DESIGN' });
        const conc = this.p({ es: 'CONCURRENCIA', en: 'CONCURRENCY' });
        return [
            { name: core, category: 'CORE' },
            { name: 'POO / OOP', category: 'CORE' },
            { name: 'TDD', category: 'CORE' },
            { name: conc, category: 'CORE' },
            { name: 'C++', category: 'CORE' },

            { name: 'NODE.JS', category: 'BACKEND' },
            { name: 'TYPESCRIPT', category: 'BACKEND' },
            { name: 'EXPRESS', category: 'BACKEND' },
            { name: 'POSTGRESQL', category: 'BACKEND' },
            { name: 'PRISMA', category: 'BACKEND' },
            { name: 'SQL / MYSQL', category: 'BACKEND' },
            { name: 'REST / WEBHOOKS', category: 'BACKEND' },
            { name: 'JWT', category: 'BACKEND' },
            { name: 'PHP', category: 'BACKEND' },
            { name: 'JAVA', category: 'BACKEND' },
            { name: 'PYTHON', category: 'BACKEND' },

            { name: 'REACT.JS', category: 'FRONTEND' },
            { name: 'ANGULAR', category: 'FRONTEND' },
            { name: 'JAVASCRIPT', category: 'FRONTEND' },
            { name: 'TAILWIND CSS', category: 'FRONTEND' },
            { name: 'HTML5', category: 'FRONTEND' },
            { name: 'CSS3 / SASS', category: 'FRONTEND' },
            { name: 'THREE.JS / WEBGL', category: 'FRONTEND' },

            { name: 'LINUX / BASH', category: 'TOOLS' },
            { name: 'NGINX', category: 'TOOLS' },
            { name: 'SYSTEMD', category: 'TOOLS' },
            { name: 'GITHUB ACTIONS', category: 'TOOLS' },
            { name: 'GIT / GITHUB', category: 'TOOLS' },
            { name: 'PUPPETEER', category: 'TOOLS' },
            { name: 'VERCEL', category: 'TOOLS' },
            { name: 'RAILWAY', category: 'TOOLS' },
            { name: 'CLOUDFLARE', category: 'TOOLS' },
            { name: 'VITE', category: 'TOOLS' }
        ];
    });

    studies = computed<Study[]>(() => [
        {
            title: this.p({
                es: 'TECNICATURA SUPERIOR EN PROGRAMACIÓN',
                en: 'HIGHER TECHNICAL DEGREE IN PROGRAMMING'
            }),
            institution: 'UCES',
            period: this.p({ es: 'En curso — egreso dic. 2026', en: 'In progress — expected Dec. 2026' }),
            status: 'IN_PROGRESS',
            tags: ['C++', 'Java', 'POO', 'TDD', 'HTML5', 'CSS3', 'Bootstrap', 'Angular', 'PHP', 'TS', 'SQL']
        },
        {
            title: this.p({ es: 'CIBERSEGURIDAD Y ETHICAL HACKING', en: 'CYBERSECURITY AND ETHICAL HACKING' }),
            institution: 'CODERHOUSE',
            period: '2025',
            status: 'COMPLETED',
            tags: this.p({ es: 'Ciberseguridad,Ethical Hacking,Redes', en: 'Cybersecurity,Ethical Hacking,Networks' }).split(',')
        },
        {
            title: this.p({ es: 'ANALISTA EN SISTEMAS', en: 'SYSTEMS ANALYST' }),
            institution: 'INSTITUTO TECNOLÓGICO ORT',
            period: '2020 - 2022',
            status: 'COMPLETED',
            tags: ['Java', 'SQL', 'HTML5', 'CSS3', 'SCRUM', 'UML', 'BPMN']
        },
        {
            title: this.p({ es: 'DESARROLLO WEB', en: 'WEB DEVELOPMENT' }),
            institution: 'CODERHOUSE',
            period: '2022',
            status: 'COMPLETED',
            tags: ['HTML5', 'CSS3', 'SASS', 'SEO', 'Bootstrap'],
            certificate: 'assets/certificadoCoderDesarrolloWeb.png'
        },
        {
            title: 'JAVASCRIPT',
            institution: 'CODERHOUSE',
            period: '2022',
            status: 'COMPLETED',
            tags: ['JavaScript', 'DOM', 'Events', 'Async'],
            certificate: 'assets/CertificadoCoder JavaScript.png'
        }
    ]);

    projects = computed<Project[]>(() => [
        {
            id: '01',
            name: 'VIXIT CENTER',
            type: this.p({
                es: 'SaaS MULTI-TENANT DE AUDITORÍA DE CALIDAD',
                en: 'MULTI-TENANT QUALITY ASSURANCE SaaS'
            }),
            status: 'PRODUCTION',
            description: this.p({
                es: 'Plataforma multi-tenant donde un call center audita la calidad de atención de sus campañas: evaluaciones sobre grillas configurables, dashboards, reportes en Excel y PDF, calibración entre evaluadores, planes de coaching y un portal aparte donde cada agente ve su devolución y deja su descargo.',
                en: 'Multi-tenant platform where a contact centre audits the service quality of its campaigns: evaluations over configurable scorecards, dashboards, Excel and PDF reports, calibration between reviewers, coaching plans, and a separate portal where each agent sees their feedback and files a response.'
            }),
            technicalHighlight: this.p({
                es: 'Aislamiento multi-tenant: el identificador de organización sale siempre de la sesión y nunca del input, y toda mutación por id resuelve primero contra {id, organización} antes de tocar nada. El motor de puntaje es configurable por organización —pesos por módulo, criticidad, tratamiento de N/A— con un editor visual que valida que los pesos sumen 100%; si la grilla ya tiene evaluaciones cargadas bloquea el cambio estructural y ofrece duplicarla en una versión nueva, para no romper la integridad referencial del histórico.',
                en: 'Multi-tenant isolation: the organisation identifier always comes from the session and never from input, and every mutation by id resolves against {id, organisation} before touching anything. The scoring engine is configurable per organisation —module weights, criticality, N/A handling— with a visual editor that validates weights sum to 100%; if the scorecard already has evaluations loaded it blocks structural changes and offers to duplicate it into a new version, so the referential integrity of past records is never broken.'
            }),
            metrics: [
                {
                    value: 'Multi-tenant',
                    label: this.p({ es: 'aislamiento por organización en cada consulta', en: 'per-organisation isolation on every query' })
                },
                {
                    value: this.p({ es: '5 roles', en: '5 roles' }),
                    label: this.p({ es: 'matriz de permisos por sección y acción', en: 'permission matrix by section and action' })
                },
                {
                    value: '64',
                    label: this.p({ es: 'tests automatizados en verde', en: 'automated tests passing' })
                },
                {
                    value: this.p({ es: 'Ley 25.326', en: 'Data protection' }),
                    label: this.p({ es: 'export y anonimización de datos personales', en: 'personal data export and anonymisation' })
                }
            ],
            techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Auth.js v5', 'Tailwind CSS', 'Vitest', 'Recharts', 'SheetJS', 'Vercel'],
            gallery: [
                'assets/projects/vixit-01-dashboard.png',
                'assets/projects/vixit-04-grilla.png',
                'assets/projects/vixit-06-evaluacion.png',
                'assets/projects/vixit-05-reportes.png',
                'assets/projects/vixit-02-operador.png',
                'assets/projects/vixit-03-portal-operador.png'
            ],
            note: this.p({
                es: 'Capturas de una instancia de demostración con datos de prueba. El cliente y los datos reales no se muestran por confidencialidad.',
                en: 'Screenshots from a demo instance with test data. The client and real data are not shown, for confidentiality.'
            })
        },
        {
            id: '02',
            name: 'VIXIT PLATFORM',
            type: this.p({
                es: 'PLATAFORMA DE GESTIÓN Y ADQUISICIÓN',
                en: 'BUSINESS MANAGEMENT AND ACQUISITION PLATFORM'
            }),
            status: 'PRODUCTION',
            description: this.p({
                es: 'El sistema que opera Vixit Labs de punta a punta: prospección, CRM, presupuestos, contratos, proyectos, tickets, mensajería y finanzas en doble moneda, más un portal por token donde cada cliente sigue su proyecto sin necesidad de crear cuenta. Recibe además, por webhook autenticado, los tickets de soporte que genera Vixit Center, segmentados por cliente.',
                en: 'The system that runs Vixit Labs end to end: prospecting, CRM, quotes, contracts, projects, tickets, messaging and dual-currency finance, plus a token-based portal where each client follows their project without creating an account. It also receives, over an authenticated webhook, the support tickets raised in Vixit Center, segmented by client.'
            }),
            technicalHighlight: this.p({
                es: 'La búsqueda de prospectos usa una API de mapas que se cobra por llamada. En vez de confiar en el límite del proveedor, el gasto está acotado en la propia base: una tabla de consumo lleva la cuenta y corta las búsquedas antes de superar el crédito gratuito, con una cadena de respaldo a fuentes abiertas cuando el cupo se agota. Migrar a la versión nueva de la API bajó el costo por búsqueda de unos 37 centavos a unos 5.',
                en: 'Prospect search uses a mapping API billed per call. Rather than trusting the provider\'s own limit, spending is capped in the database itself: a usage table keeps count and cuts off searches before the free credit is exceeded, with a fallback chain to open data sources once the quota runs out. Migrating to the new version of the API brought the cost per search down from around 37 cents to about 5.'
            }),
            metrics: [
                {
                    value: '37¢ → 5¢',
                    label: this.p({ es: 'costo por búsqueda tras migrar de API', en: 'cost per search after migrating API version' })
                },
                {
                    value: this.p({ es: 'Tope duro', en: 'Hard cap' }),
                    label: this.p({ es: 'el gasto no puede excederse por diseño', en: 'spending cannot be exceeded by design' })
                },
                {
                    value: this.p({ es: 'Portal por token', en: 'Token portal' }),
                    label: this.p({ es: 'acceso del cliente sin crear cuenta', en: 'client access without an account' })
                }
            ],
            techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Auth.js v5', 'shadcn/ui', 'Zod', 'Resend', 'Vercel', 'Railway'],
            gallery: [
                'assets/projects/platform-01-adquisicion.png',
                'assets/projects/platform-02-portal.png'
            ],
            note: this.p({
                es: 'Es la plataforma interna con la que opero Vixit Labs. Los nombres de clientes y el contenido de los tickets están ocultos.',
                en: 'This is the internal platform I run Vixit Labs on. Client names and ticket contents are hidden.'
            })
        },
        {
            id: '03',
            name: 'VACUUM ENGINE',
            type: this.p({
                es: 'MOTOR DE AUTOMATIZACIÓN COMERCIAL B2B',
                en: 'B2B COMMERCIAL AUTOMATION ENGINE'
            }),
            status: 'PRODUCTION',
            description: this.p({
                es: 'Plataforma que centraliza una operación comercial completa: intercepta ofertas de proveedores en canales de mensajería, sincroniza a diario los catálogos de cuatro proveedores y permite redistribuir cualquier oferta a clientes desde una única bandeja web.',
                en: 'Platform that centralises an entire commercial operation: it intercepts supplier offers across messaging channels, syncs four supplier catalogues daily and lets any offer be redistributed to customers from a single web inbox.'
            }),
            technicalHighlight: this.p({
                es: 'Diagnostiqué la causa raíz de un fallo de autenticación recurrente en producción: al terminar el proceso sin cerrar el socket, el estado criptográfico de la sesión (el ratchet del protocolo Signal) quedaba a medio escribir, el servidor rechazaba la reconexión con un 401 y hacía falta re-vincular a mano. Resuelto con un handler de SIGTERM/SIGINT que cierra el socket y drena las escrituras pendientes antes de salir.',
                en: 'I traced a recurring production authentication failure to its root cause: terminating the process without closing the socket left the session\'s cryptographic state (the Signal protocol ratchet) half-written, so the server rejected reconnection with a 401 and manual re-pairing was needed. Fixed with a SIGTERM/SIGINT handler that closes the socket and drains pending writes before exiting.'
            }),
            metrics: [
                {
                    value: this.p({ es: '~3 h', en: '~3 h' }),
                    label: this.p({ es: 'de trabajo manual eliminadas por día', en: 'of manual work removed per day' })
                },
                {
                    value: '3.400+',
                    label: this.p({ es: 'productos sincronizados a diario', en: 'products synced daily' })
                },
                {
                    value: this.p({ es: '5-6 s → 1,1 s', en: '5-6 s → 1.1 s' }),
                    label: this.p({ es: 'carga completa de la aplicación', en: 'full application load' })
                },
                {
                    value: '55 → 380 MB',
                    label: this.p({ es: 'RAM libre tras sacar el navegador del server', en: 'free RAM after removing the browser from the server' })
                }
            ],
            techStack: ['Node.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Angular', 'Puppeteer', 'GitHub Actions', 'nginx', 'systemd'],
            gallery: [
                'assets/projects/vacuum-01-catalogos.png',
                'assets/projects/vacuum-02-bandeja.png',
                'assets/projects/vacuum-03-origenes.png'
            ],
            note: this.p({
                es: 'Los nombres de proveedores y canales están ocultos por confidencialidad comercial.',
                en: 'Supplier and channel names are hidden for commercial confidentiality.'
            })
        },
        {
            id: '04',
            name: "DISTRIBUIDORA HARRY'S",
            type: this.p({
                es: 'E-COMMERCE B2B/B2C + PUNTO DE VENTA',
                en: 'B2B/B2C E-COMMERCE + POINT OF SALE'
            }),
            status: 'PRODUCTION',
            description: this.p({
                es: 'Plataforma transaccional en producción para un cliente real: precios y mínimos de compra diferenciados para consumidor final y mayorista sobre un único catálogo, punto de venta físico sincronizado en tiempo real con el inventario web y panel de gestión con métricas de rentabilidad.',
                en: 'Live transactional platform built for a paying client: differentiated pricing and minimum-order rules for retail and wholesale customers over a single catalogue, an in-store point of sale synced in real time with web inventory, and an admin panel with profitability metrics.'
            }),
            technicalHighlight: this.p({
                es: 'Blindaje transaccional: ningún importe se confía al cliente. El backend revalida y recalcula precios, stock y cupones antes de confirmar cada operación. La ingesta masiva de catálogo por Excel resiste condiciones de carrera combinando caché reactiva en memoria, bloqueos de fila (FOR UPDATE) e inserciones idempotentes (ON CONFLICT DO NOTHING).',
                en: 'Transactional hardening: no monetary value is trusted from the client. The backend revalidates and recalculates prices, stock and coupons before confirming each operation. Bulk catalogue ingestion via Excel resists race conditions by combining a reactive in-memory cache, row-level locks (FOR UPDATE) and idempotent inserts (ON CONFLICT DO NOTHING).'
            }),
            metrics: [
                {
                    value: '~1.700',
                    label: this.p({ es: 'SKU dimensionados en el catálogo', en: 'SKUs the catalogue is sized for' })
                },
                {
                    value: this.p({ es: 'Web + POS', en: 'Web + POS' }),
                    label: this.p({ es: 'un mismo stock, dos canales concurrentes', en: 'one stock pool, two concurrent channels' })
                },
                {
                    value: this.p({ es: 'En producción', en: 'In production' }),
                    label: this.p({ es: 'sitio público y operativo para el cliente', en: 'public site, live for the client' })
                }
            ],
            techStack: ['React.js', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Mercado Pago', 'Vercel', 'Railway', 'Cloudflare'],
            liveUrl: 'https://www.distribuidoraharrys.com.ar',
            gallery: [
                'assets/projects/harrys-01-home.png',
                'assets/projects/harrys-02-catalogo.png',
                'assets/projects/harrys-03-admin-productos.png',
                'assets/projects/harrys-04-pos.png',
                'assets/projects/harrys-06-admin-ventas.png',
                'assets/projects/harrys-07-metricas.png',
                'assets/projects/harrys-05-footer.png'
            ],
            note: this.p({
                es: 'Costos, márgenes, montos de venta y datos de empleados están ocultos por confidencialidad del cliente.',
                en: 'Costs, margins, sales figures and employee data are hidden for client confidentiality.'
            })
        },
        {
            id: '05',
            name: 'BREATH SHOP',
            type: this.p({ es: 'E-COMMERCE FULL STACK', en: 'FULL STACK E-COMMERCE' }),
            status: 'DEPLOYED',
            description: this.p({
                es: 'SPA en Angular 17+ con Signals y componentes standalone, sobre un backend MVC escrito desde cero en PHP nativo: ruteo, controladores y capa de acceso a datos propios, sin framework.',
                en: 'Angular 17+ SPA with Signals and standalone components, on top of an MVC backend written from scratch in vanilla PHP: custom routing, controllers and data-access layer, no framework.'
            }),
            technicalHighlight: this.p({
                es: 'Autenticación stateless vía JWT con hasheo Bcrypt, y sincronización carrito–inventario en tiempo real para evitar sobreventa en compras concurrentes, sobre un esquema relacional con consultas parametrizadas contra inyección SQL.',
                en: 'Stateless JWT authentication with Bcrypt hashing, and real-time cart–inventory synchronisation to prevent overselling under concurrent purchases, on a relational schema using parameterised queries against SQL injection.'
            }),
            techStack: ['Angular 17+', this.p({ es: 'PHP (MVC nativo)', en: 'PHP (vanilla MVC)' }), 'MySQL', 'JWT', 'Bcrypt'],
            githubUrl: 'https://github.com/Wolpi066/Breath',
            videoUrl: 'assets/heroBreathe.mp4',
            videoKind: 'hero',
            videoPoster: 'assets/breath-poster.jpg'
        },
        {
            id: '06',
            name: 'EL CISMA',
            type: this.p({ es: 'MOTOR DE JUEGO SURVIVAL HORROR', en: 'SURVIVAL HORROR GAME ENGINE' }),
            status: 'PROTOTYPE',
            description: this.p({
                es: 'Motor 2D en C++ con Raylib: game loop propio y gestión manual de memoria sin garbage collection, con control explícito del ciclo de vida de cada entidad y del presupuesto de frame.',
                en: '2D engine in C++ with Raylib: custom game loop and manual memory management without garbage collection, with explicit control over every entity\'s lifecycle and the frame budget.'
            }),
            technicalHighlight: this.p({
                es: 'Máquinas de estados finitos para la IA de enemigos —patrullar, perseguir y atacar— con transiciones disparadas por proximidad y estímulos sonoros. El motor está diseñado para ser testeable de forma aislada, con tests unitarios bajo TDD sobre colisiones y lógica de inventario.',
                en: 'Finite state machines driving enemy AI —patrol, chase and attack— with transitions triggered by proximity and sound cues. The engine is designed to be testable in isolation, with TDD unit tests covering collisions and inventory logic.'
            }),
            techStack: ['C++', 'Raylib', 'Tau', 'TDD'],
            githubUrl: 'https://github.com/Wolpi066/ElCisma',
            videoUrl: 'assets/ElCisma.mp4',
            videoKind: 'demo',
            videoPoster: 'assets/ElCisma-poster.jpg'
        }
    ]);
}
