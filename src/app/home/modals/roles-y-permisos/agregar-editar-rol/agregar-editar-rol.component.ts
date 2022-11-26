import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-agregar-editar-rol',
  templateUrl: './agregar-editar-rol.component.html',
  styleUrls: ['./agregar-editar-rol.component.scss']
})


export class AgregarEditarRolComponent implements OnInit {

  checked2: boolean = true;

  constructor() {

  }

  ngOnInit(): void {
  }

}
