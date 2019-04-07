import { TipoActivo } from './TipoActivo';

export class ActivosFijos {
    id: number;
    nombre: string;
    descripcion: string;
    estado: string;
    tipoActivo: Array<TipoActivo> = [];
}