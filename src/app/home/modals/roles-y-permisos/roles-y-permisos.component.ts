import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-roles-y-permisos',
  templateUrl: './roles-y-permisos.component.html',
  styleUrls: ['./roles-y-permisos.component.scss']
})
export class RolesYPermisosComponent implements OnInit {

  constructor(
    private modal: ModalService
  ) { }

  ngOnInit(): void {
    this.modal.open()
  }

  ngAfterViewInit(){
    this.modal.open()
  }

}
