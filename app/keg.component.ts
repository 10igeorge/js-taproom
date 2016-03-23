import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div>
    <ul class="kegs">
      <li><span class="id">{{keg.id}}</span>
      <span class="text">{{keg.brewery}} {{keg.name}}</span></li>
    </ul>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
