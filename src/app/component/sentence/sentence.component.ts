import { Input, Component, ElementRef, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { EmitData } from '../../services/global-data.service';
import { ISentence } from '../../services/interfaces';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss']
})
export class SentenceComponent implements OnInit, AfterViewInit {

  @ViewChild('inputBuffer') inputBuffer: ElementRef;
  @Input() startSentence: string;
  @Input() endSentence: string;
  private secretWord: string;
  private secretWordBuffer: string;
  private translate: string;
  private translateWord: string;

  private conditionBuffer = true;
  private minWidthFromBuffer = '1px';
  private widthFromBuffer = this.minWidthFromBuffer;
  private afterViewInit = false;
  private enteringWord = '';

  /**
   * Sets width word
   */
  private setWidthWord() {

    this.secretWord = this.enteringWord;
    this.changeDetectionRef.detectChanges();
    this.widthFromBuffer = '' +
      Math.max(
        (parseInt(this.minWidthFromBuffer, 10)),
        (this.inputBuffer.nativeElement.offsetWidth + 6)
      ) +
      'px';
    this.secretWord = '';
    this.changeDetectionRef.detectChanges();
  }

  private setMinWidthWord() {

    if (this.afterViewInit) {
      this.secretWord = this.secretWordBuffer;
      this.changeDetectionRef.detectChanges();
      this.minWidthFromBuffer = '' + (this.inputBuffer.nativeElement.offsetWidth + 6) + 'px';
      this.secretWord = '';
      this.changeDetectionRef.detectChanges();

      this.setWidthWord();
    }
  }

  private onChangeSecretWord(event) {

    this.setWidthWord();
  }

  constructor(private changeDetectionRef: ChangeDetectorRef, private emitData: EmitData) {
    this.emitData.sentence.subscribe(
      (response: ISentence) => {
        this.secretWordBuffer = response.secretWord;
        this.startSentence = response.startSentence;
        this.endSentence = response.endSentence;
        this.translate = response.translate;
        this.translateWord = response.translateWord;

        this.setMinWidthWord();
      }
    );
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.afterViewInit = true;
    this.setMinWidthWord();
  }
}
