/**
 * Parte un nombre de tecnologia en tokens comparables.
 *
 * Los dos lados se escriben distinto: la matriz dice "THREE.JS / WEBGL" y el
 * stack de un proyecto dice "three.js"; uno dice "NEXT.JS" y el otro
 * "Next.js 16". Antes de comparar hay que sacar la aclaracion entre
 * parentesis, la version del final y los separadores.
 *
 * La comparacion despues es por igualdad exacta de tokens, nunca por
 * subcadena: con subcadenas "JAVA" matcheaba con "JavaScript", que es
 * justo lo contrario de lo que la matriz afirma.
 */
export function techTokens(value: string): string[] {
    return value
        // "PHP (MVC nativo)" -> "PHP"
        .replace(/\([^)]*\)/g, ' ')
        // "Next.js 16" -> "Next.js" · "Auth.js v5" -> "Auth.js" · "Angular 17+" -> "Angular"
        .replace(/\s*v?\d+(\.\d+)*\+?\s*$/i, '')
        .split('/')
        .map(part =>
            part
                .toLowerCase()
                .normalize('NFD')
                .replace(/[̀-ͯ]/g, '')
                .replace(/[^a-z0-9+]/g, '')
                // "webgl2" -> "webgl", "html5" -> "html"
                .replace(/\d+$/, '')
        )
        .filter(t => t.length >= 2)
        // El sufijo ".js" se escribe cuando se quiere: el stack dice
        // "React.js" en un proyecto y "React 19" en otro. Se emiten las dos
        // formas para que los dos lados puedan encontrarse.
        .flatMap(t => (t.endsWith('js') && t.length > 4 ? [t, t.slice(0, -2)] : [t]));
}
