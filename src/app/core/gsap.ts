import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

let registered = false;

/**
 * Registra los plugins una sola vez. GSAP se queja si se lo hace por
 * componente, y con varias ventanas abiertas eso pasaria en cada apertura.
 */
export function useGsap() {
    if (!registered) {
        gsap.registerPlugin(Draggable, InertiaPlugin);
        registered = true;
    }
    return { gsap, Draggable };
}

export { gsap, Draggable };
