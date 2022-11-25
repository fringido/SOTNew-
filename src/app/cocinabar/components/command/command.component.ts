import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {

  time: number = 10.28;

  color: any;

  items = [
    {name: 'fruta fruta fruta fruta fruta fruta fruta', quantity: 2},
    {name: 'fruta', quantity: 2},
    {name: 'fruta', quantity: 2},
    {name: 'fruta', quantity: 2},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
