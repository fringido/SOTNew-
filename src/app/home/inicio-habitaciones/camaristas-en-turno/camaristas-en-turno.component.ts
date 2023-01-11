import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-camaristas-en-turno',
  templateUrl: './camaristas-en-turno.component.html',
  styleUrls: ['./camaristas-en-turno.component.scss']
})
export class CamaristasEnTurnoComponent implements OnInit {
  visible = true;

  constructor(
    private readonly location: Location
  ) { }

   filterText!: FormControl;
   listaTodasCamaristas: any[] = [];
   listaTodasCamaristasAll: any[] = [];

  ngOnInit(): void {
    this.getCamaristas();
    this.search();

  }

 //busca los camaristas
 search() {
  this.filterText = new FormControl("");
  this.filterText.valueChanges
    .pipe(debounceTime(400), distinctUntilChanged())
    .subscribe((v) => {

      if (v) {
        const filter = new RegExp(v, "i");
        const filterFields = ["nombre"];
        this.listaTodasCamaristas = this.listaTodasCamaristasAll.filter((role) =>
          filterFields.some((field) => filter.test(role[field]))
        );

      } else {
        this.listaTodasCamaristas = this.listaTodasCamaristasAll;
      }
    });
  }

  getCamaristas(){
    this.listaTodasCamaristas = [
      {nombre: 'Abc defghijk', idHabitacion: 1, numeroHabitacion: 10},
      {nombre: 'Abc defghijk', idHabitacion: 2, numeroHabitacion: 22},
      {nombre: 'Luis'}
    ]
    this.listaTodasCamaristasAll = [...this.listaTodasCamaristas];
  }

  salir() {
    this.location.back();
  }
}
