import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpModalDialogComponent } from './sign-up-modal-dialog.component';

describe('SignUpModalDialogComponent', () => {
  let component: SignUpModalDialogComponent;
  let fixture: ComponentFixture<SignUpModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
