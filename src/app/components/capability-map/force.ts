/**
 * Simulacion de fuerzas para el mapa de capacidades.
 *
 * Escrita a mano en vez de traer d3-force: son cincuenta nodos, la version
 * O(n²) son 2.500 pares por cuadro —nada— y tener el integrador propio deja
 * afinar el tacto del arrastre, que es justamente lo que hay que sentir bien.
 */

export type NodeKind = 'group' | 'cap' | 'system';

export interface GNode {
    id: string;
    kind: NodeKind;
    /** Cuanto empuja este nodo. Las areas mucho, para separar los racimos. */
    charge: number;
    label: string;
    /** Color base del nodo. */
    color: string;
    /** Radio de dibujo. */
    r: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    /** Fijado por el puntero: la fisica no lo mueve. */
    pinned?: boolean;
    /** Datos que el componente necesita al hacer clic. */
    payload?: unknown;
    /** Vecinos, precalculado para el resaltado. */
    near: Set<string>;
}

export interface GLink {
    a: GNode;
    b: GNode;
    /** Largo de reposo del resorte. */
    len: number;
    /** Que tan rigido tira. */
    k: number;
}

const REPULSION = 2400;
const DAMPING = 0.86;
const GRAVITY = 0.0026;
/** Por debajo de esto el nodo se considera quieto y se deja de integrar. */
const SLEEP = 0.0016;

export class ForceGraph {
    nodes: GNode[] = [];
    links: GLink[] = [];
    /** Cae de 1 a 0: al principio la simulacion se mueve, despues se asienta. */
    alpha = 1;

    constructor(nodes: GNode[], links: GLink[]) {
        this.nodes = nodes;
        this.links = links;
    }

    /** Vuelve a agitar la simulacion, por ejemplo al soltar un nodo. */
    reheat(v = 0.55) {
        this.alpha = Math.max(this.alpha, v);
    }

    step(w: number, h: number) {
        const n = this.nodes;
        const cx = w / 2;
        const cy = h / 2;

        // --- Repulsion entre todos los pares -----------------------------
        for (let i = 0; i < n.length; i++) {
            const a = n[i];
            for (let j = i + 1; j < n.length; j++) {
                const b = n[j];
                let dx = b.x - a.x;
                let dy = b.y - a.y;
                let d2 = dx * dx + dy * dy;
                // Sin piso, dos nodos superpuestos generan una fuerza infinita
                // y la simulacion explota en el primer cuadro.
                if (d2 < 1) { d2 = 1; dx = Math.random() - 0.5; dy = Math.random() - 0.5; }
                const f = (REPULSION * a.charge * b.charge) / d2;
                const d = Math.sqrt(d2);
                const fx = (dx / d) * f;
                const fy = (dy / d) * f;
                a.vx -= fx; a.vy -= fy;
                b.vx += fx; b.vy += fy;
            }
        }

        // --- Resortes de las aristas --------------------------------------
        for (const l of this.links) {
            const dx = l.b.x - l.a.x;
            const dy = l.b.y - l.a.y;
            const d = Math.hypot(dx, dy) || 1;
            const f = (d - l.len) * l.k;
            const fx = (dx / d) * f;
            const fy = (dy / d) * f;
            l.a.vx += fx; l.a.vy += fy;
            l.b.vx -= fx; l.b.vy -= fy;
        }

        // --- Gravedad al centro e integracion ------------------------------
        let moving = 0;
        for (const p of n) {
            if (p.pinned) { p.vx = 0; p.vy = 0; continue; }

            // Los grupos tiran mas fuerte al centro: son el esqueleto.
            const g = GRAVITY * (p.kind === 'group' ? 2.6 : 1);
            p.vx += (cx - p.x) * g;
            p.vy += (cy - p.y) * g;

            p.vx *= DAMPING;
            p.vy *= DAMPING;
            p.x += p.vx * this.alpha;
            p.y += p.vy * this.alpha;

            // Paredes blandas: en vez de frenar en seco, el nodo rebota
            // perdiendo energia. Sin esto el grafo se desborda del recuadro.
            const pad = p.r + 14;
            if (p.x < pad) { p.x = pad; p.vx = Math.abs(p.vx) * 0.4; }
            else if (p.x > w - pad) { p.x = w - pad; p.vx = -Math.abs(p.vx) * 0.4; }
            if (p.y < pad) { p.y = pad; p.vy = Math.abs(p.vy) * 0.4; }
            else if (p.y > h - pad) { p.y = h - pad; p.vy = -Math.abs(p.vy) * 0.4; }

            moving += Math.abs(p.vx) + Math.abs(p.vy);
        }

        // La simulacion se enfria sola; si nadie la toca, se queda quieta.
        this.alpha *= 0.985;
        if (moving / n.length < SLEEP) this.alpha *= 0.9;
        if (this.alpha < 0.001) this.alpha = 0;
    }

    /** El nodo bajo el puntero, o null. */
    pick(x: number, y: number): GNode | null {
        // De atras para adelante: gana el que se dibuja arriba.
        for (let i = this.nodes.length - 1; i >= 0; i--) {
            const p = this.nodes[i];
            const hit = p.r + 9;
            if ((x - p.x) ** 2 + (y - p.y) ** 2 <= hit * hit) return p;
        }
        return null;
    }
}
