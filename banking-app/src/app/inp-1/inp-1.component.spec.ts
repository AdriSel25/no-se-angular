import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inp1Component } from './inp-1.component';

describe('Inp1Component', () => {
  let component: Inp1Component;
  let fixture: ComponentFixture<Inp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Inp1Component]
    });
    fixture = TestBed.createComponent(Inp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
