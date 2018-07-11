import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-empty-forms',
  templateUrl: './empty-forms.component.html',
  styleUrls: ['./empty-forms.component.css']
})
export class EmptyFormsComponent implements OnInit {

  constructor(private router: Router, private data: GlobalDataService) {
    const lang: string = <string>data.getLocalStorage('userLanguage');
    const user: string = <string>data.getLocalStorage('user');
    if (lang === '' || lang === null) {
      this.router.navigate(['chooseLanguage']);
    } else if (user === '' || user === null) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

}
