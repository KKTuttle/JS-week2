import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe ({
  name: 'day',
  pure: false
})

export class DayPipe implements PipeTransform {
  transform = function(input: Food[], args) {
    var selectedDay = args[0];
    var output: Food[] = [];
    if (selectedDay === 'Monday') {
      for (var i = 0; i <input.length; i++) {
        if(input[i].day === 'Monday' || input[i].day === 'monday' ) {
          output.push(input[i]);
        }
      }
    }else if (selectedDay === 'Tuesday') {
      for (var i = 0; i <input.length; i++) {
        if(input[i].day === 'Tuesday' || input[i].day === 'tuesday' ) {
          output.push(input[i]);
        }
      }
    }else if (selectedDay === 'Wednesday') {
      for (var i = 0; i <input.length; i++) {
        if(input[i].day === 'Wednesday' || input[i].day === 'wednesday' ) {
          output.push(input[i]);
        }
      }
    }else if (selectedDay === 'Thursday') {
      for (var i = 0; i <input.length; i++) {
        if(input[i].day === 'Thursday' || input[i].day === 'thursday' ) {
          output.push(input[i]);
        }
      }
    }else if (selectedDay === 'Friday') {
      for (var i = 0; i <input.length; i++) {
        if(input[i].day === 'Friday' || input[i].day === 'friday' ) {
          output.push(input[i]);
        }
      }
    }else if (selectedDay === 'Saturday') {
      for (var i = 0; i <input.length; i++) {
        if(input[i].day === 'Saturday' || input[i].day === 'saturday' ) {
          output.push(input[i]);
        }
      }
    }else if (selectedDay === 'Sunday') {
      for (var i = 0; i <input.length; i++) {
        if(input[i].day === 'Sunday' || input[i].day === 'sunday' ) {
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
