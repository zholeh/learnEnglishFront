import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.component.html',
  styleUrls: ['./choose-language.component.scss']
})
export class ChooseLanguageComponent implements OnInit {

  constructor(private router: Router, private data: GlobalDataService) { }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    this.data.setLocalStorage('userLanguage', 'en');
    this.router.navigate(['login']);
  }
}
