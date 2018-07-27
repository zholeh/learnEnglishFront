import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Sentence } from './classes';

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

  public sentence: EventEmitter<Sentence> = new EventEmitter();

  public emitSentence(sent: Sentence, currentSentence: number) {
    this.sentence.emit(sent);
  }
}
