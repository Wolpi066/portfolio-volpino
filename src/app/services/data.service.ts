import { Injectable } from '@angular/core';

export interface Skill {
    name: string;
    level: number; // 0 a 100
    category: 'CORE' | 'FRONTEND' | 'CREATIVE';
}

export interface Project {
    id: string;
    name: string;
    type: string;
    status: 'DEPLOYED' | 'PROTOTYPE';
}

@Injectable({
    providedIn: 'root'
})
export class DataService {

    get profile() {
        return {
            name: 'EMILIANO VOLPINO',
            role: 'FULL-STACK ENGINEER',
            location: 'ARGENTINA, EARTH',
            ip: '192.168.0.66',
            version: 'v2.5.0'
        };
    }

    get skills(): Skill[] {
        return [
            { name: 'ANGULAR 17+', level: 95, category: 'FRONTEND' },
            { name: 'TYPESCRIPT', level: 90, category: 'CORE' },
            { name: 'THREE.JS', level: 75, category: 'CREATIVE' },
            { name: 'CSS/SCSS', level: 85, category: 'FRONTEND' },
            { name: 'PHP / NODE', level: 70, category: 'CORE' },
        ];
    }

    get projects(): Project[] {
        return [
            { id: '01', name: 'BREATH_SHOP', type: 'E-COMMERCE ARCHITECTURE', status: 'DEPLOYED' },
            { id: '02', name: 'VOXEL_ENGINE', type: 'WEBGL EXPERIMENT', status: 'PROTOTYPE' },
        ];
    }
}