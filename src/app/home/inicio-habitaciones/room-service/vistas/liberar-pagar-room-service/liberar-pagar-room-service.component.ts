import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liberar-pagar-room-service',
  templateUrl: './liberar-pagar-room-service.component.html',
  styleUrls: ['./liberar-pagar-room-service.component.scss']
})
export class LiberarPagarRoomServiceComponent implements OnInit {

  display = true

  comandas = [
    {
      "idComanda": 92389,
      "numeroOrden": 105,
      "abrLineaOrden": "ABOS",
      "fechaSolicitud": "2022-12-21T12:46:08.443",
      "idEstadoPedido": 1,
      "estadoPedido": "Preparación",
      "detalleComandas": [
          {
              "idComanda": 92389,
              "orden": 105,
              "idArticuloComanda": 228789,
              "idEstadoPedido": 1,
              "estadoPedido": "Preparación",
              "idEstadoArticulo": 1,
              "estadoArticulo": "Preparación",
              "fechaSolicitud": "2022-12-21T12:46:08.443",
              "cod_Articulo": "AC0570",
              "desc_Articulo": "CIG MARLBORO BLANCO",
              "abr_Comanda_Linea": "ABOS",
              "cantidad": 1,
              "precioUnidadConIva": 100,
              "esCortesia": false,
              "subTotal": 3990,
              "cod_Linea": 1864,
              "desc_Linea": "Otros"
          },
          {
              "idComanda": 92389,
              "orden": 105,
              "idArticuloComanda": 228790,
              "idEstadoPedido": 1,
              "estadoPedido": "Preparación",
              "idEstadoArticulo": 1,
              "estadoArticulo": "Preparación",
              "fechaSolicitud": "2022-12-21T12:46:08.443",
              "cod_Articulo": "AC0573",
              "desc_Articulo": "SICO SENSITIVE",
              "abr_Comanda_Linea": "ABOS",
              "cantidad": 1,
              "precioUnidadConIva": 90,
              "esCortesia": false,
              "subTotal": 3990,
              "cod_Linea": 1799,
              "desc_Linea": "Spa & Sex"
          },
          {
              "idComanda": 92389,
              "orden": 105,
              "idArticuloComanda": 228791,
              "idEstadoPedido": 1,
              "estadoPedido": "Preparación",
              "idEstadoArticulo": 1,
              "estadoArticulo": "Preparación",
              "fechaSolicitud": "2022-12-21T12:46:08.443",
              "cod_Articulo": "AC0688",
              "desc_Articulo": "PROMO TEQ VOLCAN BOT.",
              "abr_Comanda_Linea": "ABOS",
              "cantidad": 1,
              "precioUnidadConIva": 1100,
              "esCortesia": false,
              "subTotal": 3990,
              "cod_Linea": 1798,
              "desc_Linea": "Bebidas"
          },
          {
              "idComanda": 92389,
              "orden": 105,
              "idArticuloComanda": 228792,
              "idEstadoPedido": 1,
              "estadoPedido": "Preparación",
              "idEstadoArticulo": 1,
              "estadoArticulo": "Preparación",
              "fechaSolicitud": "2022-12-21T12:46:08.443",
              "cod_Articulo": "AC0526",
              "desc_Articulo": "PROMO POSTRE NUTELLA CREPES",
              "abr_Comanda_Linea": "ABOS",
              "cantidad": 1,
              "precioUnidadConIva": 0,
              "esCortesia": true,
              "subTotal": 3990,
              "cod_Linea": 1797,
              "desc_Linea": "Alimentos"
          },
          {
              "idComanda": 92389,
              "orden": 105,
              "idArticuloComanda": 228793,
              "idEstadoPedido": 1,
              "estadoPedido": "Preparación",
              "idEstadoArticulo": 1,
              "estadoArticulo": "Preparación",
              "fechaSolicitud": "2022-12-21T12:46:08.443",
              "cod_Articulo": "AC0536",
              "desc_Articulo": "COMPLEMENTO DE HABITACION",
              "abr_Comanda_Linea": "ABOS",
              "cantidad": 1,
              "precioUnidadConIva": 2700,
              "esCortesia": true,
              "subTotal": 3990,
              "cod_Linea": 1864,
              "desc_Linea": "Otros"
          }
      ],
      "subtotal": 3990,
      "precioCortesia": 2700,
      "total": 1290,
      "tieneCortesias": true
  },
  {
    "idComanda": 92389,
    "numeroOrden": 105,
    "abrLineaOrden": "ABOS",
    "fechaSolicitud": "2022-12-21T12:46:08.443",
    "idEstadoPedido": 3,
    "estadoPedido": "Por cobrar",
    "detalleComandas": [
        {
            "idComanda": 92389,
            "orden": 105,
            "idArticuloComanda": 228789,
            "idEstadoPedido": 3,
            "estadoPedido": "Por cobrar",
            "idEstadoArticulo": 3,
            "estadoArticulo": "Por cobrar",
            "fechaSolicitud": "2022-12-21T12:46:08.443",
            "cod_Articulo": "AC0570",
            "desc_Articulo": "CIG MARLBORO BLANCO",
            "abr_Comanda_Linea": "ABOS",
            "cantidad": 1,
            "precioUnidadConIva": 100,
            "esCortesia": false,
            "subTotal": 3990,
            "cod_Linea": 1864,
            "desc_Linea": "Otros"
        },
        {
            "idComanda": 92389,
            "orden": 105,
            "idArticuloComanda": 228790,
            "idEstadoPedido": 3,
            "estadoPedido": "Por cobrar",
            "idEstadoArticulo": 3,
            "estadoArticulo": "Por cobrar",
            "fechaSolicitud": "2022-12-21T12:46:08.443",
            "cod_Articulo": "AC0573",
            "desc_Articulo": "SICO SENSITIVE",
            "abr_Comanda_Linea": "ABOS",
            "cantidad": 1,
            "precioUnidadConIva": 90,
            "esCortesia": false,
            "subTotal": 3990,
            "cod_Linea": 1799,
            "desc_Linea": "Spa & Sex"
        },
        {
            "idComanda": 92389,
            "orden": 105,
            "idArticuloComanda": 228791,
            "idEstadoPedido": 3,
            "estadoPedido": "Por cobrar",
            "idEstadoArticulo": 3,
            "estadoArticulo": "Por cobrar",
            "fechaSolicitud": "2022-12-21T12:46:08.443",
            "cod_Articulo": "AC0688",
            "desc_Articulo": "PROMO TEQ VOLCAN BOT.",
            "abr_Comanda_Linea": "ABOS",
            "cantidad": 1,
            "precioUnidadConIva": 1100,
            "esCortesia": false,
            "subTotal": 3990,
            "cod_Linea": 1798,
            "desc_Linea": "Bebidas"
        },
        {
            "idComanda": 92389,
            "orden": 105,
            "idArticuloComanda": 228792,
            "idEstadoPedido": 3,
            "estadoPedido": "Por cobrar",
            "idEstadoArticulo": 3,
            "estadoArticulo": "Por cobrar",
            "fechaSolicitud": "2022-12-21T12:46:08.443",
            "cod_Articulo": "AC0526",
            "desc_Articulo": "PROMO POSTRE NUTELLA CREPES",
            "abr_Comanda_Linea": "ABOS",
            "cantidad": 1,
            "precioUnidadConIva": 0,
            "esCortesia": true,
            "subTotal": 3990,
            "cod_Linea": 1797,
            "desc_Linea": "Alimentos"
        },
        {
            "idComanda": 92389,
            "orden": 105,
            "idArticuloComanda": 228793,
            "idEstadoPedido": 3,
            "estadoPedido": "Por cobrar",
            "idEstadoArticulo": 3,
            "estadoArticulo": "Por cobrar",
            "fechaSolicitud": "2022-12-21T12:46:08.443",
            "cod_Articulo": "AC0536",
            "desc_Articulo": "COMPLEMENTO DE HABITACION",
            "abr_Comanda_Linea": "ABOS",
            "cantidad": 1,
            "precioUnidadConIva": 2700,
            "esCortesia": true,
            "subTotal": 3990,
            "cod_Linea": 1864,
            "desc_Linea": "Otros"
        }
    ],
    "subtotal": 3990,
    "precioCortesia": 2700,
    "total": 1290,
    "tieneCortesias": true
},
{
  "idComanda": 92389,
  "numeroOrden": 105,
  "abrLineaOrden": "ABOS",
  "fechaSolicitud": "2022-12-21T12:46:08.443",
  "idEstadoPedido": 3,
  "estadoPedido": "Por cobrar",
  "detalleComandas": [
      {
          "idComanda": 92389,
          "orden": 105,
          "idArticuloComanda": 228789,
          "idEstadoPedido": 3,
          "estadoPedido": "Por cobrar",
          "idEstadoArticulo": 3,
          "estadoArticulo": "Por cobrar",
          "fechaSolicitud": "2022-12-21T12:46:08.443",
          "cod_Articulo": "AC0570",
          "desc_Articulo": "CIG MARLBORO BLANCO",
          "abr_Comanda_Linea": "ABOS",
          "cantidad": 1,
          "precioUnidadConIva": 100,
          "esCortesia": false,
          "subTotal": 3990,
          "cod_Linea": 1864,
          "desc_Linea": "Otros"
      },
      {
          "idComanda": 92389,
          "orden": 105,
          "idArticuloComanda": 228790,
          "idEstadoPedido": 3,
          "estadoPedido": "Por cobrar",
          "idEstadoArticulo": 3,
          "estadoArticulo": "Por cobrar",
          "fechaSolicitud": "2022-12-21T12:46:08.443",
          "cod_Articulo": "AC0573",
          "desc_Articulo": "SICO SENSITIVE",
          "abr_Comanda_Linea": "ABOS",
          "cantidad": 1,
          "precioUnidadConIva": 90,
          "esCortesia": false,
          "subTotal": 3990,
          "cod_Linea": 1799,
          "desc_Linea": "Spa & Sex"
      },
      {
          "idComanda": 92389,
          "orden": 105,
          "idArticuloComanda": 228791,
          "idEstadoPedido": 3,
          "estadoPedido": "Por cobrar",
          "idEstadoArticulo": 3,
          "estadoArticulo": "Por cobrar",
          "fechaSolicitud": "2022-12-21T12:46:08.443",
          "cod_Articulo": "AC0688",
          "desc_Articulo": "PROMO TEQ VOLCAN BOT.",
          "abr_Comanda_Linea": "ABOS",
          "cantidad": 1,
          "precioUnidadConIva": 1100,
          "esCortesia": false,
          "subTotal": 3990,
          "cod_Linea": 1798,
          "desc_Linea": "Bebidas"
      },
      {
          "idComanda": 92389,
          "orden": 105,
          "idArticuloComanda": 228792,
          "idEstadoPedido": 3,
          "estadoPedido": "Por cobrar",
          "idEstadoArticulo": 3,
          "estadoArticulo": "Por cobrar",
          "fechaSolicitud": "2022-12-21T12:46:08.443",
          "cod_Articulo": "AC0526",
          "desc_Articulo": "PROMO POSTRE NUTELLA CREPES",
          "abr_Comanda_Linea": "ABOS",
          "cantidad": 1,
          "precioUnidadConIva": 0,
          "esCortesia": true,
          "subTotal": 3990,
          "cod_Linea": 1797,
          "desc_Linea": "Alimentos"
      },
      {
          "idComanda": 92389,
          "orden": 105,
          "idArticuloComanda": 228793,
          "idEstadoPedido": 3,
          "estadoPedido": "Por cobrar",
          "idEstadoArticulo": 3,
          "estadoArticulo": "Por cobrar",
          "fechaSolicitud": "2022-12-21T12:46:08.443",
          "cod_Articulo": "AC0536",
          "desc_Articulo": "COMPLEMENTO DE HABITACION",
          "abr_Comanda_Linea": "ABOS",
          "cantidad": 1,
          "precioUnidadConIva": 2700,
          "esCortesia": true,
          "subTotal": 3990,
          "cod_Linea": 1864,
          "desc_Linea": "Otros"
      }
  ],
  "subtotal": 3990,
  "precioCortesia": 2700,
  "total": 1290,
  "tieneCortesias": true
},{
  "idComanda": 92389,
  "numeroOrden": 105,
  "abrLineaOrden": "ABOS",
  "fechaSolicitud": "2022-12-21T12:46:08.443",
  "idEstadoPedido": 4,
  "estadoPedido": "Por pagar",
  "detalleComandas": [
      {
          "idComanda": 92389,
          "orden": 105,
          "idArticuloComanda": 228789,
          "idEstadoPedido": 4,
          "estadoPedido": "Por pagar",
          "idEstadoArticulo": 3,
          "estadoArticulo": "Por cobrar",
          "fechaSolicitud": "2022-12-21T12:46:08.443",
          "cod_Articulo": "AC0570",
          "desc_Articulo": "CIG MARLBORO BLANCO",
          "abr_Comanda_Linea": "ABOS",
          "cantidad": 1,
          "precioUnidadConIva": 100,
          "esCortesia": false,
          "subTotal": 3990,
          "cod_Linea": 1864,
          "desc_Linea": "Otros"
      },
      {
          "idComanda": 92389,
          "orden": 105,
          "idArticuloComanda": 228790,
          "idEstadoPedido": 4,
          "estadoPedido": "Por pagar",
          "idEstadoArticulo": 3,
          "estadoArticulo": "Por cobrar",
          "fechaSolicitud": "2022-12-21T12:46:08.443",
          "cod_Articulo": "AC0573",
          "desc_Articulo": "SICO SENSITIVE",
          "abr_Comanda_Linea": "ABOS",
          "cantidad": 1,
          "precioUnidadConIva": 90,
          "esCortesia": false,
          "subTotal": 3990,
          "cod_Linea": 1799,
          "desc_Linea": "Spa & Sex"
      },
      {
          "idComanda": 92389,
          "orden": 105,
          "idArticuloComanda": 228791,
          "idEstadoPedido": 4,
          "estadoPedido": "Por pagar",
          "idEstadoArticulo": 3,
          "estadoArticulo": "Por cobrar",
          "fechaSolicitud": "2022-12-21T12:46:08.443",
          "cod_Articulo": "AC0688",
          "desc_Articulo": "PROMO TEQ VOLCAN BOT.",
          "abr_Comanda_Linea": "ABOS",
          "cantidad": 1,
          "precioUnidadConIva": 1100,
          "esCortesia": false,
          "subTotal": 3990,
          "cod_Linea": 1798,
          "desc_Linea": "Bebidas"
      },
      {
          "idComanda": 92389,
          "orden": 105,
          "idArticuloComanda": 228792,
          "idEstadoPedido": 4,
          "estadoPedido": "Por pagar",
          "idEstadoArticulo": 3,
          "estadoArticulo": "Por cobrar",
          "fechaSolicitud": "2022-12-21T12:46:08.443",
          "cod_Articulo": "AC0526",
          "desc_Articulo": "PROMO POSTRE NUTELLA CREPES",
          "abr_Comanda_Linea": "ABOS",
          "cantidad": 1,
          "precioUnidadConIva": 0,
          "esCortesia": true,
          "subTotal": 3990,
          "cod_Linea": 1797,
          "desc_Linea": "Alimentos"
      },
      {
          "idComanda": 92389,
          "orden": 105,
          "idArticuloComanda": 228793,
          "idEstadoPedido": 4,
          "estadoPedido": "Por pagar",
          "idEstadoArticulo": 3,
          "estadoArticulo": "Por cobrar",
          "fechaSolicitud": "2022-12-21T12:46:08.443",
          "cod_Articulo": "AC0536",
          "desc_Articulo": "COMPLEMENTO DE HABITACION",
          "abr_Comanda_Linea": "ABOS",
          "cantidad": 1,
          "precioUnidadConIva": 2700,
          "esCortesia": true,
          "subTotal": 3990,
          "cod_Linea": 1864,
          "desc_Linea": "Otros"
      }
  ],
  "subtotal": 3990,
  "precioCortesia": 2700,
  "total": 1290,
  "tieneCortesias": true
}

  ]
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  salir(){
    this.router.navigate([`/hotel`]);
  }

  style(estado:string){

    if(estado == 'Preparación'){
      return 'preparacion'
    }
    else if(estado == 'Por cobrar'){
      return 'porcobrar'
    }
    else if(estado == 'Por pagar'){
      return 'porpagar'
    }

    return ''
  }

}