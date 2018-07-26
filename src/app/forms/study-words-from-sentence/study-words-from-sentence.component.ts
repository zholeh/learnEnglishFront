import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EmitData } from '../../services/global-data.service';
import { ISentence } from '../../services/interfaces';
import { HIDE_UP_DOWN_ANIMATION } from '../../animations/animation';
@Component({
  selector: 'app-study-words-from-sentence',
  templateUrl: './study-words-from-sentence.component.html',
  styleUrls: ['./study-words-from-sentence.component.scss'],
  animations: [HIDE_UP_DOWN_ANIMATION]
})

export class StudyWordsFromSentenceComponent implements OnInit, AfterViewInit {

  @ViewChild('app-sentence') appSentence: ElementRef;

  private sentences: Array<ISentence> = [];
  private currentSentence: number;
  private upDown = '';

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
  }

  changeSentence(newNum: number, upDown: string) {
    if (newNum >= 0 && newNum < (this.sentences.length)) {
      this.currentSentence = newNum;
      this.upDown = upDown;
    }
  }

  previousSentence() {
    this.changeSentence(this.currentSentence - 1, 'hideUp');
  }

  nextSentence() {
    this.changeSentence(this.currentSentence + 1, 'hideDown');
  }

  swipe(event) {
    if (event.type === 'swipeup') {
      this.previousSentence();
    } else if (event.type === 'swipedown') {
      this.nextSentence();
    }
  }

  animEnd(event) {
    if (this.upDown === 'hideUp') {
      this.upDown = 'next';
    } else {
      this.upDown = 'prev';
    }
    this.emitData.sentence.emit(this.sentences[this.currentSentence]);
  }
}
