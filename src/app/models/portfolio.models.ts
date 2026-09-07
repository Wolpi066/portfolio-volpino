// src/app/models/portfolio.models.ts

import { L10n } from '../services/i18n.service';

export interface Skill {
    name: string;
    category: 'CORE' | 'FRONTEND' | 'BACKEND' | 'TOOLS';
}

/** Dato duro de un proyecto: el valor va grande, la etiqueta chica. */
export interface Metric {
    value: string;
    label: string;
}

export type ProjectStatus =
    | 'PRODUCTION'
    | 'DELIVERED'
    | 'DEPLOYED'
    | 'IN_DEVELOPMENT'
    | 'PROTOTYPE'
    | 'ARCHIVED';

/**
 * Peso editorial. FEATURED va arriba y con todo el detalle; ACTIVE es trabajo
 * publicado o en curso que no compite con esos; ARCHIVE es la fila compacta
 * del final: sirve para mostrar rango, no para pelear atencion.
 */
export type ProjectGroup = 'FEATURED' | 'ACTIVE' | 'ARCHIVE';

/** Las capturas de escritorio y las de telefono no se pueden grillar igual. */
export type GalleryLayout = 'wide' | 'phone';

/** Un video demo se juega; uno de hero es solo la pieza visual de la portada. */
export type VideoKind = 'demo' | 'hero';

/** Captura con su texto alternativo ya resuelto al idioma activo. */
export interface Shot {
    src: string;
    alt: string;
}

export interface Project {
    id: string;
    name: string;
    /** Identificador legible para enlazar el proyecto (#/p/it-deck). */
    slug: string;
    group: ProjectGroup;
    type: string;
    status: ProjectStatus;
    /** Que hace y para quien. Dos o tres lineas. */
    description: string;
    /** El problema tecnico mas dificil que resolvi aca. Es lo que diferencia. */
    technicalHighlight?: string;
    /** Que hice yo. Todos los construi solo, pero conviene decirlo. */
    role?: string;
    metrics?: Metric[];
    techStack: string[];
    gallery?: Shot[];
    galleryLayout?: GalleryLayout;
    /** Aclaracion al pie del detalle (ej: por que hay datos tapados). */
    note?: string;
    githubUrl?: string;
    /** Hay repo, pero es privado: se menciona, no se linkea. */
    repoPrivate?: boolean;
    liveUrl?: string;
    videoUrl?: string;
    videoKind?: VideoKind;
    videoPoster?: string;
}

/**
 * Lo que se escribe a mano en projects.data.ts: igual que Project pero con los
 * textos en los dos idiomas. DataService lo resuelve al idioma activo.
 */
export interface ProjectSeed {
    id: string;
    name: string;
    group: ProjectGroup;
    type: L10n;
    status: ProjectStatus;
    description: L10n;
    technicalHighlight?: L10n;
    role?: L10n;
    /** El valor puede ser un numero igual en los dos idiomas o texto traducible. */
    metrics?: { value: string | L10n; label: L10n }[];
    /** Casi siempre nombres propios; algun tag se dice distinto en cada idioma. */
    techStack: (string | L10n)[];
    gallery?: { src: string; alt: L10n }[];
    galleryLayout?: GalleryLayout;
    note?: L10n;
    githubUrl?: string;
    repoPrivate?: boolean;
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
