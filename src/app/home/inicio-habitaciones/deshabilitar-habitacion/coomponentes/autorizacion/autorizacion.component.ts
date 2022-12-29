import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';


@Component({
  selector: 'app-autorizacion',
  templateUrl: './autorizacion.component.html',
  styleUrls: ['./autorizacion.component.scss']
})
export class AutorizacionComponent implements OnInit {

  form!:FormGroup

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private dialogService: DialogService,


    ) {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
    }

  ngOnInit(): void {
  }

  cancelar(){
    this.newItemEvent.emit(false)
  }
  aceptar(){
    const genDialogMessage = (message: string) => {
      return this.dialogService.open(MessageModalAutoclosableComponent, {data: { message }});
    };
    genDialogMessage(`DESHABILITARÍAN GENERADA CON ÉXITO`)
    this.router.navigate([`/hotel`]);
  }

}
