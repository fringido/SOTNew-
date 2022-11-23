import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CommandComponent } from '../components/command/command.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CommandColorDirective } from './command-color.directive';
import { By } from '@angular/platform-browser';
import { CocinabarComponent } from '../cocinabar.component';
import { CocinabarService } from '../services/cocinabar/cocinabar.service';
import { ActivatedRoute } from '@angular/router';
import { map, of } from 'rxjs';

const commands = [
  {name: 'Tacos', amount: 5, timeStart: 1, specifications: 'Sin chile'},
  {name: 'Enchiladas', amount: 5, timeStart: 14, specifications: 'Sin Salsa, los puros totopos'},
  {name: 'Fruta', amount: 2, timeStart: 20, specifications: 'Sin chile'},
]

describe('CommandColorDirective', () => {

  let fixture: ComponentFixture<CocinabarComponent>;
  let commandComponents: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommandColorDirective, CocinabarComponent, CommandComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        CocinabarService,
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({path: 'cocina'})
          }
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CocinabarComponent);
    
    fixture.componentInstance.commands = [...commands];
    fixture.detectChanges();

    commandComponents = fixture.debugElement.queryAll(
      By.directive(CommandColorDirective)
    );
  });

  it('expect background color to be "#0AC917" in a command that has less than 10 minutes of being created', () => {
    expect(commandComponents[0].componentInstance.color).toBe('#0AC917');
  });

  it('expect background color to be "#FFD500" in a command that has less than 15 minutes of being created', () => {
    expect(commandComponents[1].componentInstance.color).toBe('#FFD500');
  });

  it('expect background color to be "#FD0022" in a command that has more than 15 minutes of being created', () => {
    expect(commandComponents[2].componentInstance.color).toBe('#FD0022');
  });

});
