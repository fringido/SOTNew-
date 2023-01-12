import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
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

export type ArticuloRs = {
  __typename?: 'ArticuloRs';
  /** Campo que nos indica si la entidad Articulo Rs se encuentra activa */
  activo: Scalars['Boolean'];
  costo: Scalars['Float'];
  /** UUID de la entidad Articulo Rs */
  id: Scalars['ID'];
  /** Nombre de la entidad Articulo Rs */
  nombre: Scalars['String'];
  precio: Scalars['Float'];
};

/** Objeto que contiene los campos que representan a la entidad Categoria Articulo Rs */
export type CategoriaArticuloRs = {
  __typename?: 'CategoriaArticuloRs';
  /** Campo que nos indica si la entidad Categoria Articulo Rs se encuentra activa */
  activo: Scalars['Boolean'];
  /** UUID de la entidad Categoria Articulo Rs */
  id: Scalars['ID'];
  /** Nombre de la entidad Categoria Articulo Rs */
  nombre: Scalars['String'];
};

export type CreateArticuloRsInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

/** Objeto que contiene todos los campos necesarios para crear una entidad Categoria Articulo Rs */
export type CreateCategoriaArticuloRsInput = {
  /** Nombre de la entidad Categoria Articulo Rs */
  nombre: Scalars['String'];
};

