import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles-y-permisos',
  templateUrl: './roles-y-permisos.component.html',
  styleUrls: ['./roles-y-permisos.component.scss']
})
export class RolesYPermisosComponent implements OnInit {
  display = true

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.display = true
  }

}
