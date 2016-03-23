import { Component } from 'angular2/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-info',
  template:`
    <div *ngIf="keg">
      <h4>{{keg.brewery}} {{keg.name}}</h4>
      <p>{{keg.abv}}%</p>
      <p>Price: $ {{keg.price}}</p>
      <p>Pints remaining: {{keg.pints}}</p>
    </div>
  `,
  inputs: ['keg']
})

export class KegInfoComponent{
  keg: Keg;
}
