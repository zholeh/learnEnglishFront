import { Injectable } from '@angular/core';
// import { TranslateService } from '../../../../node_modules/@ngx-translate/core';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';

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
