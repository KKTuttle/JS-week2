import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { NewFoodComponent } from './new-food.component';

@Component ({
  selector: 'food-list',
  inputs:['foodList'],
  outputs: ['onFoodSelect'],
  // pipes:[],
  directives:[FoodComponent, NewFoodComponent],
  template:`
    <food-list *ngFor = '#currentFood of foodList'
      (click)= 'foodClicked(currentFood)'
      [class.selected]= 'currentFood === selectedFood'
      [food]= 'currentFood'>
    </food-list>
    <new-food (onSubmitNewFood)= 'createFood($event.day, $event.name, $event.log, $event.calories)'></new-food>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;

  constructor() {
    this.onFoodSelect = new EventEmitter;
  }
  createFood(day: string, name: string, log: string, calories: number): void {
    this.foodList.push (
      new Food(day, name, log, calories, this.foodList.length)
    );
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood =clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}
