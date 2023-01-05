import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

/** Objecto que contiene los comapos que representan a la entidad Acceso */
export type Acceso = {
  __typename?: 'Acceso';
  /** UUID de la entidad Acceso */
  id: Scalars['ID'];
  /** Nombre de la entidad Acceso */
  nombre: Scalars['String'];
};

/** Campos necesarios para crear una entidad Estado Habitacion en la base de datos */
export type CreateEstadoHabitacionInput = {
  /** Nombre de la entidad Estado Habitacion */
  nombre: Scalars['String'];
};

/** Campos necesarios para crear una nueva entidad Habitacion en la base de datos */
export type CreateHabitacionInput = {
  /** Id del Estado de la Habitacion */
  estadoHabitacionId: Scalars['ID'];
  /** Numero de la habitacion */
  numeroHabitacion: Scalars['Int'];
  /** Piso en el que se encuentra la habitacion */
  piso: Scalars['Int'];
  /** Id del Tipo de Habitacion a la que pertenece la habitacion */
  tipoHabitacionId: Scalars['ID'];
};

/** Objeto que contiene los campos requeridos para crear una entidad Renta */
export type CreateRentaInput = {
  /** UUID de la Habitacion a la cual pertenece la entidad Renta */
  habitacionId: Scalars['String'];
  /** Numero de horas extra solicitadas */
  horasExtra: Scalars['Int'];
  /** Numero de hospedajes extra solicitados */
  hospedajesExtra: Scalars['Int'];
  /** ??? */
  numeroServicio: Scalars['String'];
  /** Numero de personas extra solicitadas */
  personasExtra: Scalars['Int'];
  /** UUID de la Tarifa a la cual pertenece la entidad Renta */
  tarifaId: Scalars['String'];
};

/** Objecto que contiene los campo necesarios para crear una entidad Tarifa */
export type CreateTarifaInput = {
  /** Costo de la renta de la habitacion */
  costoHabitacion: Scalars['Int'];
  /** Costo de una hora extra */
  costoHoraExtra: Scalars['Int'];
  /** Costo de un hospedaje extra */
  costoHospedajeExtra: Scalars['Int'];
  /** Costo de una persona extra */
  costoPersonaExtra: Scalars['Int'];
  /** Indica si la tarifa aplica en los dias domingo */
  domingo: Scalars['Boolean'];
  /** Numero de horas que dura la renta de una habitacion de la entidad Tarifa */
  duracion: Scalars['Int'];
  /** Fecha en la que termine la aplicacion de la Tarifa */
  fechaFinal: Scalars['Date'];
  /** Fecha a partir de la cual se empieza a aplicar la Tarifa */
  fechaInicio: Scalars['Date'];
  /** Hora en la que finaliza la aplicacion de la Tarifa. Formato HH:mm:ss */
  horaFinal: Scalars['String'];
  /** Hora a partir de la cual empieza a aplicar la entidad Tarifa. Formato HH:mm:ss */
  horaInicio: Scalars['String'];
  /** Numero maximo de horas extra que se pueden solicitar */
  horasExtraMax: Scalars['Int'];
  /** Numero maximo de hospedajes extra que se pueden solicitar */
  hospedajesExtraMax: Scalars['Int'];
  /** Indica si la tarifa aplica en los dias jueves */
  jueves: Scalars['Boolean'];
  /** Indica si la tarifa aplica en los dias lunes */
  lunes: Scalars['Boolean'];
  /** Indica si la tarifa aplica en los dias martes */
  martes: Scalars['Boolean'];
  /** Indica si la tarifa aplica en los dias miercoles */
  miercoles: Scalars['Boolean'];
  /** Nombre de la entidad Tarifa */
  nombre: Scalars['String'];
  /** Numero maximo de personas extra que se pueden solicitar */
  personasExtraMax: Scalars['Int'];
  /** Indica si la tarifa aplica en los dias sabado */
  sabado: Scalars['Boolean'];
  /** UUID del Tipo de Habitacion a la cual pertenece la entidad Tarifa */
  tipoHabitacionId: Scalars['ID'];
  /** Indica si la tarifa aplica en los dias viernes */
  viernes: Scalars['Boolean'];
};

