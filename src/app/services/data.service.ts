import { Injectable, computed, inject } from '@angular/core';
import { Skill, Project, ProjectSeed, Study } from '../models/portfolio.models';
import { I18nService, L10n } from './i18n.service';
import { PROJECTS } from '../data/projects.data';

/**
 * El contenido vive en los dos idiomas y se resuelve con computed(),
 * asi los componentes reciben strings planos y no se enteran del idioma.
 *
 * Los proyectos no estan aca: viven en data/projects.data.ts y este servicio
 * solo los traduce. Agregar un proyecto no deberia obligar a tocar codigo.
 */
@Injectable({ providedIn: 'root' })
export class DataService {
    private i18n = inject(I18nService);
    private p = (v: L10n) => this.i18n.pick(v);
    /** Un texto que puede venir bilingue o ya resuelto (numeros, nombres propios). */
    private pAny = (v: string | L10n) => (typeof v === 'string' ? v : this.i18n.pick(v));

    profile = computed(() => ({
        name: 'EMILIANO VOLPINO',
        title: this.p({
            es: 'PRODUCT ENGINEER · FULL STACK',
            en: 'PRODUCT ENGINEER · FULL STACK'
        }),
        location: this.p({ es: 'CABA, ARGENTINA', en: 'BUENOS AIRES, ARGENTINA (UTC−3)' }),
        email: 'volpinoemiliano@gmail.com',
        phone: '+54 9 11 4989-1169',
        github: 'github.com/Wolpi066',
        linkedin: 'linkedin.com/in/emilianovolpino',
        photo: 'assets/fotoDePerfil.png',
        bio: this.p({
            es: 'Llevo problemas de negocio reales desde la primera charla con el cliente hasta un sistema en producción, y después lo opero. Mi terreno fuerte es donde el sistema se cruza con la realidad: datos sucios de proveedores, el mostrador y la web vendiendo el mismo stock, pagos que fallan y errores de producción perseguidos hasta la causa. Construyo dirigiendo agentes de codificación: las decisiones de producto, arquitectura y datos son mías, y reviso cada cambio antes de que llegue a producción.',
            en: 'I take real business problems from the first conversation with the client to a system in production, and then I run it. My strongest ground is where the system meets reality: messy supplier data, the counter and the website selling the same stock, payments that fail, and production errors traced to the root cause. I build by directing AI coding agents: product, architecture and data decisions are mine, and I review every change before it reaches production.'
        })
    }));

