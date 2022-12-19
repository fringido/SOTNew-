import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-de-roles',
  templateUrl: 'lista-de-roles.component.html',
  styleUrls: ['lista-de-roles.component.scss']
})
export class ListaDeRolesComponent implements OnInit {

  display= true
  filterText!: FormControl
  concepto_seleccionado: number = 0
  conceptoInstantaneo:string = ''

  listaDeRoles = [
    {
      name: 'Supervisor',
      id:1
    },
    {
      name: 'recamarista',
      id:2
    },
    {
      name: 'mesero',
      id:3
    },
    {
      name: 'bar',
      id:4
    },
    {
      name: 'Valed',
      id:5
    },
    {
      name: 'recepcionista',
      id:6
    },
    {
      name: 'Nombre super largo prueba xd ful hd 4k',
      id:7
    },
    {
      name: 'mesero',
      id:3
    },
    {
      name: 'bar',
      id:4
    },
    {
      name: 'Valed',
      id:5
    },
    {
      name: 'recepcionista',
      id:6
    },
    {
      name: 'Nombre super largo prueba xd ful hd 4k',
      id:7
    },
  ]
  listaDeRolesAll: any


  constructor(
    private location:Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listaDeRolesAll = this.listaDeRoles
    this.search()
  }

    //busca los roles
    search() {

      this.filterText = new FormControl("");
      this.filterText.valueChanges
        .pipe(debounceTime(400), distinctUntilChanged())
        .subscribe((v) => {
          this.concepto_seleccionado = 0
          this.conceptoInstantaneo = "";
          if (v) {
            const filter = new RegExp(v, "i");
            const filterFields = ["name"];
            this.listaDeRoles = this.listaDeRolesAll.filter((role:any) =>
              filterFields.some((field) => filter.test(role[field]))
            );

          } else {
            this.listaDeRoles = this.listaDeRolesAll;
          }
        });
    }


  salir(){
    this.router.navigate([`/hotel`]);
  }

  aceptar(){
    this.router.navigate([`/hotel/rolesYPermisos/agregar`]);
  }


}
