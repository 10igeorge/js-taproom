import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import {KegListComponent} from './keg-list.component';


@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template:`
    <div class="container">
      <h1>JavaScript Taproom</h1>
      <h3>Current Kegs:</h3>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
        </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg(0, "Ballast Point", "Grapefruit Sculpin", 7.0, 6),
      new Keg(1, "Lagunitas", "IPA", 6.2, 5),
      new Keg(2, "Cascade", "Sang Noir", 9.8, 7),
      new Keg(3, "Breakside", "Passionfruit Sour Ale", 4.0, 4),
      new Keg(4, "Oakshire", "Amber", 5.4, 5)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void{
    console.log("heya");
  }
  // onSelect(keg: Keg){
  //   this.selectedKeg = keg;
  // }
}


// public kegs: Keg[];
// constructor(){
//   this.kegs = [
//     new Keg("Lagunitas", "IPA", 6.2, 4.99),
//     new Keg("Ballast Point", "Grapefruit Sculpin", 7, 5.99),
//     new Keg("Cascade", "Sang Noir", 9.8, 6.99),
//   ];
// }
