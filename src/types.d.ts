/* src/types.d.ts */
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher } from 'three';

    export class OrbitControls extends EventDispatcher {
        constructor(object: Camera, domElement?: HTMLElement);

        // Propiedades explícitas (Agregamos las que faltaban)
        enableDamping: boolean;
        dampingFactor: number;
        enablePan: boolean;
        minDistance: number;
        maxDistance: number;

        // 👇 Estas son las nuevas que solucionan tu error
        autoRotate: boolean;
        autoRotateSpeed: number;

        // Métodos
        update(): boolean;
        dispose(): void;

        // Index signature para otras props desconocidas
        [key: string]: any;
    }
}