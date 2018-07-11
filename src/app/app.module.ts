import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChooseLanguageComponent } from './forms/choose-language/choose-language.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { GlobalDataService } from './services/global-data.service';

import { EmptyFormsComponent } from './forms/empty-forms/empty-forms.component';
import { LoginComponent } from './forms/login/login.component';

function initGlobalParams(data: GlobalDataService) {
  data.setLocalStorage('userLanguage', data.getLocalStorage('userLanguage'));
  data.setParams('defaultLanguage', 'en');
}

@NgModule({
  declarations: [
    AppComponent,
    ChooseLanguageComponent,
    EmptyFormsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [GlobalDataService],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(private data: GlobalDataService) {
    initGlobalParams(data);
  }
}
