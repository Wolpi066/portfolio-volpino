declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

declare module 'three/examples/jsm/controls/OrbitControls.js' {
    import { Camera, EventDispatcher } from 'three';

    export class OrbitControls extends EventDispatcher {
        constructor(object: Camera, domElement?: HTMLElement);

        enableDamping: boolean;
        dampingFactor: number;
        enablePan: boolean;
        minDistance: number;
        maxDistance: number;

        autoRotate: boolean;
        autoRotateSpeed: number;

        // Métodos
        update(): boolean;
        dispose(): void;

        // Index signature para otras props desconocidas
        [key: string]: any;
    }
}