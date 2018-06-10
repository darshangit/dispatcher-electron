import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ElectronService } from 'ngx-electron';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') 
  nav: NavController;

    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private electronService: ElectronService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      this.electronService.ipcRenderer.on('onMap', () => this.nav.setRoot(HomePage));
      this.electronService.ipcRenderer.on('onLocations', () => this.nav.setRoot('AddressListPage'));

    });
  }
}

