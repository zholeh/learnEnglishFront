import { Input, Component, ChangeDetectorRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material';
import { EmitData } from '../../services/global-data.service';
import { ISentence } from '../../services/interfaces';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit, AfterViewInit {

  @Input() rate = 0;
  @Input() nameCard: string;
  @Input() translate: string;
  private translateWord: string;

  max = 10;
  isReadonly = true;

  fillCard(sent: ISentence, nameCard: string) {

    if (this.nameCard === nameCard && sent !== undefined) {
      this.translate = sent.translate;
      this.translateWord = sent.translateWord;

      this.changeDetectionRef.detectChanges();
    }

  }
  constructor(private changeDetectionRef: ChangeDetectorRef, private emitData: EmitData) {

    this.emitData.sentence.subscribe(
      (response: ISentence) => {
        this.fillCard(response, 'current');
      }
    );
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}
