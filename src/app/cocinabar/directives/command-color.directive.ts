import { Directive, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { CommandComponent } from '../components/command/command.component';
import { Input, Output } from '@angular/core';

@Directive({
  selector: '[appCommandColor]'
})
export class CommandColorDirective implements OnInit {

  constructor(
    private readonly commandComponent: CommandComponent,
  ) { }

  ngOnInit(): void {
  }

  @Input('time')
  set time(time: any) {
    if(time < 10) {
      this.commandComponent.color = '#0AC917';
      return;
    }
    if(time < 15) {
      this.commandComponent.color = '#FFD500';
      return;
    }
    this.commandComponent.color = '#FD0022';

  }

}
