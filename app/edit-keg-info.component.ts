import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-info',
  inputs: ['keg'],
  template:`
    <div class="keg-form" *ngIf="keg">
      <h5>Edit keg info:</h5>
      <label>Brewery: </label>
      <input [(ngModel)]="keg.brewery" class="keg-form"/><br>
      <label>Name: </label>
      <input [(ngModel)]="keg.name" class="keg-form"/><br>
      <label>ABV: </label>
      <input [(ngModel)]="keg.abv" class="keg-form"/><br>
      <label>Price: </label>
      <input [(ngModel)]="keg.price" class="keg-form"/><br>

    </div>
  `
})

export class EditKegInfoComponent {
  public keg: Keg;
}
