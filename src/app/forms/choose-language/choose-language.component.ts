import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.component.html',
  styleUrls: ['./choose-language.component.css']
})
export class ChooseLanguageComponent implements OnInit {

  constructor(private router: Router, private data: GlobalDataService) { }

  ngOnInit() {
  }

  private changeLanguage(lang: string) {
    this.data.setLocalStorage('userLanguage', 'en');
    this.router.navigate(['login']);
  }
  private clickEnglish() {
    this.changeLanguage('en');
  }
  private clickUkrainian() {
    this.changeLanguage('ua');
  }
  private clickRussian() {
    this.changeLanguage('ru');
  }
}
