import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe ({
  name: 'calories',
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform = function(input: Food[], args) {
    var selectedCaloriesLevel = args[0];
    var output: Food[] = [];
    if (selectedCaloriesLevel === 'over500') {
      for (var i = 0; i <input.length; i++) {
        if(input[i].calories > 500 ) {
          output.push(input[i]);
        }
      }
    }else if (selectedCaloriesLevel === 'under500') {
      for (var i = 0; i <input.length; i++) {
        if(input[i].calories < 500 ) {
          output.push(input[i]);
        }
      }
    }else {
      for (var i = 0; i <input.length; i++) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
