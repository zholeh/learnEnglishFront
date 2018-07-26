import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EmitData } from '../../services/global-data.service';
import { ISentence } from '../../services/interfaces';
import { NEXT_PREV_ANIMATION } from '../../animations/animation';
@Component({
  selector: 'app-study-words-from-sentence',
  templateUrl: './study-words-from-sentence.component.html',
  styleUrls: ['./study-words-from-sentence.component.scss'],
  animations: [NEXT_PREV_ANIMATION]
})

export class StudyWordsFromSentenceComponent implements OnInit, AfterViewInit {

  @ViewChild('app-sentence') appSentence: ElementRef;

  private sentences: Array<ISentence> = [];
  private currentSentence: number;
  private direction = 'next';


  constructor(private emitData: EmitData) {

    let sentence: ISentence;

    sentence = {
      startSentence: 'Hello! I need some ',
      secretWord: 'advice',
      endSentence: ' from you. Can you help me? - Yes, I can help you! Ask!',
      translate: 'Привет! Мне нужен совет. Можешь мне помочь? -Да, я могу помочь тебе! Спрашивай!',
      translateWord: 'Совет, консультация, мнение'
    };
    this.sentences.push(sentence);

    sentence = {
      startSentence: 'Thank you for ',
      secretWord: 'everything',
      endSentence: ' what you do.',
      translate: 'Спасибо тебе за все, что ты сделал.',
      translateWord: 'все, все самое важное'
    };
    this.sentences.push(sentence);
    this.currentSentence = 1;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.emitData.sentence.emit(this.sentences[this.currentSentence]);
    this.emitData.previousSentence.emit(this.sentences[this.currentSentence - 1]);
  }

  previousSentence() {
    this.direction = 'prev';
    this.currentSentence = Math.max(this.currentSentence - 1, 0);
    this.emitData.sentence.emit(this.sentences[this.currentSentence]);

  }

  nextSentence() {
    this.direction = 'next';
    this.currentSentence = Math.min(this.currentSentence + 1, this.sentences.length - 1);
    this.emitData.sentence.emit(this.sentences[this.currentSentence]);
  }

  swipe(event) {

    if (event.type === 'swipeup') {
      this.nextSentence();
    } else if (event.type === 'swipedown') {
      this.previousSentence();
    }
  }
}
