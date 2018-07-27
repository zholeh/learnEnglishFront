import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private data: GlobalDataService) {
    // const lang = this.data.getLocalStorage('userLanguage');
    // this.data.changeLanguage(lang);
  }

  ngOnInit() {
  }

}
