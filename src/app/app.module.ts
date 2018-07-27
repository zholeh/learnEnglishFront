import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { GlobalDataService, EmitData } from './services/global-data.service';
import { ChooseLanguageComponent } from './forms/choose-language/choose-language.component';
import { EmptyFormsComponent } from './forms/empty-forms/empty-forms.component';
import { LoginComponent } from './forms/login/login.component';
import { TaskCardComponent } from './component/task-card/task-card.component';
import { SentenceComponent } from './component/sentence/sentence.component';
import { StudyWordsFromSentenceComponent } from './forms/study-words-from-sentence/study-words-from-sentence.component';
import { MaterialModule } from './app.material';
import { SignUpComponent } from './forms/sign-up/sign-up.component';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 0.4, threshold: 20, direction: 30 } // override default settings
  };
}

function initGlobalParams(data: GlobalDataService) {
  data.setLocalStorage('userLanguage', data.getLocalStorage('userLanguage'));
  data.setParams('defaultLanguage', 'en');
}

@NgModule({
  declarations: [
    AppComponent,
    ChooseLanguageComponent,
    EmptyFormsComponent,
    LoginComponent,
    TaskCardComponent,
    SentenceComponent,
    StudyWordsFromSentenceComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    [TooltipModule.forRoot()],
    [
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
        }
      })
    ],
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [GlobalDataService, EmitData, {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  }],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(private data: GlobalDataService) {
    initGlobalParams(data);
  }
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
