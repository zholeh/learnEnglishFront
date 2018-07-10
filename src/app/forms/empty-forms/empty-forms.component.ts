import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-forms',
  templateUrl: './empty-forms.component.html',
  styleUrls: ['./empty-forms.component.css']
})
export class EmptyFormsComponent implements OnInit {

  constructor(private router: Router) {
    const lang = localStorage.getItem('Language');
    if (lang === '' || lang === null) {
      this.router.navigate(['chooseLanguage']);
    } else if (lang === 'ru') {
      console.log('');
    }
  }

  ngOnInit() {
  }

}