/** Objeto que contiene los campos necesarios para crear una entidad Tipo Habitacion */
export type CreateTipoHabitacionInput = {
  /** Clave que representa a la entidad Tipo Habitacion */
  clave: Scalars['String'];
  /** Descripcion de la entidad Tipo Habitacion */
  descripcion: Scalars['String'];
  /** Numero maximo de reservaciones que se le pueden asignar a la habitacion */
  maximoReservaciones: Scalars['Int'];
  /** Promedio de minutos que una habitacion tarda en relizar el proceso de entrada */
  minutosEntrada: Scalars['Int'];
  /** Promedio de minutos que una habitacion tarda en realizar el proceso de Limpieza estando medio sucia */
  minutosMediaSucia: Scalars['Int'];
  /** Promedio de minutos que una habitacion tarda en realizar el proceso de Limpieza estando sucia */
  minutosSucia: Scalars['Int'];
  /** Nombre de la entidad Tipo Habitacion */
  nombre: Scalars['String'];
};

/** Objecto que contiene los campos que representan a la entidad Estado Habitacion */
export type EstadoHabitacion = {
  __typename?: 'EstadoHabitacion';
  /** Campo que nos indica si la entidad Estado Habitacion se encuentra activa */
  activo: Scalars['Boolean'];
  /** UUID de la entidad Estado Habitacion */
  id: Scalars['ID'];
  /** Nombre de la entidad Estado Habitacion */
  nombre: Scalars['String'];
};

/** Objecto que contiene los campos que representan a la entidad Habitacion */
export type Habitacion = {
  __typename?: 'Habitacion';
  /** Indica si la entidad Habitacion esta activa, es decir, si ya ha sido marcada como eliminada */
  activo: Scalars['Boolean'];
  /** Informacion del Estado de la Habitacion a la cual pertenece la entidad Habitacion */
  estadoHabitacion: EstadoHabitacion;
  /** UUID de la entidad Habitacion */
  id: Scalars['ID'];
  /** Numero de la entidad Habitacion */
  numeroHabitacion: Scalars['Int'];
  /** Piso en la cual se encuentra la entidad Habitacion */
  piso: Scalars['Int'];
  /** Informacion del Tipo de Habitacion a la cual pertenece la entidad Habitacion */
  tipoHabitacion: TipoHabitacion;
  /** Informacion del Usuario que se encuentra actualmente revisando la entidad Habitacion, este campo puede ser nulo */
  usuarioRevision?: Maybe<Usuario>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Mutacion que actualiza la entidad EstadoHabitacion con los parametros ingresados */
  actualizar_estado_habitacion: EstadoHabitacion;
  /** Actualiza la informacion de la entidad Habitacion indicada */
  actualizar_habitacion: Scalars['String'];
  /** Mutacion que actualiza la entidad Renta con los parametros ingresados */
  actualizar_renta: Scalars['String'];
  /** Mutacion que actualiza la entidad Tarifa con los parametros proporcionados */
  actualizar_tarifa: Tarifa;
  /** Mutacion que actualiza la entidad TipoHabitacion con los parametros proporcionados */
  actualizar_tipo_habitacion: Scalars['String'];
  /** Cambia el estado de la entidad Habitacion indicada */
  cambiar_estado: Scalars['String'];
  /** Mutacion que crea una nueva entidad Estado Habitacion con los parametros ingresados */
  crear_estado_habitacion: Scalars['String'];
  /** Crea una nueva entidad Habitacion en la base de datos */
  crear_habitacion: Scalars['String'];
  /** Mutacion que crea una entidad Renta con los parametros ingresados */
  crear_renta: Scalars['String'];
  /** Mutacion que crea una entidad Tarifa con los parametros proporcionados */
  crear_tarifa: Scalars['String'];
  /** Mutacion que crea una entidad TipoHabitacion con los parametros proporcionados */
  crear_tipo_habitacion: Scalars['String'];
  /** Mutacion que desactiva la entidad EstadoHabitacion */
  eliminar_estado_habitacion: EstadoHabitacion;
  /** Mutacion que desactiva la entidad Habitacion */
  eliminar_habitacion: Scalars['String'];
  /** Mutacion que desactiva la entidad Tarifa */
  eliminar_tarifa: Tarifa;
  /** Mutacion que desactiva la entidad TipoHabitacion */
  eliminar_tipo_habitacion: Scalars['String'];
  /** Actualiza la informacion del campo usuarioRevision de la entidad Habitacion */
  revisar_habitacion: Scalars['String'];
};


