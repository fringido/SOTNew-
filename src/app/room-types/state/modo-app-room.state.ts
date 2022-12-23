
export interface ModoAppRoomState {
    cambio: boolean;
    seleccionada: boolean;
    noSeleccionada: boolean;
}

export const ModoAppInitialState: ModoAppRoomState = {
    cambio: false,
    seleccionada: false,
    noSeleccionada: true
}