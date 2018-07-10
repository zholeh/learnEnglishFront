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
    const lang = data.getLocalStorage('Language');
    if (lang === '' || lang === null || lang === undefined) {
      this.router.navigate(['chooseLanguage']);
    } else if (lang === 'ru') {
      console.log('');
    }
  }

  ngOnInit() {
  }

}
