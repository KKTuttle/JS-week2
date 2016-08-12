import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { NewFoodComponent } from './new-food.component';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { CaloriesPipe } from './calories.pipe';
import { DayPipe } from './day.pipe';

@Component ({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes:[CaloriesPipe, DayPipe],
  directives:[FoodComponent, NewFoodComponent, EditFoodDetailsComponent],
  template:`
    <select (change)='onChange($event.target.value)'>
      <option value = 'all'>All</option>
      <option value = 'over500'>Over 500 calories</option>
      <option value = 'under500'>Under 500 calories</option>
    </select>

    <select (change)='onChangeDay($event.target.value)'>
      <option value = 'all'>All</option>
      <option value = 'Monday'>Monday</option>
      <option value = 'Tuesday'>Tuesday</option>
      <option value = 'Wednesday'>Wednesday</option>
      <option value = 'Thursday'>Thursday</option>
      <option value = 'Friday'>Friday</option>
      <option value = 'Saturday'>Saturday</option>
      <option value = 'Sunday'>Sunday</option>
    </select>

    <food-display *ngFor= '#currentFood of foodList | calories:filterCalories | day:filterDay'
      (click)= 'foodClicked(currentFood)'
      [class.selected]= 'currentFood === selectedFood'
      [food]= 'currentFood'>
    </food-display>

    <new-food (onSubmitNewFood)= 'createFood($event.day, $event.name, $event.log, $event.calories)'></new-food>

    <edit-food-details *ngIf = 'selectedFood' [food] = 'selectedFood'
    (onSubmitEditFood) = 'editFoodDetails($event.day, $event.name, $event.log, $event.calories, selectedFood)'></edit-food-details>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterCalories: string = 'all';
  public filterDay: string = 'all';

  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  createFood(day: string, name: string, log: string, calories: number): void {
    this.foodList.push (
      new Food(day, name, log, calories, this.foodList.length)
    );
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  editFoodDetails(day: string, name: string, log: string, calories: number, thisFood: Food): void {
    thisFood.day = day;
    thisFood.name = name;
    thisFood.log = log;
    thisFood.calories = calories;
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
  onChangeDay(filterOption) {
    this.filterDay = filterOption;
  }
}
