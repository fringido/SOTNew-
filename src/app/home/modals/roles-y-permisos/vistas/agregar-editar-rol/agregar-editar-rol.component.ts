import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';


@Component({
  selector: 'app-agregar-editar-rol',
  templateUrl: 'agregar-editar-rol.component.html',
  styleUrls: ['agregar-editar-rol.component.scss']
})


export class AgregarEditarRolComponent implements OnInit {

  menu: number = 1;
  separador: any[] = []
  separadorTotal: any[] = []

  display = true

  form: any;
  formularioBotones: any;

  formulario={
    id: 1,
    nombre: '',
    rolId: 1,
    nombreRol: 1,
    permisos: [
      {
        id: 1,
        nombrePermiso: 'libre',
        icon: 'fab fa-apple',
        color: '#72AC37',
        nombre: 'editar',
        menuId: 1,
        accesoId: 1,
        valor: false
      },
      {
        id: 2,
        nombrePermiso: 'libre',
        icon: 'fab fa-app-store',
        color: '#ADEAC2',
        nombre: 'modificar',
        menuId: 1,
        accesoId: 1,
        valor: false
      }
      ,
      {
        id: 3,
        nombrePermiso: 'libre',
        icon: 'fab fa-cc-apple-pay',
        color: '#581AC0',
        nombre: 'eliminar',
        menuId: 1,
        accesoId: 1,
        valor: false
      },
      {
        id: 4,
        nombrePermiso: 'ocupada',
        icon: 'fab fa-centos',
        color: '#BD2BB9',
        nombre: 'modificar',
        menuId: 1,
        accesoId: 2,
        valor: false
      },
      {
        id: 5,
        nombrePermiso: 'ocupada',
        icon: 'fab fa-creative-commons-by',
        color: '#BD2BB9',
        nombre: 'nombre',
        menuId: 1,
        accesoId: 2,
        valor: false
      },
      {
        id: 6,
        nombrePermiso: 'libre',
        icon: 'fab fa-chrome',
        color: '#BD2BB9',
        nombre: 'papa',
        menuId: 1,
        accesoId: 3,
        valor: false
      },
      {
        id: 7,
        nombrePermiso: 'libre',
        icon: 'fab fa-codiepie',
        color: '#44EC95',
        nombre: 'lele',
        menuId: 1,
        accesoId: 3,
        valor: false
      },
      {
        id: 8,
        nombrePermiso: 'libre',
        icon: 'fab fa-cloudsmith',
        color: '#F1BE98',
        nombre: 'carro',
        menuId: 1,
        accesoId: 4,
        valor: false
      },
      {
        id: 9,
        nombrePermiso: 'libre',
        icon: 'fab fa-css3-alt',
        color: '#738D7D',
        nombre: 'xl4- 4',
        menuId: 1,
        accesoId: 5,
        valor: false
      },
      {
        id: 10,
        nombrePermiso: 'libre',
        icon: 'fab fa-css3-alt',
        color: '#C28FF5',
        nombre: 'modificar',
        menuId: 1,
        accesoId: 5,
        valor: false
      },
      {
        id: 11,
        nombrePermiso: 'libre',
        icon: 'fab fa-css3-alt',
        color: '#C28FF5',
        nombre: 'no modificar',
        menuId: 1,
        accesoId: 5,
        valor: false
      },
      {
        id: 12,
        nombrePermiso: 'libre',
        icon: 'fab fa-creative-commons-pd-alt',
        color: '#44EC95',
        nombre: 'modificar',
        menuId: 1,
        accesoId: 6,
        valor: false
      },
      {
        id: 13,
        nombrePermiso: 'libre',
        icon: 'fab fa-creative-commons-sampling',
        color: '#44EC95',
        nombre: 'cobrar',
        menuId: 2,
        accesoId: 2,
        valor: false
      },
      {
        id: 14,
        nombrePermiso: 'libre',
        icon: 'fab fa-bitcoin',
        color: '#2D23C0',
        nombre: 'icono',
        menuId: 2,
        accesoId: 2,
        valor: false
      },
      {
        id: 15,
        nombrePermiso: 'libre',
        icon: 'fab fa-black-tie',
        color: '#44EC95',
        nombre: 'tangamandapio',
        menuId: 2,
        accesoId: 2,
        valor: false
      }
    ]
  }

  constructor(
    private fb: FormBuilder,
    private location:Location
  ) {
    this.contador();
  }

  ngOnInit(): void {
  }

  contador() {
    let form: any = {}

    let menus = this.formulario.permisos.map((permiso) => {
      return permiso.menuId
    })

    let menusId = menus.filter((item: any, index: any) => {
      return menus.indexOf(item) === index;
    })

    menusId.forEach((dato: any) => {
      let separacion = dato
      let repeticion:any = {}
      let permisos: any[] = []

      this.formulario.permisos.forEach((dato2) => {
        if (separacion == dato2.menuId) {
          repeticion[dato2.accesoId] = (repeticion[dato2.accesoId] || 0) + 1;
          permisos.push(dato2)
        }
      })

      this.separador.push({
        menuId: separacion,
        permisos: permisos,
        repeticion:repeticion
      })
    })

    this.separador.forEach(dato =>{
      let separacion = dato.menuId
      let componente = dato.repeticion
      let grupal: any[] = []
      let unico: any[] = []

      Object.keys(componente).forEach( d =>{
        let id = d;
        let valor = componente[d]
        let agrupado : any[] = []

        if(valor > 1){
          agrupado = dato.permisos.filter((filtro:any) => filtro.accesoId == id)
          grupal.push({
            accesoId: id,
            icon: agrupado[0].icon,
            nombre: agrupado[0].nombrePermiso,
            color: agrupado[0].color,
            permisos: agrupado
          })
        }

        if(valor == 1){
          let solo = dato.permisos.filter((filtro:any) => filtro.accesoId == id)
          unico.push(...solo)
        }
      })

      this.separadorTotal.push({
        idAcceso: separacion,
        modal:grupal,
        button: unico
      })
    })

    this.formulario.permisos.map( (d) => {
      form[d.id] = new FormControl(d.valor)
    })

    this.formularioBotones = new FormGroup(form)

    this.form = this.fb.group({
      nombre: [this.formulario.nombre, Validators.required],
      permisos: this.formularioBotones
    })

  }

  selectMenu(numero: number) {
    this.menu = numero
  }

  selectPermiso(id:number){

    // let cod = String(id)

    // let valor =  this.form.getFormGroup()

    // console.log(valor)

    // this.form.controls['permisos'].patchValue({
    //   id: !valor
    // })
  }

  salir(){
    this.location.back()
  }


}
