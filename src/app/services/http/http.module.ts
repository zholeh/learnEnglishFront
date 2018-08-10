import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { GlobalDataService } from '../global-data.service';
import { SocialUser, ErrorCodeServer } from '../classes';
import { SignUpModalDialogComponent } from '../../forms/server-error-modal-dialog/server-error-modal-dialog.component';

class User extends SocialUser {
  constructor(public localeKey, public password = '', public rePassword = '') {
    super();
  }
}
@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private data: GlobalDataService, private dialog: MatDialog) { }
  private serverAddress = 'http://localhost:3000/';
  private openDialog(err: HttpErrorResponse) {
    const msg = [];
    if (err.error instanceof ProgressEvent) {
      msg.push({ 'param': 'HTTP error', 'msg': err.message });
    } else if (err.error instanceof Array) {
      err.error.reduce(
        (acc, cur) => {
          msg.push(cur);
          return msg;
        }, 0);
    } else {
      msg.push(err.error);
    }
    const dialogRef = this.dialog.open(SignUpModalDialogComponent, { data: msg }); // , err);
    dialogRef.afterClosed().subscribe(result => { });
  }

  public async postSignUp(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': user.authToken
      })
    };
    let res;
    try {
      res = await this.http.post(this.serverAddress + 'signup', user).toPromise();
    } catch (err) {
      this.openDialog(err);
    }

    return res;
  }

  public async postLogin(user) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': user.authToken
      })
    };

    let res;
    try {
      res = await this.http.post(this.serverAddress + 'login', user, httpOptions).toPromise();
    } catch (err) {
      this.openDialog(err);
    }

    return res;
  }
}
