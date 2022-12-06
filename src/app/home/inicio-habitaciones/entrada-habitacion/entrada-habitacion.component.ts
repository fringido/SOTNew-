import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-entrada-habitacion',
  templateUrl: './entrada-habitacion.component.html',
  styleUrls: ['./entrada-habitacion.component.scss']
})
export class EntradaHabitacionComponent implements OnInit {

  constructor(
    private modal:ModalService,

  ) {
  }

  ngOnInit(): void {

  }

  ngafterViewInit(): void {
    this.modal.open()

  }

}
