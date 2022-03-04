import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroModule } from './app-ng-zorro.module';
import { ChooseTwoComponent } from './components/choose-two/choose-two.component';
import { CryptographyComponent } from './components/cryptography/cryptography.component';
import {ClipboardModule} from '@angular/cdk/clipboard';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CountdownComponent,
    ChooseTwoComponent,
    CryptographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroModule,
    ClipboardModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
