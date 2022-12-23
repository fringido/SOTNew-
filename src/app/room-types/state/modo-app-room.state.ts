
export interface ModoAppRoomState {
    cambio: boolean;
    seleccionada: boolean;
    noSeleccionada: boolean;
}

export const ModoAppRoomInitialState: ModoAppRoomState = {
    cambio: false,
    seleccionada: false,
    noSeleccionada: true
}