// src/app/models/portfolio.models.ts
export interface Skill {
    name: string;
    level: number;
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
    videoUrl?: string;
    heroImage?: string;
}

export interface Study {
    title: string;
    institution: string;
    period: string;
    tags: string[];
    certificate?: string;
    status: 'COMPLETED' | 'IN_PROGRESS' | 'ABANDONED';
}