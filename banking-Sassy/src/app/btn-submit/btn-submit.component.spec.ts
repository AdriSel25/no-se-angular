import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSubmitComponent } from './btn-submit.component';

describe('BtnSubmitComponent', () => {
  let component: BtnSubmitComponent;
  let fixture: ComponentFixture<BtnSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnSubmitComponent]
    });
    fixture = TestBed.createComponent(BtnSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