    skills = computed<Skill[]>(() => {
        const core = this.p({ es: 'DISEÑO DE SISTEMAS', en: 'SYSTEMS DESIGN' });
        const conc = this.p({ es: 'CONCURRENCIA', en: 'CONCURRENCY' });
        const multi = this.p({ es: 'MULTI-TENANCY', en: 'MULTI-TENANCY' });
        return [
            { name: core, category: 'CORE' },
            { name: 'POO / OOP', category: 'CORE' },
            { name: conc, category: 'CORE' },
            { name: multi, category: 'CORE' },
            { name: 'C++', category: 'CORE' },

            { name: 'NODE.JS', category: 'BACKEND' },
            { name: 'TYPESCRIPT', category: 'BACKEND' },
            { name: 'EXPRESS', category: 'BACKEND' },
            { name: 'POSTGRESQL', category: 'BACKEND' },
            { name: 'PRISMA', category: 'BACKEND' },
            { name: 'SQL / MYSQL', category: 'BACKEND' },
            { name: 'REST / WEBHOOKS', category: 'BACKEND' },
            { name: 'ZOD', category: 'BACKEND' },
            { name: 'JWT / AUTH.JS', category: 'BACKEND' },
            { name: 'PHP', category: 'BACKEND' },
            { name: 'JAVA', category: 'BACKEND' },
            { name: 'PYTHON', category: 'BACKEND' },

            { name: 'REACT.JS', category: 'FRONTEND' },
            { name: 'NEXT.JS', category: 'FRONTEND' },
            { name: 'ANGULAR', category: 'FRONTEND' },
            { name: 'JAVASCRIPT', category: 'FRONTEND' },
            { name: 'TAILWIND CSS', category: 'FRONTEND' },
            { name: 'HTML5', category: 'FRONTEND' },
            { name: 'CSS3 / SASS', category: 'FRONTEND' },
            { name: 'THREE.JS / WEBGL', category: 'FRONTEND' },
            { name: 'PWA / SERVICE WORKERS', category: 'FRONTEND' },
            { name: 'EXPO / REACT NATIVE', category: 'FRONTEND' },

            { name: 'LINUX / BASH', category: 'TOOLS' },
            { name: 'NGINX', category: 'TOOLS' },
            { name: 'SYSTEMD', category: 'TOOLS' },
            { name: 'GITHUB ACTIONS', category: 'TOOLS' },
            { name: 'GIT / GITHUB', category: 'TOOLS' },
            { name: 'VITEST / PLAYWRIGHT', category: 'TOOLS' },
            { name: 'PUPPETEER', category: 'TOOLS' },
            { name: 'VERCEL', category: 'TOOLS' },
            { name: 'RAILWAY', category: 'TOOLS' },
            { name: 'CLOUDFLARE WORKERS', category: 'TOOLS' },
            { name: 'SUPABASE', category: 'TOOLS' },
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
            tags: ['C++', 'Java', 'POO', 'HTML5', 'CSS3', 'Bootstrap', 'Angular', 'PHP', 'TS', 'SQL']
        },
        {
            title: this.p({ es: 'CIBERSEGURIDAD Y ETHICAL HACKING', en: 'CYBERSECURITY AND ETHICAL HACKING' }),
            institution: 'CODERHOUSE',
            period: '2025',
            status: 'COMPLETED',
            tags: this.p({ es: 'Ciberseguridad,Ethical Hacking,Redes', en: 'Cybersecurity,Ethical Hacking,Networks' }).split(',')
        },
        {
            title: this.p({ es: 'ANALISTA DE SISTEMAS', en: 'SYSTEMS ANALYST' }),
            institution: 'INSTITUTO TECNOLÓGICO ORT',
            period: this.p({ es: '2022 - 2024 · cursado, sin título', en: '2022 - 2024 · coursework, no degree' }),
            status: 'NOT_COMPLETED',
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

    /** Los 11 sistemas, traducidos al idioma activo. */
    projects = computed<Project[]>(() => PROJECTS.map(seed => this.resolve(seed)));

    /**
     * Los que van en la pagina principal. El resto existe igual: se recorren
     * enteros en la vista orbital, que usa projects().
     */
    featuredProjects = computed(() => this.projects().filter(p => p.group === 'FEATURED'));

    private resolve(seed: ProjectSeed): Project {
        return {
            id: seed.id,
            name: seed.name,
            slug: slugify(seed.name),
            group: seed.group,
            status: seed.status,
            type: this.p(seed.type),
            description: this.p(seed.description),
            technicalHighlight: seed.technicalHighlight ? this.p(seed.technicalHighlight) : undefined,
            role: seed.role ? this.p(seed.role) : undefined,
            metrics: seed.metrics?.map(m => ({ value: this.pAny(m.value), label: this.p(m.label) })),
            techStack: seed.techStack.map(t => this.pAny(t)),
            gallery: seed.gallery?.map(g => ({ src: g.src, alt: this.p(g.alt) })),
            galleryLayout: seed.galleryLayout,
            note: seed.note ? this.p(seed.note) : undefined,
            githubUrl: seed.githubUrl,
            repoPrivate: seed.repoPrivate,
            liveUrl: seed.liveUrl,
            videoUrl: seed.videoUrl,
            videoKind: seed.videoKind,
            videoPoster: seed.videoPoster
        };
    }
}

/**
 * Nombre a identificador de URL: "DISTRIBUIDORA HARRY'S" -> "distribuidora-harrys".
 * Se deriva del nombre en vez de escribirse a mano para que no puedan
 * desincronizarse.
 */
function slugify(name: string): string {
    return name
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
