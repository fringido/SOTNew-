import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimengModule } from '../../modules/primeng/primeng.module';

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
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.config.showHeader = false;
    this.config.closable = false;
    this.config.width = '420px';
    this.config.styleClass = 'hideDialogHeader';
    setTimeout(() => {
      this.ref.close();
    }, 1500)
  }

}