/** Objeto que contiene los campos necesarios para crear una entidad Direccion Proveedor */
export type CreateDireccionProveedorInput = {
  /** Nombre de la calle de la entidad Direccion Proveedor */
  calle: Scalars['String'];
  /** Nombre de la ciudad de la entidad Direccion Proveedor */
  ciudad: Scalars['String'];
  /** Nombre de la colonia de la entidad Direccion Proveedor */
  colonia: Scalars['String'];
  /** Codigo postal de la entidad Direccion Proveedor */
  cp: Scalars['String'];
  /** Nombre del estado de la entidad Direccion Proveedor */
  estado: Scalars['String'];
  /** Numero exterior de la entidad Direccion Proveedor */
  numeroExterior: Scalars['Int'];
  /** Numero interior de la entidad Direccion Proveedor */
  numeroInterior?: InputMaybe<Scalars['Int']>;
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

/** Objeto que contiene todos los campos necesarios para crear una entidad Proveedor */
export type CreateProveedorInput = {
  /** Apellido materno del contacto de la entidad Proveedor */
  apellidoMContacto: Scalars['String'];
  /** Apellido paterno del contacto de la entidad Proveedor */
  apellidoPContacto: Scalars['String'];
  /** Numero de dias que se tiene para pagar la deuda antes de empezar a generar intereces de la entidad Proveedor */
  diasCredito: Scalars['Int'];
  /** Objeto que contiene los campos necesarios para crear una entidad DireccionProveedor */
  direccionProveedor: CreateDireccionProveedorInput;
  /** Email de la entidad Proveedor */
  email: Scalars['String'];
  /** Nombre comercial de la entidad Proveedor */
  nombreComercial: Scalars['String'];
  /** Nombre(s) del contacto de la entidad Proveedor */
  nombreContacto: Scalars['String'];
  /** Nombre con el cual esta legalmente registrada la entidad Proveedor */
  razonSocial: Scalars['String'];
  /** RFC de la entidad Proveedor */
  rfc: Scalars['String'];
  /** Numero telefonico de la entidad Proveedor */
  telefono: Scalars['String'];
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

/** Objeto que contiene los campos necesarios para crear una entidad SubCategoria Articulo Rs */
export type CreateSubcategoriaArticuloRsInput = {
  categoriaArticuloRsId: Scalars['ID'];
  editable: Scalars['Boolean'];
  /** Nombre de la entidad SubCategoria Articulo Rs */
  nombre: Scalars['String'];
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

export type CreateUnidadMedidaInput = {
  /** Unidad de la entidad Unidad Medida */
  unidad: Scalars['String'];
};

/** Objeto que contiene los campos que representan a la entidad Direccion Proveedor */
export type DireccionProveedor = {
  __typename?: 'DireccionProveedor';
  /** Campo que nos indica si la entidad Direccion Proveedor se encuentra activa */
  activo: Scalars['Boolean'];
  /** Nombre de la calle de la entidad Direccion Proveedor */
  calle: Scalars['String'];
  /** Nombre de la ciudad de la entidad Direccion Proveedor */
  ciudad: Scalars['String'];
  /** Nombre de la colonia de la entidad Direccion Proveedor */
  colonia: Scalars['String'];
  /** Codigo postal de la entidad Direccion Proveedor */
  cp: Scalars['String'];
  /** Nombre del estado de la entidad Direccion Proveedor */
  estado: Scalars['String'];
  /** UUID de la entidad Direccion Proveedor */
  id: Scalars['ID'];
  /** Numero exterior de la entidad Direccion Proveedor */
  numeroExterior: Scalars['Int'];
  /** Numero interior de la entidad Direccion Proveedor */
  numeroInterior?: Maybe<Scalars['Int']>;
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
  actualizar_articulo_rs: ArticuloRs;
  actualizar_categoria_articulo_rs: Scalars['String'];
  actualizar_direccion_proveedor: Scalars['String'];
  /** Mutacion que actualiza la entidad EstadoHabitacion con los parametros ingresados */
  actualizar_estado_habitacion: Scalars['String'];
  /** Actualiza la informacion de la entidad Habitacion indicada */
  actualizar_habitacion: Scalars['String'];
  actualizar_proveedor: Scalars['String'];
  /** Mutacion que actualiza la entidad Renta con los parametros ingresados */
  actualizar_renta: Scalars['String'];
  /** Mutacion que actualiza la entidad Tarifa con los parametros proporcionados */
  actualizar_tarifa: Tarifa;
  /** Mutacion que actualiza la entidad TipoHabitacion con los parametros proporcionados */
  actualizar_tipo_habitacion: Scalars['String'];
  actualizar_unidad_medida: UnidadMedida;
  /** Cambia el estado de la entidad Habitacion indicada */
  cambiar_estado: Scalars['String'];
  crear_articulo_rs: Scalars['String'];
  crear_categoria_articulo_rs: Scalars['String'];
  crear_direccion_proveedor: Scalars['String'];
  /** Mutacion que crea una nueva entidad Estado Habitacion con los parametros ingresados */
  crear_estado_habitacion: Scalars['String'];
  /** Crea una nueva entidad Habitacion en la base de datos */
  crear_habitacion: Scalars['String'];
  crear_proveedor: Scalars['String'];
  /** Mutacion que crea una entidad Renta con los parametros ingresados */
  crear_renta: Scalars['String'];
  /** Mutacion que crea una entidad Tarifa con los parametros proporcionados */
  crear_tarifa: Scalars['String'];
  /** Mutacion que crea una entidad TipoHabitacion con los parametros proporcionados */
  crear_tipo_habitacion: Scalars['String'];
  crear_unidad_medida: Scalars['String'];
  createSubcategoriaArticuloRs: Scalars['String'];
  eliminar_articulo_rs: ArticuloRs;
  eliminar_categoria_articulo_rs: Scalars['String'];
  eliminar_direccion_proveedor: Scalars['String'];
  /** Mutacion que desactiva la entidad EstadoHabitacion */
  eliminar_estado_habitacion: Scalars['String'];
  /** Mutacion que desactiva la entidad Habitacion */
  eliminar_habitacion: Scalars['String'];
  eliminar_proveedor: Scalars['String'];
  /** Mutacion que desactiva la entidad Tarifa */
  eliminar_tarifa: Tarifa;
  /** Mutacion que desactiva la entidad TipoHabitacion */
  eliminar_tipo_habitacion: Scalars['String'];
  eliminar_unidad_medida: Scalars['String'];
  removeSubcategoriaArticuloRs: Scalars['String'];
  /** Actualiza la informacion del campo usuarioRevision de la entidad Habitacion */
  revisar_habitacion: Scalars['String'];
  updateSubcategoriaArticuloRs: Scalars['String'];
};


export type MutationActualizar_Articulo_RsArgs = {
  updateArticuloRsInput: UpdateArticuloRsInput;
};


export type MutationActualizar_Categoria_Articulo_RsArgs = {
  updateCategoriaArticuloRsInput: UpdateCategoriaArticuloRsInput;
};


export type MutationActualizar_Direccion_ProveedorArgs = {
  updateDireccionProveedorInput: UpdateDireccionProveedorInput;
};


export type MutationActualizar_Estado_HabitacionArgs = {
  updateEstadosHabitacioneInput: UpdateEstadoHabitacionInput;
};


export type MutationActualizar_HabitacionArgs = {
  updateHabitacioneInput: UpdateHabitacionInput;
};


export type MutationActualizar_ProveedorArgs = {
  updateProveedorInput: UpdateProveedorInput;
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


export type MutationActualizar_Unidad_MedidaArgs = {
  updateUnidadMedidaInput: UpdateUnidadMedidaInput;
};


export type MutationCambiar_EstadoArgs = {
  estado: ValidEstadosHabitaciones;
  id: Scalars['ID'];
};


export type MutationCrear_Articulo_RsArgs = {
  createArticuloRsInput: CreateArticuloRsInput;
};


export type MutationCrear_Categoria_Articulo_RsArgs = {
  createCategoriaArticuloRsInput: CreateCategoriaArticuloRsInput;
};


export type MutationCrear_Direccion_ProveedorArgs = {
  createDireccionProveedorInput: CreateDireccionProveedorInput;
};


export type MutationCrear_Estado_HabitacionArgs = {
  createEstadosHabitacioneInput: CreateEstadoHabitacionInput;
};


export type MutationCrear_HabitacionArgs = {
  createHabitacionInput: CreateHabitacionInput;
};


export type MutationCrear_ProveedorArgs = {
  createProveedorInput: CreateProveedorInput;
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


export type MutationCrear_Unidad_MedidaArgs = {
  createUnidadMedidaInput: CreateUnidadMedidaInput;
};


export type MutationCreateSubcategoriaArticuloRsArgs = {
  createSubcategoriaArticuloRsInput: CreateSubcategoriaArticuloRsInput;
};


export type MutationEliminar_Articulo_RsArgs = {
  id: Scalars['Int'];
};


export type MutationEliminar_Categoria_Articulo_RsArgs = {
  id: Scalars['String'];
};


export type MutationEliminar_Direccion_ProveedorArgs = {
  id: Scalars['ID'];
};


export type MutationEliminar_Estado_HabitacionArgs = {
  id: Scalars['ID'];
};


export type MutationEliminar_HabitacionArgs = {
  id: Scalars['ID'];
};


export type MutationEliminar_ProveedorArgs = {
  id: Scalars['Int'];
};


export type MutationEliminar_TarifaArgs = {
  id: Scalars['ID'];
};


export type MutationEliminar_Tipo_HabitacionArgs = {
  id: Scalars['String'];
};


export type MutationEliminar_Unidad_MedidaArgs = {
  id: Scalars['String'];
};


export type MutationRemoveSubcategoriaArticuloRsArgs = {
  id: Scalars['Int'];
};


export type MutationRevisar_HabitacionArgs = {
  enRevision: Scalars['Boolean'];
  id: Scalars['ID'];
};


export type MutationUpdateSubcategoriaArticuloRsArgs = {
  updateSubcategoriaArticuloRsInput: UpdateSubcategoriaArticuloRsInput;
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

/** Objeto que contiene los campos que representan a una entidad Proveedor */
export type Proveedor = {
  __typename?: 'Proveedor';
  /** Indica si la entidad Proveedor esta activa, es decir, si ya se registro su eliminacion */
  activo: Scalars['Boolean'];
  /** Apellido materno del contacto de la entidad Proveedor */
  apellidoMContacto: Scalars['String'];
  /** Apellido paterno del contacto de la entidad Proveedor */
  apellidoPContacto: Scalars['String'];
  /** Numero de dias que se tiene para pagar la deuda antes de empezar a generar intereces de la entidad Proveedor */
  diasCredito: Scalars['Int'];
  /** Informacion de la Direccion Proveedor que pertenece a la entidad Proveedor */
  direccionProveedor: DireccionProveedor;
  /** Email de la entidad Proveedor */
  email: Scalars['String'];
  /** UUID de la entidad Proveedor */
  id: Scalars['ID'];
  /** Nombre comercial de la entidad Proveedor */
  nombreComercial: Scalars['String'];
  /** Nombre(s) del contacto de la entidad Proveedor */
  nombreContacto: Scalars['String'];
  /** Nombre con el cual esta legalmente registrada la entidad Proveedor */
  razonSocial: Scalars['String'];
  /** RFC de la entidad Proveedor */
  rfc: Scalars['String'];
  /** Numero telefonico de la entidad Proveedor */
  telefono: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  articuloRs: ArticuloRs;
  articulosRs: Array<ArticuloRs>;
  categoriaArticuloRs: CategoriaArticuloRs;
  categoriasArticulosRs: Array<CategoriaArticuloRs>;
  direccionProveedor: DireccionProveedor;
  direccionesProveedores: Array<DireccionProveedor>;
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
  proveedor: Proveedor;
  proveedores: Array<Proveedor>;
  /** Query que obtiene una entidad Renta que cumpla con los argumentos de busqueda */
  renta: Renta;
  /** Query que obtiene una lista de entidades Renta que cumplan con los argumentos de busqueda */
  rentas: Array<Renta>;
  /** Query que obtiene una entidad Rol que cumpla con los argumentos de busqueda */
  rol: Rol;
  /** Query que obtiene una lista de entidades Rol que cumplan con los argumentos de busqueda */
  roles: Array<Rol>;
  subcategoriaArticuloRs: SubCategoriaArticuloRs;
  subcategoriasArticulosRs: Array<SubCategoriaArticuloRs>;
  /** Query que obtiene una entidad Tarifa que cumpla con los argumentos de busqueda */
  tarifa: Tarifa;
  /** Query que obtiene una lista de entidades Tarifa que cumplan con los argumentos de busqueda */
  tarifas: Array<Tarifa>;
  /** Query que obtiene una entidad TipoHabitacion que coincida con los argumentos de busqueda */
  tipo_habitacion: TipoHabitacion;
  /** Query que obtiene una lista de entidades TipoHabitacion que cumplan con los argumentos de busqueda */
  tipos_habitaciones: Array<TipoHabitacion>;
  unidadMedida: UnidadMedida;
  unidadesMedida: Array<UnidadMedida>;
  /** Query que obtiene una entidad UsuarioResponse que cumpla con los argumentos de busqueda */
  usuario: UsuarioResponse;
  /** Query que obtiene una lista de entidades UsuarioResponse que cumpla con los argumentos de busqueda */
  usuarios: Array<UsuarioResponse>;
};


export type QueryArticuloRsArgs = {
  id: Scalars['Int'];
};


export type QueryCategoriaArticuloRsArgs = {
  id: Scalars['String'];
};


export type QueryDireccionProveedorArgs = {
  id: Scalars['ID'];
};


export type QueryDireccionesProveedoresArgs = {
  activo: Scalars['Boolean'];
  calle: Scalars['String'];
  ciudad: Scalars['String'];
  colonia: Scalars['String'];
  cp: Scalars['Int'];
  estado: Scalars['String'];
  numeroExterior: Scalars['Int'];
  numeroInterior: Scalars['Int'];
};


export type QueryEstado_HabitacionArgs = {
  id_o_nombre: Scalars['String'];
};


export type QueryEstados_HabitacionesArgs = {
  activo?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHabitacionArgs = {
  id_o_numero: Scalars['String'];
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


export type QueryProveedorArgs = {
  id: Scalars['Int'];
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


export type QuerySubcategoriaArticuloRsArgs = {
  id: Scalars['Int'];
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


export type QueryUnidadMedidaArgs = {
  id: Scalars['String'];
};


export type QueryUnidadesMedidaArgs = {
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

export type SubCategoriaArticuloRs = {
  __typename?: 'SubCategoriaArticuloRs';
  /** Campo que nos indica si la entidad Sub Categoria Articulo Rs se encuentra activa */
  activo: Scalars['Boolean'];
  /** Campo que nos indica si la entidad Sub Categoria Articulo Rs ha sido eliminada */
  categoriaArticuloRs: Scalars['Boolean'];
  /** Campo que nos indica si la entidad Sub Categoria Articulo Rs se puede editar */
  editable: Scalars['Boolean'];
  /** UUID de la entidad SubCategoria Articulos Rs */
  id: Scalars['ID'];
  /** Nombre de la entidad Sub Categoria Articulo Rs */
  nombre: Scalars['String'];
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

/** Objeto que contiene los campos que representan a la entidad Unidad Medida */
export type UnidadMedida = {
  __typename?: 'UnidadMedida';
  /** Campo que nos indica si la entidad Unidad Medida se encuentra activa */
  activo: Scalars['Boolean'];
  /** UUID de la entidad Unidad Medida */
  id: Scalars['ID'];
  /** Unidad de la entidad Unidad Medida */
  unidad: Scalars['String'];
};

export type UpdateArticuloRsInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateCategoriaArticuloRsInput = {
  /** UUID de la entidad Categoria Articulo Rs */
  id: Scalars['ID'];
  /** Nombre de la entidad Categoria Articulo Rs */
  nombre?: InputMaybe<Scalars['String']>;
};

/** Objeto que contiene todos los campos que se pueden editar directamente de la entidad Direccion Proveedor */
export type UpdateDireccionProveedorInput = {
  /** Nombre de la calle de la entidad Direccion Proveedor */
  calle?: InputMaybe<Scalars['String']>;
  /** Nombre de la ciudad de la entidad Direccion Proveedor */
  ciudad?: InputMaybe<Scalars['String']>;
  /** Nombre de la colonia de la entidad Direccion Proveedor */
  colonia?: InputMaybe<Scalars['String']>;
  /** Codigo postal de la entidad Direccion Proveedor */
  cp?: InputMaybe<Scalars['String']>;
  /** Nombre del estado de la entidad Direccion Proveedor */
  estado?: InputMaybe<Scalars['String']>;
  /** UUID de la entidad Direccion Proveedor */
  id: Scalars['ID'];
  /** Numero exterior de la entidad Direccion Proveedor */
  numeroExterior?: InputMaybe<Scalars['Int']>;
  /** Numero interior de la entidad Direccion Proveedor */
  numeroInterior?: InputMaybe<Scalars['Int']>;
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

export type UpdateProveedorInput = {
  /** Apellido materno del contacto de la entidad Proveedor */
  apellidoMContacto?: InputMaybe<Scalars['String']>;
  /** Apellido paterno del contacto de la entidad Proveedor */
  apellidoPContacto?: InputMaybe<Scalars['String']>;
  /** Numero de dias que se tiene para pagar la deuda antes de empezar a generar intereces de la entidad Proveedor */
  diasCredito?: InputMaybe<Scalars['Int']>;
  /** Objeto que contiene los campos necesarios para crear una entidad DireccionProveedor */
  direccionProveedor?: InputMaybe<CreateDireccionProveedorInput>;
  /** Email de la entidad Proveedor */
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** Nombre comercial de la entidad Proveedor */
  nombreComercial?: InputMaybe<Scalars['String']>;
  /** Nombre(s) del contacto de la entidad Proveedor */
  nombreContacto?: InputMaybe<Scalars['String']>;
  /** Nombre con el cual esta legalmente registrada la entidad Proveedor */
  razonSocial?: InputMaybe<Scalars['String']>;
  /** RFC de la entidad Proveedor */
  rfc?: InputMaybe<Scalars['String']>;
  /** Numero telefonico de la entidad Proveedor */
  telefono?: InputMaybe<Scalars['String']>;
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

export type UpdateSubcategoriaArticuloRsInput = {
  categoriaArticuloRsId?: InputMaybe<Scalars['ID']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Nombre de la entidad SubCategoria Articulo Rs */
  nombre?: InputMaybe<Scalars['String']>;
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

export type UpdateUnidadMedidaInput = {
  /** UUID de la entidad Unidad Medida */
  id: Scalars['ID'];
  /** Unidad de la entidad Unidad Medida */
  unidad?: InputMaybe<Scalars['String']>;
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

export type CambiarEstadoMutationVariables = Exact<{
  id: Scalars['ID'];
  estado: ValidEstadosHabitaciones;
}>;


export type CambiarEstadoMutation = { __typename?: 'Mutation', cambiar_estado: string };

export type GetAllRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRoomsQuery = { __typename?: 'Query', habitaciones: Array<{ __typename?: 'Habitacion', id: string, numeroHabitacion: number, piso: number, estadoHabitacion: { __typename?: 'EstadoHabitacion', nombre: string } }> };

export type HabitacionQueryVariables = Exact<{
  num: Scalars['String'];
}>;


export type HabitacionQuery = { __typename?: 'Query', habitacion: { __typename?: 'Habitacion', id: string, numeroHabitacion: number, tipoHabitacion: { __typename?: 'TipoHabitacion', id: string, nombre: string } } };

export type TarifasQueryVariables = Exact<{ [key: string]: never; }>;


export type TarifasQuery = { __typename?: 'Query', tarifas: Array<{ __typename?: 'Tarifa', nombre: string, id: string, costoHabitacion: number, costoHoraExtra: number, costoHospedajeExtra: number, costoPersonaExtra: number, horasExtraMax: number, hospedajesExtraMax: number, personasExtraMax: number, tipoHabitacion: { __typename?: 'TipoHabitacion', nombre: string } }> };

export const CambiarEstadoDocument = gql`
    mutation CambiarEstado($id: ID!, $estado: ValidEstadosHabitaciones!) {
  cambiar_estado(id: $id, estado: $estado)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CambiarEstadoGQL extends Apollo.Mutation<CambiarEstadoMutation, CambiarEstadoMutationVariables> {
    override document = CambiarEstadoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllRoomsDocument = gql`
    query getAllRooms {
  habitaciones {
    id
    numeroHabitacion
    piso
    estadoHabitacion {
      nombre
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllRoomsGQL extends Apollo.Query<GetAllRoomsQuery, GetAllRoomsQueryVariables> {
    override document = GetAllRoomsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const HabitacionDocument = gql`
    query Habitacion($num: String!) {
  habitacion(id_o_numero: $num) {
    id
    numeroHabitacion
    tipoHabitacion {
      id
      nombre
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class HabitacionGQL extends Apollo.Query<HabitacionQuery, HabitacionQueryVariables> {
    override document = HabitacionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TarifasDocument = gql`
    query Tarifas {
  tarifas {
    nombre
    id
    costoHabitacion
    costoHoraExtra
    costoHospedajeExtra
    costoPersonaExtra
    horasExtraMax
    hospedajesExtraMax
    personasExtraMax
    tipoHabitacion {
      nombre
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TarifasGQL extends Apollo.Query<TarifasQuery, TarifasQueryVariables> {
    override document = TarifasDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }