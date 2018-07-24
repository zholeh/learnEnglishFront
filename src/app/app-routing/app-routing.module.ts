import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChooseLanguageComponent } from '../forms/choose-language/choose-language.component';
import { EmptyFormsComponent } from '../forms/empty-forms/empty-forms.component';
import { StudyWordsFromSentenceComponent } from '../forms/study-words-from-sentence/study-words-from-sentence.component';
import { LoginComponent } from '../forms/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyFormsComponent,
    // component: StudyWordsFromSentenceComponent,
  },
  {
    path: 'chooseLanguage',
    component: ChooseLanguageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