export type MutationActualizar_Estado_HabitacionArgs = {
  updateEstadosHabitacioneInput: UpdateEstadoHabitacionInput;
};


export type MutationActualizar_HabitacionArgs = {
  updateHabitacioneInput: UpdateHabitacionInput;
};


export type MutationActualizar_RentaArgs = {
  updateRentaInput: UpdateRentaInput;
};


export type MutationActualizar_TarifaArgs = {
  updateTarifaInput: UpdateTarifaInput;
};


export type MutationActualizar_Tipo_HabitacionArgs = {
  actualizar_tipo_habitacion: UpdateTipoHabitacionInput;
};


export type MutationCambiar_EstadoArgs = {
  estado: ValidEstadosHabitaciones;
  id: Scalars['ID'];
};


export type MutationCrear_Estado_HabitacionArgs = {
  createEstadosHabitacioneInput: CreateEstadoHabitacionInput;
};


export type MutationCrear_HabitacionArgs = {
  createHabitacioneInput: CreateHabitacionInput;
};


export type MutationCrear_RentaArgs = {
  createRentaInput: CreateRentaInput;
};


export type MutationCrear_TarifaArgs = {
  createTarifaInput: CreateTarifaInput;
};


export type MutationCrear_Tipo_HabitacionArgs = {
  createTiposHabitacioneInput: CreateTipoHabitacionInput;
};


export type MutationEliminar_Estado_HabitacionArgs = {
  id: Scalars['ID'];
};


export type MutationEliminar_HabitacionArgs = {
  id: Scalars['ID'];
};


export type MutationEliminar_TarifaArgs = {
  id: Scalars['ID'];
};


export type MutationEliminar_Tipo_HabitacionArgs = {
  id: Scalars['String'];
};


export type MutationRevisar_HabitacionArgs = {
  enRevision: Scalars['Boolean'];
  id: Scalars['ID'];
};

/** Objecto que contiene los campos que representan a la entidad Permiso */
export type Permiso = {
  __typename?: 'Permiso';
  /** Informacion del Acceso al cual pertenece la entidad Permiso */
  acceso: Acceso;
  /** UUID de la entidad Permiso */
  id: Scalars['ID'];
  /** Nombre de la entidad Permiso */
  nombre: Scalars['String'];
  /** Informacion del Rol al cual pertenece la entidad Permiso */
  rol: Rol;
  /** Informacion del Usuario al cual pertenece la entidad Permiso */
  usuario: Array<UsuarioResponse>;
  /** Campo que indica el valor de al entidad Permiso, es decir, si el usuario al cual pertenece tiene dicho permiso o no */
  valor: Scalars['Boolean'];
};

/** Objeto que contiene los campos que representan a la entidad PermisosUsuarioResponse */
export type PermisoUsuarioResponse = {
  __typename?: 'PermisoUsuarioResponse';
  /** Nombre del Acceso al cual pertenece la entidad PermisoUsuarioResponse */
  acceso: Scalars['String'];
  /** UUID de la entidad PermisoUsuarioResponse */
  id: Scalars['ID'];
  /** Nombre del Menu al cual pertenece la entidad PermisoUsuarioResponse */
  menu: Scalars['String'];
  /** Nombre de la entidad PermisoUsuarioResponse */
  nombre: Scalars['String'];
  /** Indica si el usuario tiene permiso o no de acceder a la caracteristica que representa el permiso */
  valor: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  /** Query que obtiene una entidad EstadoHabitacion que cumpla con los argumentos solicitados */
  estado_habitacion: EstadoHabitacion;
  /** Query que obtiene una lista de entidades EstadoHabitacion que cumplan con los argumentos solicitados */
  estados_habitaciones: Array<EstadoHabitacion>;
  /** Consulta la información de la entidad Habitacion que coincida con los argumentos de busqueda */
  habitacion: Habitacion;
  /** Consulta la informacion de todas la entidades de Habitacion que coincidan con los argumentos de busqueda */
  habitaciones: Array<Habitacion>;
  /** Query que obtiene una entidad Permiso que cumpla con los argumentos solicitados */
  permiso: Permiso;
  /** Query que obtiene una lista de entidades Permiso que cumplan con los argumentos de busqueda */
  permisos: Array<Permiso>;
  /** Query que obtiene una entidad Renta que cumpla con los argumentos de busqueda */
  renta: Renta;
  /** Query que obtiene una lista de entidades Renta que cumplan con los argumentos de busqueda */
  rentas: Array<Renta>;
  /** Query que obtiene una entidad Rol que cumpla con los argumentos de busqueda */
  rol: Rol;
  /** Query que obtiene una lista de entidades Rol que cumplan con los argumentos de busqueda */
  roles: Array<Rol>;
  /** Query que obtiene una entidad Tarifa que cumpla con los argumentos de busqueda */
  tarifa: Tarifa;
  /** Query que obtiene una lista de entidades Tarifa que cumplan con los argumentos de busqueda */
  tarifas: Array<Tarifa>;
  /** Query que obtiene una entidad TipoHabitacion que coincida con los argumentos de busqueda */
  tipo_habitacion: TipoHabitacion;
  /** Query que obtiene una lista de entidades TipoHabitacion que cumplan con los argumentos de busqueda */
  tipos_habitaciones: Array<TipoHabitacion>;
  /** Query que obtiene una entidad UsuarioResponse que cumpla con los argumentos de busqueda */
  usuario: UsuarioResponse;
  /** Query que obtiene una lista de entidades UsuarioResponse que cumpla con los argumentos de busqueda */
  usuarios: Array<UsuarioResponse>;
};


export type QueryEstado_HabitacionArgs = {
  id_o_nombre: Scalars['String'];
};


export type QueryEstados_HabitacionesArgs = {
  activo?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHabitacionArgs = {
  id: Scalars['ID'];
};


export type QueryHabitacionesArgs = {
  activo?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPermisoArgs = {
  id: Scalars['ID'];
};


export type QueryPermisosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  ofset?: InputMaybe<Scalars['Int']>;
};


export type QueryRentaArgs = {
  id: Scalars['ID'];
};


export type QueryRentasArgs = {
  finalizada?: InputMaybe<Scalars['Boolean']>;
};


export type QueryRolArgs = {
  id_o_nombre: Scalars['String'];
};


export type QueryTarifaArgs = {
  id_o_nombre: Scalars['String'];
};


export type QueryTarifasArgs = {
  activo?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTipo_HabitacionArgs = {
  id_o_nombre: Scalars['String'];
};


export type QueryTipos_HabitacionesArgs = {
  activo?: InputMaybe<Scalars['Boolean']>;
};


export type QueryUsuarioArgs = {
  id: Scalars['ID'];
};


export type QueryUsuariosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  ofset?: InputMaybe<Scalars['Int']>;
};

/** Objeto que contiene los campos que representan a la entidad Renta */
export type Renta = {
  __typename?: 'Renta';
  /** Fecha-hora en la que finalizara la renta de la habitacion */
  fechaFin: Scalars['Date'];
  /** Fecha-hora en la que inicio la renta de la habitacion */
  fechaInicio: Scalars['Date'];
  /** Fecha-hora en la que se registro la entrada del cliente a la habitacion */
  fechaRegistro: Scalars['Date'];
  /** Fecha-hora en la que se registro la salida del cliente de la habitacion. Puede ser nulo */
  fechaSalida?: Maybe<Scalars['Date']>;
  /** Informacion de la Habitacion a la cual pertenece la entidad Renta */
  habitacion: Habitacion;
  /** Numero de horas extra solicitadas */
  horasExtra: Scalars['Int'];
  /** Numeros de hospedajes extra solicitados */
  hospedajesExtra: Scalars['Int'];
  /** UUID de la entidad Renta */
  id: Scalars['ID'];
  /** Descripcion del motivo por el cual la renta se cancelo */
  motivoCancelacion?: Maybe<Scalars['String']>;
  /** No se xd */
  numeroServicio: Scalars['String'];
  /** Numero de personas extra solicitadas */
  personasExtra: Scalars['Int'];
  /** Informacion de la Tarifa a la cual pertenece la entidad Renta */
  tarifa: Tarifa;
  /** Monto total de la renta de la habitacion, esto incluye el costo de la habitacion y los diferentes extras que se hayan solicitado */
  total: Scalars['Int'];
};

/** Objeto que contiene los campos que representan a la entidad Rol */
export type Rol = {
  __typename?: 'Rol';
  /** UUID de la entidad Rol */
  id: Scalars['ID'];
  /** Nombre de la entidad Rol */
  nombre: Scalars['String'];
  /** Lista con la informacion de todos los Usuarios que pertenecen a la entidad Rol */
  usuarios: Array<UsuarioResponse>;
};

/** Objeto que contiene los campos que representan a la entidad RolUsuarioResponse */
export type RolUsuarioResponse = {
  __typename?: 'RolUsuarioResponse';
  /** UUID de la entidad RolUsuarioResponse */
  id: Scalars['ID'];
  /** Nombre de la entidad RolUsuarioResponse */
  nombre: Scalars['String'];
  /** Lista de permisos de la entidad RolUsuarioResponse */
  permisos: Array<PermisoUsuarioResponse>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Escucha los cambios que afecten a las entidades Habitacion y regresa la informacion de las habitaciones actualizada */
  checkHabitaciones: Array<Habitacion>;
};

/** Objecto que contiene los campos que representan a la entidad Tarifa */
export type Tarifa = {
  __typename?: 'Tarifa';
  /** Campo que inidica si la entidad Tarifa se encuentra actualmente activa, es decir, si ya se registro su eliminacion */
  activo: Scalars['Boolean'];
  /** Costo de la renta de la habitacion */
  costoHabitacion: Scalars['Int'];
  /** Costo de una hora extra */
  costoHoraExtra: Scalars['Int'];
  /** Costo de un hospedaje extra */
  costoHospedajeExtra: Scalars['Int'];
  /** Costo de una persona extra */
  costoPersonaExtra: Scalars['Int'];
  /** Indica si la tarifa aplica en los dias domingo */
  domingo: Scalars['Boolean'];
  /** Duracion en horas de la renta de la habitacion */
  duracion: Scalars['Int'];
  /** Fecha en la que termine la aplicacion de la Tarifa */
  fechaFinal: Scalars['Date'];
  /** Fecha a partir de la cual se empieza a aplicar la Tarifa */
  fechaInicio: Scalars['Date'];
  /** Hora en la que finaliza la aplicacion de la tarifa. Formato HH:mm:ss */
  horaFinal: Scalars['String'];
  /** Hora en la que se empieza a aplicar la tarifa. Formato HH:mm:ss */
  horaInicio: Scalars['String'];
  /** Numero maximo de horas extra que se pueden solicitar */
  horasExtraMax: Scalars['Int'];
  /** Numero maximo de hospedajes extra que se pueden solicitar */
  hospedajesExtraMax: Scalars['Int'];
  /** UUID de la entidad Tarifa */
  id: Scalars['ID'];
  /** Indica si la tarifa aplica en los dias jueves */
  jueves: Scalars['Boolean'];
  /** Indica si la tarifa aplica en los dias lunes */
  lunes: Scalars['Boolean'];
  /** Indica si la tarifa aplica en los dias martes */
  martes: Scalars['Boolean'];
  /** Indica si la tarifa aplica en los dias miercoles */
  miercoles: Scalars['Boolean'];
  /** Nombre de la entidad Tarifa */
  nombre: Scalars['String'];
  /** Numero maximo de personas extra que se pueden solicitar */
  personasExtraMax: Scalars['Int'];
  /** Indica si la tarifa aplica en los dias sabado */
  sabado: Scalars['Boolean'];
  /** Informacion del Tipo de Habitacion a la cual pertenece la entidad Tarifa */
  tipoHabitacion: TipoHabitacion;
  /** Indica si la tarifa aplica en los dias viernes */
  viernes: Scalars['Boolean'];
};

/** Objeto que contiene los campos que representan a la entidad Tipo Habitacion */
export type TipoHabitacion = {
  __typename?: 'TipoHabitacion';
  /** Indica si la entidad Tipo Habitacion se encuentra activa, es decir, si ya se ha registrado su eliminacion */
  activo: Scalars['Boolean'];
  /** Clave que representa a la entidad Tipo Habitacion */
  clave: Scalars['String'];
  /** Descripcion de la entidad Tipo Habitacion */
  descripcion: Scalars['String'];
  /** UUID de la entidad Tipo Habitacion */
  id: Scalars['ID'];
  /** Numero maximo de reservaciones que se le pueden asignar a la habitacion */
  maximoReservaciones: Scalars['Int'];
  /** Promedio de minutos que una habitacion tarda en relizar el proceso de entrada */
  minutosEntrada: Scalars['Int'];
  /** Promedio de minutos que una habitacion tarda en realizar el proceso de Limpieza estando medio sucia */
  minutosMediaSucia: Scalars['Int'];
  /** Promedio de minutos que una habitacion tarda en realizar el proceso de Limpieza estando sucia */
  minutosSucia: Scalars['Int'];
  /** Nombre de la entidad Tipo Habitacion */
  nombre: Scalars['String'];
};

/** Campos que pueden ser editados directamente de la entidad Estado Habitacion */
export type UpdateEstadoHabitacionInput = {
  /** UUID de la entidad Estado Habitacion */
  id: Scalars['ID'];
  /** Nombre de la entidad Estado Habitacion */
  nombre?: InputMaybe<Scalars['String']>;
};

/** Campos que pueden ser directamente modificados de la entidad Habitacion */
export type UpdateHabitacionInput = {
  /** Id del Estado de la Habitacion */
  estadoHabitacionId?: InputMaybe<Scalars['ID']>;
  /** UUID de la entidad Habitacion */
  id: Scalars['ID'];
  /** Numero de la habitacion */
  numeroHabitacion?: InputMaybe<Scalars['Int']>;
  /** Piso en el que se encuentra la habitacion */
  piso?: InputMaybe<Scalars['Int']>;
  /** Id del Tipo de Habitacion a la que pertenece la habitacion */
  tipoHabitacionId?: InputMaybe<Scalars['ID']>;
};

/** Objeto que contiene los campos que se pueden editar directamente de la entidad Renta */
export type UpdateRentaInput = {
  /** Estado que se le dara a la habitacion cuando finalize la rente o haya un cambio de habitacion */
  estado: ValidEstadosHabitaciones;
  /** Fecha-hora en la que se registro la salida del cliente de la habitacion. Solo colocar cuando se de por finalizada la renta */
  fechaSalida?: InputMaybe<Scalars['Date']>;
  /** UUID de la Habitacion a la cual pertenece la entidad Renta */
  habitacionId?: InputMaybe<Scalars['String']>;
  /** Numero de horas extra solicitadas */
  horasExtra?: InputMaybe<Scalars['Int']>;
  /** Numero de hospedajes extra solicitados */
  hospedajesExtra?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** ??? */
  numeroServicio?: InputMaybe<Scalars['String']>;
  /** Numero de personas extra solicitadas */
  personasExtra?: InputMaybe<Scalars['Int']>;
  /** UUID de la Tarifa a la cual pertenece la entidad Renta */
  tarifaId?: InputMaybe<Scalars['String']>;
};

/** Objecto que contiene todos los campos que se pueden editar directamente de la entidad Tarifa */
export type UpdateTarifaInput = {
  /** Costo de la renta de la habitacion */
  costoHabitacion?: InputMaybe<Scalars['Int']>;
  /** Costo de una hora extra */
  costoHoraExtra?: InputMaybe<Scalars['Int']>;
  /** Costo de un hospedaje extra */
  costoHospedajeExtra?: InputMaybe<Scalars['Int']>;
  /** Costo de una persona extra */
  costoPersonaExtra?: InputMaybe<Scalars['Int']>;
  /** Indica si la tarifa aplica en los dias domingo */
  domingo?: InputMaybe<Scalars['Boolean']>;
  /** Numero de horas que dura la renta de una habitacion de la entidad Tarifa */
  duracion?: InputMaybe<Scalars['Int']>;
  /** Fecha en la que termine la aplicacion de la Tarifa */
  fechaFinal?: InputMaybe<Scalars['Date']>;
  /** Fecha a partir de la cual se empieza a aplicar la Tarifa */
  fechaInicio?: InputMaybe<Scalars['Date']>;
  /** Hora en la que finaliza la aplicacion de la Tarifa. Formato HH:mm:ss */
  horaFinal?: InputMaybe<Scalars['String']>;
  /** Hora a partir de la cual empieza a aplicar la entidad Tarifa. Formato HH:mm:ss */
  horaInicio?: InputMaybe<Scalars['String']>;
  /** Numero maximo de horas extra que se pueden solicitar */
  horasExtraMax?: InputMaybe<Scalars['Int']>;
  /** Numero maximo de hospedajes extra que se pueden solicitar */
  hospedajesExtraMax?: InputMaybe<Scalars['Int']>;
  /** UUID de la entidad Tarifa */
  id: Scalars['ID'];
  /** Indica si la tarifa aplica en los dias jueves */
  jueves?: InputMaybe<Scalars['Boolean']>;
  /** Indica si la tarifa aplica en los dias lunes */
  lunes?: InputMaybe<Scalars['Boolean']>;
  /** Indica si la tarifa aplica en los dias martes */
  martes?: InputMaybe<Scalars['Boolean']>;
  /** Indica si la tarifa aplica en los dias miercoles */
  miercoles?: InputMaybe<Scalars['Boolean']>;
  /** Nombre de la entidad Tarifa */
  nombre?: InputMaybe<Scalars['String']>;
  /** Numero maximo de personas extra que se pueden solicitar */
  personasExtraMax?: InputMaybe<Scalars['Int']>;
  /** Indica si la tarifa aplica en los dias sabado */
  sabado?: InputMaybe<Scalars['Boolean']>;
  /** UUID del Tipo de Habitacion a la cual pertenece la entidad Tarifa */
  tipoHabitacionId?: InputMaybe<Scalars['ID']>;
  /** Indica si la tarifa aplica en los dias viernes */
  viernes?: InputMaybe<Scalars['Boolean']>;
};

/** Objecto que contiene todos los campos que se pueden editar directamente de la entidad Tipo Habitacion */
export type UpdateTipoHabitacionInput = {
  /** Clave que representa a la entidad Tipo Habitacion */
  clave?: InputMaybe<Scalars['String']>;
  /** Descripcion de la entidad Tipo Habitacion */
  descripcion?: InputMaybe<Scalars['String']>;
  /** UUID de la entidad Tipo Habitacion */
  id: Scalars['ID'];
  /** Numero maximo de reservaciones que se le pueden asignar a la habitacion */
  maximoReservaciones?: InputMaybe<Scalars['Int']>;
  /** Promedio de minutos que una habitacion tarda en relizar el proceso de entrada */
  minutosEntrada?: InputMaybe<Scalars['Int']>;
  /** Promedio de minutos que una habitacion tarda en realizar el proceso de Limpieza estando medio sucia */
  minutosMediaSucia?: InputMaybe<Scalars['Int']>;
  /** Promedio de minutos que una habitacion tarda en realizar el proceso de Limpieza estando sucia */
  minutosSucia?: InputMaybe<Scalars['Int']>;
  /** Nombre de la entidad Tipo Habitacion */
  nombre?: InputMaybe<Scalars['String']>;
};

/** Objeto que contiene los campos que representan a la entidad Usuario */
export type Usuario = {
  __typename?: 'Usuario';
  /** Indica si la entidad Usuario se encuentra activa, es decir, si ya se a registrado su eliminacion */
  activo: Scalars['Boolean'];
  id: Scalars['ID'];
  /** Nombre de la entidad Usuario */
  nombre: Scalars['String'];
  /** Informacion del Rol al que pertenece la entidad Usuario */
  rol: Rol;
};

/** Objecto que contiene los campos que representan a la entidad UsuarioResponse */
export type UsuarioResponse = {
  __typename?: 'UsuarioResponse';
  /** Indica si la entidad UsuarioResponse se encuentra activa, es decir, si ya se a registrado su eliminacion */
  activo: Scalars['Boolean'];
  /** UUID de la entidad UsuarioResponse */
  id: Scalars['ID'];
  /** Nombre de la entidad UsuarioResponse */
  nombre: Scalars['String'];
  /** Informacion del RolUsuarioResponse al cual pertenece la entidad UsuarioResponse */
  rol: RolUsuarioResponse;
};

export enum ValidEstadosHabitaciones {
  Bloqueada = 'Bloqueada',
  ConDetalles = 'Con_Detalles',
  EnCreacion = 'En_Creacion',
  Libre = 'Libre',
  Limpieza = 'Limpieza',
  Mantenimiento = 'Mantenimiento',
  MediaSucia = 'Media_Sucia',
  Ocupada = 'Ocupada',
  PendienteCobro = 'Pendiente_Cobro',
  Preparada = 'Preparada',
  PreparadaReservada = 'Preparada_Reservada',
  Reservada = 'Reservada',
  RoomService = 'Room_Service',
  Sucia = 'Sucia',
  Supervision = 'Supervision',
  SupervisionMantenimiento = 'Supervision_Mantenimiento'
}
