import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';


@Component({
  templateUrl: './asignar-reservacion.component.html',
  styleUrls: ['./asignar-reservacion.component.scss']
})
export class AsignarReservacionComponent implements OnInit {

  display:boolean=true;

  selectId:number= 0

  reservaciones = [
    {
      "nombre": "Rosa lorem itsu ",
      "telefono": "714144wer646",
      "email": "maxwer@camacho.com",
      "idCliente": "0",
      "idEstado": 1,
      "activo": 1,
      "idUsuarioCreo": 0,
      "idReservacion": 8728,
      "codigoReserva": "346",
      "fechaEntrada": "2022-12-29",
      "fechaSalida": "2022-12-30",
      "noches": 1,
      "personasExtra": 1,
      "idTarifaAplicable": 8,
      "idConfiguracionNegocio": 1,
      "idConfiguracionTipoHabitacion": 37,
      "idTipoHabitacion": 19,
      "idHabitacion": null,
      "idDatosFiscales": null,
      "descuento": 0,
      "leyendaDescuento": "",
      "observaciones": "",
      "totalHabitacion": 862.0689,
      "totalPersonasExtra": 215.5172,
      "totalHospedajeExtra": 0,
      "valorSinIVA": 1077.5861,
      "valorConIVA": 1249.9999,
      "valorIVA": 200,
      "paquetes": 0,
      "informacionPago": null
  },
  {
    "nombre": "Alma marcela Juarez",
    "telefono": "7143450646",
    "email": "max234_2W3R@global.com",
    "idCliente": "0",
    "idEstado": 1,
    "activo": 1,
    "idUsuarioCreo": 0,
    "idReservacion": 8745,
    "codigoReserva": "346",
    "fechaEntrada": "2022-12-28",
    "fechaSalida": "2022-12-30",
    "noches": 1,
    "personasExtra": 1,
    "idTarifaAplicable": 8,
    "idConfiguracionNegocio": 1,
    "idConfiguracionTipoHabitacion": 37,
    "idTipoHabitacion": 19,
    "idHabitacion": null,
    "idDatosFiscales": null,
    "descuento": 0,
    "leyendaDescuento": "",
    "observaciones": "",
    "totalHabitacion": 862.0689,
    "totalPersonasExtra": 215.5172,
    "totalHospedajeExtra": 0,
    "valorSinIVA": 1077.5861,
    "valorConIVA": 1249.9999,
    "valorIVA": 200,
    "paquetes": 0,
    "informacionPago": null
},  {
  "nombre": "Rosa lorem itsu ",
  "telefono": "714144wer646",
  "email": "maxwer@camacho.com",
  "idCliente": "0",
  "idEstado": 1,
  "activo": 1,
  "idUsuarioCreo": 0,
  "idReservacion": 87204,
  "codigoReserva": "346",
  "fechaEntrada": "2022-12-29",
  "fechaSalida": "2022-12-30",
  "noches": 1,
  "personasExtra": 1,
  "idTarifaAplicable": 8,
  "idConfiguracionNegocio": 1,
  "idConfiguracionTipoHabitacion": 37,
  "idTipoHabitacion": 19,
  "idHabitacion": null,
  "idDatosFiscales": null,
  "descuento": 0,
  "leyendaDescuento": "",
  "observaciones": "",
  "totalHabitacion": 862.0689,
  "totalPersonasExtra": 215.5172,
  "totalHospedajeExtra": 0,
  "valorSinIVA": 1077.5861,
  "valorConIVA": 1249.9999,
  "valorIVA": 200,
  "paquetes": 0,
  "informacionPago": null
},
  ]

  constructor(
    private router: Router,
    private dialogService: DialogService,

  ) { }

  ngOnInit(): void {
  }

  selectRes(id:number){
    this.selectId = id
  }

  aceptar(){
    const genDialogMessage = (message: string) => {
      return this.dialogService.open(MessageModalAutoclosableComponent, {data: { message }});
    };
    genDialogMessage(`RESERVACIÓN ASIGNADA CON ÉXITO`)
    this.router.navigate([`/hotel`]);
  }

  salir(){
    this.router.navigate([`/hotel`]);
  }

}
