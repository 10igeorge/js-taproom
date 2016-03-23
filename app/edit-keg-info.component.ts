import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-info',
  inputs: ['keg'],
  template:`
    <div class="keg-form" *ngIf="keg">
      <h5>Edit keg info:</h5>
      <label class="edit-label">Brewery: </label>
      <input [(ngModel)]="keg.brewery" class="edit-form"/><br>
      <label class="edit-label">Name: </label>
      <input [(ngModel)]="keg.name" class="edit-form"/><br>
      <label class="edit-label">ABV: </label>
      <input [(ngModel)]="keg.abv" class="edit-form"/><br>
      <label class="edit-label">Price: </label>
      <input [(ngModel)]="keg.price" class="edit-form"/><br>
      <label class="edit-label">Pints remaining: </label>
      <input [(ngModel)]="keg.pints" class="edit-form"/><br>

    </div>
  `
})

export class EditKegInfoComponent {
  public keg: Keg;
}
