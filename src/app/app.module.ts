import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddressServiceProvider } from './core/address-service/address-service';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from "@agm/core";
import { NgxElectronModule } from "ngx-electron";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    AgmCoreModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    NgxElectronModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AddressServiceProvider
  ]
})
export class AppModule {}
