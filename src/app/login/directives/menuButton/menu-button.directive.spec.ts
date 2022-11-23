import { LoginComponent } from '../../login.component';
import { MenuButtonDirective } from './menu-button.directive';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { LoginService } from '../../services/login/login.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('MenuButtonDirective', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), ReactiveFormsModule],
      declarations: [MenuButtonDirective, LoginComponent],
      providers: [LoginService, FormBuilder],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();

    button = fixture.debugElement.query(
      By.directive(MenuButtonDirective)
    ).nativeElement;
  });

  it('should has "slideInLeft" class', () => {
    expect(button.classList.contains('slideInLeft')).toBe(true);
  });

  it('should show button after triggering a mouseenter event', () => {
    const event = new Event('mouseenter');
    button.dispatchEvent(event);
    fixture.detectChanges();
    // fixture.componentInstance.isBarFirstTap
    expect(button.classList.contains('show-button')).toBe(true);
  });

  it('should hide button after triggering a mouseleave event', () => {
    const event = new Event('mouseleave');
    button.dispatchEvent(event);
    fixture.detectChanges();
    expect(button.classList.contains('show-button')).toBe(false);
  });
});
