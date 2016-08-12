import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food-details',
  inputs: ['food'],
  outputs: ['onSubmitEditFood'],
  template:`
  <div class = 'edit-food-form'>
    <h3>Edit {{ food.name }}</h3>
      <label for = 'day'>Day</label>
      <input [ngModel]="food.day" #newDay>

      <label for = 'name'>Name</label>
      <input [ngModel]="food.name" #newName>

      <label for = 'log'>Log</label>
      <input [ngModel]="food.log" #newLog>

      <label for = 'calories'>Calories</label>
      <input [ngModel]="food.calories" #newCalories>

      <button (click) = 'editFood(newDay, newName, newLog, newCalories)'>Add</button>
  </div>
  `

})
export class EditFoodDetailsComponent {
  public food: Food;
  public onSubmitEditFood: EventEmitter<Object>
  constructor() {
    this.onSubmitEditFood = new EventEmitter();
  }
  editFood(userDay: HTMLInputElement, userName: HTMLInputElement, userLog: HTMLInputElement, userCalories: HTMLInputElement) {
    this.onSubmitEditFood.emit({
      day: userDay.value,
      name: userName.value,
      log: userLog.value,
      calories: userCalories.value
    });
  }
}
