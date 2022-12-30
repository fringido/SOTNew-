import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment';


@Component({
  selector: 'app-component-reservacion',
  templateUrl: './component-reservacion.component.html',
  styleUrls: ['./component-reservacion.component.scss']
})
export class ComponentReservacionComponent implements OnInit {

  @Input() reservacion: any;
  @Input() selectId: any;

  fechaEntrada!: string;
  fechaSalida!: string;
  idCliente!: string;

  constructor() { }

  ngOnInit(): void {
    this.liberarVariables()
  }

  liberarVariables() {
    //crea una fecha con la fecha de entrada y la fecha de salida
    let fechaInicioF = moment(this.reservacion.fechaEntrada).format("YYYY/MM/DD");
    let fechaFinF = moment(this.reservacion.fechaSalida).format("YYYY/MM/DD");
    let fechaInicio = new Date(fechaInicioF);
    let fechaFin = new Date(fechaFinF);

    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const monthsNumber = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    this.fechaEntrada =
      months[fechaInicio.getMonth()] +
      " " +
      fechaInicio.getDate() +
      "/" +
      monthsNumber[fechaInicio.getMonth()] +
      "/" +
      fechaInicio.getFullYear();
    this.fechaSalida =
      months[fechaFin.getMonth()] +
      " " +
      fechaFin.getDate() +
      "/" +
      monthsNumber[fechaFin.getMonth()] +
      "/" +
      fechaFin.getFullYear();
    if (this.reservacion.idCliente == "") {
      this.idCliente = "---";
    } else {
      this.idCliente = this.reservacion.idCliente;
    }
  }

}
