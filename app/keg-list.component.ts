import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
// import { KegInfoComponent } from './keg-info.component';
import {EditKegInfoComponent} from './edit-keg-info.component';
import {NewKegComponent} from './new-keg.component';
import {SellPintComponent} from './sell-pint.component';
import {PricePipe} from './price.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [PricePipe],
  directives: [KegComponent, EditKegInfoComponent, NewKegComponent, SellPintComponent],
  template:`
    <div class="container">
      <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">All Kegs</option>
        <option value="underFive">Under $5</option>
        <option value="strong">High ABV</option>
        <option value="weak">Low ABV</option>
      </select>
      <keg-display *ngFor="#currentKeg of kegList | price: filterPrice" (click)="kegClicked(currentKeg)" [class.selected]="currentKeg === selectedKeg" [keg]="currentKeg">
      </keg-display>
      <edit-keg-info [keg]="selectedKeg"></edit-keg-info><br>
      <sell-pint *ngIf="selectedKeg"></sell-pint><br><br>
      <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
    </div>
  `
})

// <keg-info [keg]="selectedKeg"></keg-info>

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterPrice: string = "all";
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void{
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(kegInfo: any): void{
    this.kegList.push(
      new Keg(this.kegList.length, kegInfo[0], kegInfo[1], kegInfo[2], kegInfo[3])
    );
  }
  onChange(filterOption){
    this.filterPrice = filterOption;
  }
  //
  // onSelect(keg: Keg){
  //   this.selectedKeg = keg;
  // }
}
