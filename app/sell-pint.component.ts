import {Component} from 'angular2/core';
import { Keg } from './keg.model';


@Component({
  selector: 'sell-pint',
  template:`
    <button id="sell" class="btn btn-primary btn-xs" type="button">Sell</button>
  `
})

export class SellPintComponent {
  sellPint(){

  }
}
