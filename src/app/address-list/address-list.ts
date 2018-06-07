import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Address } from '../core/address';
import { AddressServiceProvider } from '../core/address-service/address-service';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-address-list',
  templateUrl: 'address-list.html',
})
export class AddressListPage {

  public addresses: Promise<Address[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private addressService: AddressServiceProvider) {
  }

  ionViewDidLoad() {
    this.addresses = this.addressService.fetchAll()
    console.log('ionViewDidLoad AddressListPage');
  }

  selectLocation(address: Address) {
    this.navCtrl.setRoot(HomePage, {address});
  }

}
