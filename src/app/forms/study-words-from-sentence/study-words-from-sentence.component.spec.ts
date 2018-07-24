import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyWordsFromSentenceComponent } from './study-words-from-sentence.component';

describe('StudyWordsFromSentenceComponent', () => {
  let component: StudyWordsFromSentenceComponent;
  let fixture: ComponentFixture<StudyWordsFromSentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyWordsFromSentenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyWordsFromSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
