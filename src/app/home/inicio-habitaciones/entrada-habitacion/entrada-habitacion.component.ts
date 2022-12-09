import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-habitacion',
  templateUrl: './entrada-habitacion.component.html',
  styleUrls: ['./entrada-habitacion.component.scss']
})
export class EntradaHabitacionComponent implements OnInit {
  display = true

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.display = true
  }

}
