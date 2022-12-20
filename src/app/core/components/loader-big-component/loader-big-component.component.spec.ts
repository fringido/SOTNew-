import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderBigComponentComponent } from './loader-big-component.component';

describe('LoaderBigComponentComponent', () => {
  let component: LoaderBigComponentComponent;
  let fixture: ComponentFixture<LoaderBigComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderBigComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderBigComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
