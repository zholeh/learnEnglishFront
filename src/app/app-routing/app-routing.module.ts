import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChooseLanguageComponent } from '../forms/choose-language/choose-language.component';
import { EmptyFormsComponent } from '../forms/empty-forms/empty-forms.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyFormsComponent,
  },
  {
    path: 'chooseLanguage',
    component: ChooseLanguageComponent,
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
