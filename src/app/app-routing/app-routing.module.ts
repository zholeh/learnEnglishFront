import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChooseLanguageComponent } from '../forms/choose-language/choose-language.component';
import { EmptyFormsComponent } from '../forms/empty-forms/empty-forms.component';
import { StudyWordsFromSentenceComponent } from '../forms/study-words-from-sentence/study-words-from-sentence.component';
import { LoginComponent } from '../forms/login/login.component';
import { SignUpComponent } from '../forms/sign-up/sign-up.component';

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
  {
    path: 'signUp',
    component: SignUpComponent,
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
