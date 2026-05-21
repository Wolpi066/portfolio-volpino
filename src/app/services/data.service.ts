import { Injectable } from '@angular/core';
import { Skill, Project, Study } from '../models/portfolio.models';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    get profile() {
        const birthDate = new Date('2003-09-09');
        const age = Math.abs(new Date(Date.now() - birthDate.getTime()).getUTCFullYear() - 1970);

        return {
            name: 'EMILIANO VOLPINO',
            title: 'FULL STACK DEVELOPER & CREATIVE CODER',
            age: age,
            location: 'CABA, ARGENTINA',
            email: 'volpinoemiliano@gmail.com',
            phone: '+54 11 4989-1159',
            github: 'github.com/Wolpi066',
            photo: 'assets/fotoDePerfil.png',
            bio: `Soy estudiante de programación con gran interés en desarrollarme profesionalmente dentro del área IT. Me apasiona programar y aprender nuevas tecnologías. Me caracterizo por mi rápido aprendizaje, la capacidad para resolver problemas de manera creativa y la facilidad para integrarme en equipos de trabajo. Actualmente me encuentro ampliando mis habilidades en desarrollo web y programación.`
        };
    }

    get skills(): Skill[] {
        return [
            { name: 'REACT.JS', level: 85, category: 'FRONTEND' },
            { name: 'NODE.JS', level: 85, category: 'BACKEND' },
            { name: 'EXPRESS', level: 85, category: 'BACKEND' },
            { name: 'POSTGRESQL', level: 85, category: 'BACKEND' },
            { name: 'TAILWIND CSS', level: 90, category: 'FRONTEND' },
            { name: 'VITE', level: 85, category: 'TOOLS' },
            { name: 'VERCEL', level: 90, category: 'TOOLS' },
            { name: 'RAILWAY', level: 85, category: 'TOOLS' },
            { name: 'CLOUDFLARE', level: 80, category: 'TOOLS' },
            
            { name: 'POO (OOP)', level: 95, category: 'CORE' },
            { name: 'C++', level: 85, category: 'CORE' },
            { name: 'HTML5', level: 99, category: 'FRONTEND' },
            { name: 'CSS3 / SASS', level: 99, category: 'FRONTEND' },
            { name: 'BOOTSTRAP', level: 99, category: 'FRONTEND' },
            { name: 'ANGULAR', level: 85, category: 'FRONTEND' },
            { name: 'JAVASCRIPT', level: 80, category: 'FRONTEND' },
            { name: 'TYPESCRIPT', level: 80, category: 'FRONTEND' },
            { name: 'JAVA', level: 90, category: 'BACKEND' },
            { name: 'PHP', level: 85, category: 'BACKEND' },
            { name: 'SQL / MYSQL', level: 85, category: 'BACKEND' },
            { name: 'PYTHON', level: 80, category: 'BACKEND' },
            { name: 'GIT / GITHUB', level: 95, category: 'TOOLS' },
            { name: 'ENGLISH', level: 95, category: 'TOOLS' },
            { name: 'BASH / LINUX', level: 90, category: 'TOOLS' }
        ];
    }

    get studies(): Study[] {
        return [
            {
                title: 'TECNICATURA EN PROGRAMACIÓN',
                institution: 'UCES',
                period: '2025 - 2026',
                status: 'IN_PROGRESS',
                tags: ['C++', 'Java', 'POO', 'TDD', 'HTML5', 'CSS3', 'Bootstrap', 'Angular', 'PHP', 'TS', 'SQL']
            },
            {
                title: 'CIBERSEGURIDAD',
                institution: 'CODERHOUSE',
                period: '2025',
                status: 'COMPLETED',
                tags: ['Ciberseguridad', 'Ethical Hacking', 'Redes']
            },
            {
                title: 'DESARROLLO WEB',
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
            },
            {
                title: 'ANALISTA EN SISTEMAS',
                institution: 'INSTITUTO TECNOLÓGICO ORT',
                period: '2020 - 2022',
                status: 'ABANDONED',
                tags: ['Java', 'SQL', 'HTML5', 'CSS3', 'SCRUM', 'UML', 'BPMN']
            }
        ];
    }

    get projects(): Project[] {
        return [
            {
                id: '01',
                name: 'BREATH SHOP',
                type: 'FULL-STACK E-COMMERCE',
                status: 'DEPLOYED',
                description: 'Plataforma de comercio electrónico robusta con arquitectura MVC. Backend en PHP nativo optimizado. Frontend modular SPA construido con Angular 17+.',
                techStack: ['Angular', 'PHP', 'MySQL', 'JWT', 'MVC'],
                githubUrl: 'https://github.com/Wolpi066/Breath',
                videoUrl: 'assets/heroBreathe.mp4'
            },
            {
                id: '02',
                name: 'EL CISMA',
                type: 'GAME DEVELOPMENT',
                status: 'PROTOTYPE',
                description: 'Videojuego 2D de alto rendimiento desarrollado en C++ utilizando Raylib. Metodología TDD para físicas y lógica.',
                techStack: ['C++', 'Raylib', 'CodeBlocks', 'TDD'],
                githubUrl: 'https://github.com/Wolpi066/ElCisma',
                videoUrl: 'assets/ElCisma.mp4'
            },
            {
                id: '03',
                name: 'WARFRAME TUTOR',
                type: 'FRONTEND INFO-SITE',
                status: 'DEPLOYED',
                description: 'Plataforma web de guías para Warframe. Diseño responsivo con Bootstrap 5, navegación multinivel y optimización gráfica.',
                techStack: ['HTML5', 'CSS3', 'Bootstrap 5', 'Responsive'],
                githubUrl: 'https://github.com/Wolpi066/warframetutor',
                heroImage: 'assets/Rhino_Banner.avif'
            },
            {
                id: '04',
                name: 'E-COMMERCE B2B & POS',
                type: 'FULL-STACK ENTERPRISE',
                status: 'EN STAGING (Confidencial)',
                isConfidential: true,
                description: "Plataforma transaccional dual (Mayorista/Minorista) con Punto de Venta integrado, importación masiva 'All-or-Nothing', procesamiento seguro de Webhooks (Mercado Pago) y Cron Jobs.",
                technicalHighlight: "Resolución de condiciones de carrera mediante bloqueos transaccionales (FOR UPDATE) en PostgreSQL puro y blindaje de seguridad contra manipulación de payloads.",
                techStack: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Mercado Pago'],
            }
        ];
    }
}