import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template:`
    <div class="container">
      <h1>JavaScript Taproom</h1>
      <h4>Current Kegs:</h4>
      <ul>
        <li *ngFor="#keg of kegs"
          [class.selected]="keg === selectedKeg"
      </ul>
    </div
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Lagunitas", "IPA", 6.2, 4.99),
      new Keg("Ballast Point Grapefruit Sculpin", 7, 5.99),
      new Keg("Cascade Sang Noir", 9.8, 6.99),
    ];
  }
}
