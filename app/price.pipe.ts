import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';


@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform{
  transform(input: Keg[], args){
    var desiredPrice = args[0];
    if(desiredPrice === "underFive"){
      return input.filter((keg) => {
        return keg.price <= 5;
      });
    } else if (desiredPrice === "underEight"){
      return input.filter((keg) => {
        return keg.price <= 8;
      });
    } else {
      return input;
    }
  }
}
