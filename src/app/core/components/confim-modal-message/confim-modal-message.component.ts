import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimengModule } from '../../modules/primeng/primeng.module';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-confim-modal-message',
  templateUrl: './confim-modal-message.component.html',
  standalone: true,
  imports: [PrimengModule, CommonModule],
  styleUrls: ['./confim-modal-message.component.scss']
})
export class ConfimModalMessageComponent implements OnInit {

  message = this.config.data.message;
  showVideoButton = this.config.data.withVideoButton;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private modalService: ModalService
    ) { 
    this.config.showHeader = false;
    this.config.closable = false;
    this.config.width = '420px';
  }
  
  ngOnInit(): void {
    this.modalService.open();
  }

  confirm() {
    this.ref.close({confirmed: true});
    this.modalService.close();
  }
  
  cancel() {
    this.ref.close({confirmed: false});
    this.modalService.close();
  }
}
