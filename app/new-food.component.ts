import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';


@Component ({
  selector: 'new-food',
  outputs:['onSubmitNewFood'],
  template:`

    <div class = 'food-form col-sm-10'>
      <h3>Add a new log to you meal tracker</h3>
      <form class = 'form-group'>
        <label for = 'day'>Day</label>
        <input class ='form-control' placeholder = 'day' #newDay>

        <label for = 'name'>Name</label>
        <input class ='form-control' placeholder = 'name' #newName>

        <label for = 'log'>Log</label>
        <input class ='form-control' placeholder = 'log' #newLog>

        <label for = 'calories'>Calories</label>
        <input class ='form-control' placeholder = 'calories' #newCalories>

        <button (click) = 'addFood(newDay, newName, newLog, newCalories)'>Add</button>
      </form>
    </div>

  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Object>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter;
  }
  addFood(userDay: HTMLInputElement, userName: HTMLInputElement, userLog: HTMLTextAreaElement, userCalories: HTMLInputElement) {
    this.onSubmitNewFood.emit({
      day: userDay.value,
      name: userName.value,
      log: userLog.value,
      calories: userCalories.value
    });
    userDay.value = '';
    userName.value = '';
    userLog.value = '';
    userCalories.value = '';
  }
}
