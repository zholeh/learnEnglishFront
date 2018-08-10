import { Component, OnInit, Inject } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { SocialUser, ErrorCodeServer } from '../../services/classes';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { HttpService } from '../../services/http/http.module';
import { SignUpModalDialogComponent } from '../server-error-modal-dialog/server-error-modal-dialog.component';
// import { ErrorsCodeServer } from '../../services/classes';
// import { IErrorCodeServer } from '../../services/interfaces';

class User extends SocialUser {
  constructor(public localeKey, public password = '', public rePassword = '') {
    super();
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [HttpService]
})
export class SignUpComponent implements OnInit {

  private user = new User(this.data.getLocalStorage('userLanguage'));
  constructor(private data: GlobalDataService, private authService: AuthService,
    private httpService: HttpService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {

      Object.assign(this.user, user);
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

    const user = this.httpService.postSignUp(this.user);
  }
}

