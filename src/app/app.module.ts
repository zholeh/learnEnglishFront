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
import { FlagsComponent } from './component/flags/flags.component';
import { StudyWordsFromSentenceComponent } from './forms/study-words-from-sentence/study-words-from-sentence.component';
import { MaterialModule } from './app.material';
import { SignUpComponent } from './forms/sign-up/sign-up.component';
import { SignUpModalDialogComponent } from './forms/server-error-modal-dialog/server-error-modal-dialog.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedInLoginProvider
} from 'angularx-social-login';



export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 0.4, threshold: 20, direction: 30 } // override default settings
  };
}

function initGlobalParams(data: GlobalDataService) {
  data.setLocalStorage('userLanguage', data.getLocalStorage('userLanguage'));
  data.setParams('defaultLanguage', 'en');
}

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('561602290896109')
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    ChooseLanguageComponent,
    EmptyFormsComponent,
    LoginComponent,
    TaskCardComponent,
    SentenceComponent,
    FlagsComponent,
    StudyWordsFromSentenceComponent,
    SignUpComponent,
    SignUpModalDialogComponent
  ],
  imports: [
    SocialLoginModule,
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
  providers: [
    GlobalDataService, EmitData,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  entryComponents: [SignUpModalDialogComponent],
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
