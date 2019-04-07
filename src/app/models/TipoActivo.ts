
import { ActivosFijos } from './ActivosFijos';
import { Areas } from './areas';
import { Personas } from './Personas';

export class TipoActivo {
    id: number;
    creadoPor: string;
    actualizado: string;
    creado: string;
    actualizadoPor: string;
    nombre: string;
    descripcion: string;
    serial: string;
    numeroInventario: string;
    peso: string;
    alto: string;
    ancho: string;
    largo: string;
    valorCompra: string;
    fechaCompra: string;
    fechaBaja: string;
    estado: string;
    color: string;
    activoFijo: ActivosFijos;
    area: Areas;
    persona: Personas;
}