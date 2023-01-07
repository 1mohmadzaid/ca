import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzMessageModule } from 'ng-zorro-antd/message';


registerLocaleData(en);
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyB3qcy_pz4Tvr_PIgq4jXVBn_AjLHfYWsk',
      authDomain: 'cayasar-6a7e3.firebaseapp.com',
      projectId: 'cayasar-6a7e3',
      storageBucket: 'cayasar-6a7e3.appspot.com',
      messagingSenderId: '100470706290',
      appId: '1:100470706290:web:345b079b3b62817ba532eb',
      measurementId: 'G-91KT783QX8',
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMessageModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
