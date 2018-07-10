import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChooseLanguageComponent } from './forms/choose-language/choose-language.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { EmptyFormsComponent } from './forms/empty-forms/empty-forms.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
