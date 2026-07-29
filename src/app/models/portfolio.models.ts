// src/app/models/portfolio.models.ts

export interface Skill {
    name: string;
    category: 'CORE' | 'FRONTEND' | 'BACKEND' | 'TOOLS';
}

/** Dato duro de un proyecto: el valor va grande, la etiqueta chica. */
export interface Metric {
    value: string;
    label: string;
}

export type ProjectStatus = 'PRODUCTION' | 'DELIVERED' | 'DEPLOYED' | 'PROTOTYPE';

/** Un video demo se juega; uno de hero es solo la pieza visual de la portada. */
export type VideoKind = 'demo' | 'hero';

export interface Project {
    id: string;
    name: string;
    type: string;
    status: ProjectStatus;
    /** Que hace y para quien. Dos o tres lineas. */
    description: string;
    /** El problema tecnico mas dificil que resolvi aca. Es lo que diferencia. */
    technicalHighlight?: string;
    metrics?: Metric[];
    techStack: string[];
    gallery?: string[];
    /** Aclaracion al pie del detalle (ej: por que hay datos tapados). */
    note?: string;
    githubUrl?: string;
    liveUrl?: string;
    videoUrl?: string;
    videoKind?: VideoKind;
    videoPoster?: string;
}

export interface Study {
    title: string;
    institution: string;
    period: string;
    tags: string[];
    certificate?: string;
    status: 'COMPLETED' | 'IN_PROGRESS';
}
