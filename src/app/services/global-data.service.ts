import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ISentence } from './interfaces';

@Injectable()
export class GlobalDataService {

  private params = {};
  private ls = {}; // localStorage

  constructor(private translate: TranslateService) { }
  public setParams(param: string, val: any): any {
    this.params[param] = val;
  }
  public getParams(param: string) {
    return this.params[param];
  }
  public setLocalStorage(param: string, val: any) {

    if (val !== null && val !== undefined) {
      localStorage.setItem(param, JSON.stringify(val));
      this.ls[param] = val;
    }
  }
  public getLocalStorage(param: string): any {
    this.ls[param] = this.ls[param] || JSON.parse(localStorage.getItem(param));
    return (this.ls[param]);
  }

  public changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}

@Injectable()
export class EmitData {

  public sentence: EventEmitter<ISentence> = new EventEmitter();
  public previousSentence: EventEmitter<ISentence> = new EventEmitter();
  public nextSentence: EventEmitter<ISentence> = new EventEmitter();

  public emitSentence(sent: ISentence, currentSentence: number) {
    this.sentence.emit(sent);
  }
  public emitPrevSentence(sent: ISentence, currentSentence: number) {
    this.previousSentence.emit(sent);
  }
  public emitNextSentence(sent: ISentence, currentSentence: number) {
    this.nextSentence.emit(sent);
  }
}
