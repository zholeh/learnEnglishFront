import { Component, OnInit, Inject } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { SocialUser, ErrorCodeServer } from '../../services/classes';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { SignUpModalDialogComponent } from './sign-up-modal-dialog/sign-up-modal-dialog.component';
import { ErrorsCodeServer } from '../../services/classes';
import { IErrorCodeServer } from '../../services/interfaces';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  user: SocialUser;
  private errorDescription = '';

  constructor(private data: GlobalDataService, private authService: AuthService, private http: HttpClient,
    public dialog: MatDialog) {
  }

  openDialog(text) {
    const dialogRef = this.dialog.open(SignUpModalDialogComponent, { data: text });

    dialogRef.afterClosed().subscribe(result => { });
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }

  signUpWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signUpWithFacebook() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut() {
    this.authService.signOut();
  }
  signUpWithEmail() {

    const user = {
      email: 'no1@email.com',
      password: '1234',
      confirmPassword: '1234'
    };
    const res = this.http.post(`http://localhost:3000/signup`, user).subscribe(
      (data: any) => {
      },
      (err) => {
        const error = <IErrorCodeServer>err.error;
        const errCode = this.data.getErrorByCode('500.' + error.statusCode);
        if (!!error && !!errCode) {
          this.openDialog(
            this.data.translateParam('ServerErrors.' + errCode.description)
          );
        } else if (!!error.description) {
          console.log(error);
          this.openDialog(error.description);
        } else {
          console.log(error);
          this.openDialog(error);
        }
      }
    );
  }
}

