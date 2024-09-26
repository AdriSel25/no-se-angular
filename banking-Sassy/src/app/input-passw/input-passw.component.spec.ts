import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPasswComponent } from './input-passw.component';

describe('InputPasswComponent', () => {
  let component: InputPasswComponent;
  let fixture: ComponentFixture<InputPasswComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputPasswComponent]
    });
    fixture = TestBed.createComponent(InputPasswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
