import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParamterComponent } from './form-paramter.component';

describe('FormParamterComponent', () => {
  let component: FormParamterComponent;
  let fixture: ComponentFixture<FormParamterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormParamterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormParamterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
