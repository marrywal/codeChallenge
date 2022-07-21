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
import { ChooseTwoComponent } from './components/choose-two/choose-two.component';
import { CryptographyComponent } from './components/cryptography/cryptography.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';
import { ChatComponent } from './components/chat/chat.component';
import { NgZorroModule } from './ng-zorro-module';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CountdownComponent,
    ChooseTwoComponent,
    CryptographyComponent,
    PasswordGeneratorComponent,
    ChatComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClipboardModule,
    NgZorroModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
