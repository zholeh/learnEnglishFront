import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FlagsComponent } from '../../component/flags/flags.component';
import { GlobalDataService } from '../../services/global-data.service';
import { SocialUser, ErrorCodeServer } from '../../services/classes';
import { HttpService } from '../../services/http/http.module';

class User extends SocialUser {
  constructor(public localeKey, public password = '', public rePassword = '') {
    super();
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [HttpService]
})
export class LoginComponent implements OnInit {

  private user = new User(this.data.getLocalStorage('userLanguage'));

  constructor(private router: Router, private data: GlobalDataService,
    private httpService: HttpService) {
    const lang = <string>data.getLocalStorage('userLanguage');
    if (lang === '' || lang === null) {
      this.router.navigate(['chooseLanguage']);
    }
  }

  ngOnInit() {
  }

  private login() {
    this.httpService.postLogin(this.user);
  }

  private signUp() {
    this.router.navigate(['signUp']);
  }

  private forgot() {
    this.router.navigate(['signUp']);
  }

}
