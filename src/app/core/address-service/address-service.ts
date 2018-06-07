import { Injectable } from '@angular/core';
import { Address } from '../address';

@Injectable()
export class AddressServiceProvider {

  private addresses: Address[]=[];

  constructor() {
    console.log('Hello AddressServiceProvider Provider');

    this.addresses.push(new Address(1,'Libraray', 'Dash', '', 'Alton', 'NH', '03809', '', '43.4669801', '-71.2329917'));
    this.addresses.push(new Address(1,'Hanaford', 'asdasdasd asdas', '', 'Alton', 'NH', '03809', '', '43.4538906', '-71.21104919999999'));
    this.addresses.push(new Address(1,'McDonald', '100 Main St', '', 'Alton', 'NH', '03809', '', '43.4518239', '-71.2103229'));
  }

  fetchAll() : Promise<Address[]> {
    var p = Promise.resolve<Address[]>(this.addresses);
    return p;
  }

}
