import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private data: GlobalDataService) {
    const lang = <string>data.getLocalStorage('userLanguage');
    if (lang === '' || lang === null) {
      this.router.navigate(['chooseLanguage']);
    }
   }

  ngOnInit() {
  }

}
