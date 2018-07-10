import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyFormsComponent } from './empty-forms.component';

describe('EmptyFormsComponent', () => {
  let component: EmptyFormsComponent;
  let fixture: ComponentFixture<EmptyFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
