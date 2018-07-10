import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChooseLanguageComponent } from './forms/choose-language/choose-language.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { EmptyFormsComponent } from './forms/empty-forms/empty-forms.component';
import { GlobalDataService } from './services/global-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ChooseLanguageComponent,
    EmptyFormsComponent
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
    data.setParams('Language', localStorage.getItem('Language') || '');
  }
 }
