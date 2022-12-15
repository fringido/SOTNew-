
export interface LoginResponse {
    id:     string;
    nombre: string;
    rol:    Rol;
    token:  string;
}

export interface Rol {
    nombre:   string;
    permisos: Permiso[];
}

export interface Permiso {
    nombre: string;
    valor:  boolean;
    acceso: string;
    menu:   MenuEnum;
}

export enum MenuEnum {
    Habitaciones = "HABITACIONES",
}
