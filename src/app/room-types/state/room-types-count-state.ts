
export enum RoomStateCountKeys {
    libre = 'libre',
    porCobrar = 'porCobrar',
    preparada = 'preparada',
    ocupada = 'ocupada',
    roomService = 'roomService',
    sucia = 'sucia',
    mediaSucia = 'mediaSucia',
    enLimpieza = 'enLimpieza',
    enSupervision = 'enSupervision',
    reservada = 'reservada',
    reservadaPreparada = 'reservadaPreparada',
    bloqueada = 'bloqueada',
    mantenimiento = 'mantenimiento',
    alertas = 'alertas',
}

export interface RoomStateCount {
    libre: number;
    porCobrar: number;
    preparada: number;
    ocupada: number;
    roomService: number;
    sucia: number;
    mediaSucia: number;
    enLimpieza: number;
    enSupervision: number;
    reservada: number;
    reservadaPreparada: number;
    bloqueada: number;
    mantenimiento: number;
    alertas: number;
}

export const RoomStateCountInitialState: {[key in RoomStateCountKeys]: number} = {
    libre: 0,
    porCobrar: 0,
    preparada: 0,
    ocupada: 0,
    roomService: 0,
    sucia: 0,
    mediaSucia: 0,
    enLimpieza: 0,
    enSupervision: 0,
    reservada: 0,
    reservadaPreparada: 0,
    bloqueada: 0,
    mantenimiento: 0,
    alertas: 0
}
