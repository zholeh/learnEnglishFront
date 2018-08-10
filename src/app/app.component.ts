import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalDataService } from './services/global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EAS';
  constructor(private translate: TranslateService, private data: GlobalDataService) {
    translate.setDefaultLang('en');
    this.translate.use(this.data.getLocalStorage('userLanguage'));
  }

  switchLanguage(language: string) {
    this.translate.use(language);
}
}
