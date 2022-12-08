import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dar-entrada-habitacion',
  templateUrl: './dar-entrada-habitacion.component.html',
  styleUrls: ['./dar-entrada-habitacion.component.scss']
})
export class DarEntradaHabitacionComponent implements OnInit {
display = true
  constructor(
    private location:Location,
  ) {
  }

  ngOnInit() {
    this.salir()
  }

  salir(){
    setTimeout(() => {
      this.location.back()
    }, 3000);
  }

}
