import { Component } from 'angular2/core';
import { Keg } from './keg.model';

var KEGS: Keg[] = [
  { "id": 1, "pints": 124, "brewery": "Lagunitas", "name": "IPA", "abv": 6.2, "price": 4.99 },
  { "id": 2, "pints": 124, "brewery": "Ballast Point", "name": "Grapefruit Sculpin", "abv": 7, "price": 5.99 },
  { "id": 3, "pints": 124, "brewery": "Cascade", "name": "Sang Noir", "abv": 9.8, "price": 6.99 },
];

@Component({
  selector: 'my-app',
  template:`
    <div class="container">
      <h1>JavaScript Taproom</h1>
      <h3>Current Kegs:</h3>
      <ul class="kegs">
        <li *ngFor="#keg of kegs" (click)="onSelect(keg)">
          <span class="id">{{keg.id}}</span>
          {{keg.brewery}} {{keg.name}}
        </li><br>
      </ul>
      <div *ngIf="selectedKeg">
        <h4>{{selectedKeg.brewery}} {{selectedKeg.name}}</h4>
        <p>{{selectedKeg.abv}}%</p>
        <p>Price: $ {{selectedKeg.price}}</p>
        <p>Pints remaining: {{selectedKeg.pints}}</p>
      </div>
    </div>
  `
})



export class AppComponent {
  public kegs = KEGS;
  onSelect(keg: Keg){
    this.selectedKeg = keg;
  }
}


// public kegs: Keg[];
// constructor(){
//   this.kegs = [
//     new Keg("Lagunitas", "IPA", 6.2, 4.99),
//     new Keg("Ballast Point", "Grapefruit Sculpin", 7, 5.99),
//     new Keg("Cascade", "Sang Noir", 9.8, 6.99),
//   ];
// }
