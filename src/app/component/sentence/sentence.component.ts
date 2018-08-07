import { Input, Component, ElementRef, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { EmitData } from '../../services/global-data.service';
import { Sentence } from '../../services/classes';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss']
})
export class SentenceComponent implements OnInit, AfterViewInit {

  @ViewChild('inputBuffer') inputBuffer: ElementRef;
  private sentence = new Sentence();
  private secretWordBuffer: string;

  private minWidthFromBuffer = '1px';
  private widthFromBuffer = this.minWidthFromBuffer;
  private afterViewInit = false;

  /**
   * Sets width word
   */
  private setWidthWord() {
    this.secretWordBuffer = this.sentence.secretWord;
    this.changeDetectionRef.detectChanges();
    this.widthFromBuffer = '' +
      Math.max(
        (parseInt(this.minWidthFromBuffer, 10)),
        (this.inputBuffer.nativeElement.offsetWidth + 6)
      ) +
      'px';
    this.secretWordBuffer = '';
    this.changeDetectionRef.detectChanges();
  }

  private setMinWidthWord() {
    if (this.afterViewInit) {
      this.secretWordBuffer = this.sentence.secretWord;
      this.changeDetectionRef.detectChanges();
      this.minWidthFromBuffer = '' +
        (this.inputBuffer.nativeElement.offsetWidth + 6) +
        'px';
      this.secretWordBuffer = '';
      this.changeDetectionRef.detectChanges();

      this.setWidthWord();
    }
  }

  private onChangeSecretWord(event) {

    this.setWidthWord();
  }

  constructor(private changeDetectionRef: ChangeDetectorRef, private emitData: EmitData) {
    this.emitData.sentence.subscribe(
      (response: Sentence) => {
        this.sentence = response;

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
