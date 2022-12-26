import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimengModule } from '../../modules/primeng/primeng.module';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-message-modal-autoclosable',
  templateUrl: './message-modal-autoclosable.component.html',
  standalone: true,
  imports: [PrimengModule],
  styleUrls: ['./message-modal-autoclosable.component.scss']
})
export class MessageModalAutoclosableComponent implements OnInit {

  message = this.config.data.message;

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
    setTimeout(() => {
      this.ref.close();
      this.modalService.close();
    }, 3000)
  }

}
