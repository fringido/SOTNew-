import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimengModule } from '../../modules/primeng/primeng.module';

@Component({
  selector: 'app-confim-modal-message',
  templateUrl: './confim-modal-message.component.html',
  standalone: true,
  imports: [PrimengModule],
  styleUrls: ['./confim-modal-message.component.scss']
})
export class ConfimModalMessageComponent implements OnInit {

  message = this.config.data.message;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) { 
    this.config.showHeader = false;
    this.config.closable = false;
    this.config.width = '420px';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.ref.close();
    }, 3000)
  }
}
