import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { KegInfoComponent } from './keg-info.component';
import {EditKegInfoComponent} from './edit-keg-info.component';
import {NewKegComponent} from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegInfoComponent, NewKegComponent],
  template:`
    <div class="container">
        <keg-display *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)" [class.selected]="currentKeg === selectedKeg" [keg]="currentKeg">
        </keg-display>
      <keg-info [keg]="selectedKeg"></keg-info><br><br>
      <edit-keg-info [keg]="selectedKeg"></edit-keg-info><br><br>
      <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
    </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
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
  //
  // onSelect(keg: Keg){
  //   this.selectedKeg = keg;
  // }
}
