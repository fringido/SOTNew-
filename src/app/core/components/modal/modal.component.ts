import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('0.9s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ]
})

export class ModalComponent implements OnInit {


  constructor(
    private modal: ModalService
  ) { }

  isOpen$ = this.modal.isModalOpen$;

  open:boolean | undefined

  ngOnInit(): void {
    this.modal.isModalOpen$.subscribe(d =>{
      this.open = d
    })
  }

}
