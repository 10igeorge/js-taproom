import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';


@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform{
  transform(input: Keg[], args){
    var desiredFilter = args[0];
    if(desiredFilter === "underFive"){
      return input.filter((keg) => {
        return keg.price <= 5;
      });
    } else if (desiredFilter === "strong"){
      return input.filter((keg) => {
        return keg.abv >= 6;
    });
  } else if (desiredFilter === "weak"){
      return input.filter((keg) => {
        return keg.abv < 6;
    });
    } else {
      return input;
    }
  }
}
