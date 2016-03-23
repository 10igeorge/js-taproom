import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template:`
    <div class='keg-form'>
      <h4>Add new keg:</h4>
      <input placeholder="Brewery" #newBrewery><br>
      <input placeholder="Name" #newName><br>
      <input placeholder="ABV" #newABV><br>
      <input placeholder="Price" #newPrice><br><br>
      <button (click)="addKeg(newBrewery, newName, newABV, newPrice)" class="btn btn-warning">Tap!</button>
    </div>
  `
})

export class NewKegComponent{
  public onSubmitNewKeg: EventEmitter<any>;

  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newBrewery: HTMLInputElement, newName: HTMLInputElement, newABV: HTMLInputElement, newPrice: HTMLInputElement){
    var kegInfo: any = [newBrewery.value, newName.value, newABV.value, newPrice.value];
    this.onSubmitNewKeg.emit(kegInfo);
    newBrewery.value = "";
    newName.value = "";
    newABV.value = "";
    newPrice.value = "";
  }
}
