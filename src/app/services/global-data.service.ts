import { Injectable } from '@angular/core';

@Injectable()
export class GlobalDataService {

  private params = {};
  private ls = {}; // localStorage
  private ss = {}; // sessionStorage
  constructor() { }
  public setParams(param: string, val: any) {
    this.params[param] = val;
  }
  public getParams(param: string) {
    return this.params[param];
  }
  public setLocalStorage(param: string, val: any) {
    localStorage.setItem(param, JSON.stringify(val));
    this.ls[param] = val;
  }
  public getLocalStorage(param: string) {
    this.ls[param] = this.ls[param] || JSON.parse(localStorage.getItem(param));
    return (this.ls[param]);
  }
  public setSessionStorage(param: string, val: any) {
    sessionStorage.setItem(param, JSON.stringify(val));
    this.ss[param] = val;
  }
  public getSessionStorage(param: string) {
    this.ss[param] = this.ss[param] || JSON.parse(sessionStorage.getItem(param));
    return (this.ss[param]);
  }
}
