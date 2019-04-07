import { TipoActivo } from './TipoActivo';

export class ActivosFijos {
    id: number;
    creadoPor: number = 101;
    actualizadoPor: number = 101;
    nombre: string;
    descripcion: string;
    estado: string;
    tipoActivo: Array<TipoActivo> = [];
}