import { Injectable } from '@angular/core';

export interface Skill {
    name: string;
    level: number; // 0 - 100
    category: 'CORE' | 'FRONTEND' | 'BACKEND' | 'TOOLS';
}

export interface Project {
    id: string;
    name: string;
    type: string;
    status: 'DEPLOYED' | 'PROTOTYPE' | 'IN_PROGRESS';
    description: string;
    techStack: string[];
    githubUrl?: string;
}

export interface Study {
    title: string;
    institution: string;
    period: string;
    tags: string[];
    certificate?: string;
    status: 'COMPLETED' | 'IN_PROGRESS' | 'ABANDONED';
}

@Injectable({
    providedIn: 'root'
})
export class DataService {

    get profile() {
        const birthDate = new Date('2003-09-09');
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        return {
            name: 'EMILIANO VOLPINO',
            title: 'FULL STACK DEVELOPER & CREATIVE CODER',
            age: age,
            location: 'CABA, ARGENTINA',
            email: 'volpinoemiliano@gmail.com',
            phone: '+54 11 4989-1159',
            github: 'github.com/Wolpi066',
            // CORRECCIÓN: Ruta directa a raíz (public)
            photo: 'fotoDePerfil.png',
            bio: `Soy estudiante de programación con gran interés en desarrollarme profesionalmente dentro del área IT. Me apasiona programar y aprender nuevas tecnologías. Me caracterizo por mi rápido aprendizaje, la capacidad para resolver problemas de manera creativa y la facilidad para integrarme en equipos de trabajo. Actualmente me encuentro ampliando mis habilidades en desarrollo web y programación.`
        };
    }

    get skills(): Skill[] {
        return [
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
                tags: ['C++', 'Java', 'POO', 'TDD (Tau)', 'HTML5', 'CSS3', 'Bootstrap', 'Angular', 'PHP', 'TypeScript', 'SQL', 'Raylib']
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
                // CORRECCIÓN: Ruta directa
                certificate: 'certificadoCoderDesarrolloWeb.png'
            },
            {
                title: 'JAVASCRIPT',
                institution: 'CODERHOUSE',
                period: '2022',
                status: 'COMPLETED',
                tags: ['JavaScript', 'DOM', 'Events', 'Async'],
                // CORRECCIÓN: Ruta directa
                certificate: 'certificadoCoderJavaScript.png'
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
                description: 'Plataforma de comercio electrónico robusta con arquitectura MVC. Backend en PHP nativo optimizado con autenticación JWT y base de datos MySQL. Frontend modular SPA construido con Angular 17+ y diseño responsivo. Incluye gestión de stock inteligente y panel de administración.',
                techStack: ['Angular', 'PHP', 'MySQL', 'JWT', 'MVC'],
                githubUrl: 'https://github.com/Wolpi066/Breath'
            },
            {
                id: '02',
                name: 'EL CISMA',
                type: 'GAME DEVELOPMENT',
                status: 'PROTOTYPE',
                description: 'Videojuego 2D de alto rendimiento desarrollado en C++ utilizando la librería gráfica Raylib. Implementado bajo metodología TDD (Test Driven Development) con Tau para asegurar la estabilidad del motor físico y la lógica del juego.',
                techStack: ['C++', 'Raylib', 'CodeBlocks', 'TDD'],
                githubUrl: 'https://github.com/Wolpi066/ElCisma'
            },
        ];
    }
}