import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent } from './food-list.component';

@Component ({
  selector: 'my-app',
  directives: [FoodListComponent],
  template:`
    <div class = 'container content'>
      <h1 class= 'top-header'>Personal Meal Tracker</h1>
      <food-list
        [foodList]= 'foods'
        (onFoodSelect)= 'foodWasSelected($event)'>
      </food-list>
    </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food('Monday', 'Chicken', 'delicious lunch', 290, 0),
      new Food('Tuesday', 'Hamburger', 'burger week, couldn\'t hold myself', 550, 1),
      new Food('Wednesday', 'Pizza', 'too grease', 900, 2),
      new Food('Thursday', 'Burrito', 'new favorite Mexican restaurant', 900, 3),
      new Food('Friday', 'Pub food', 'late dinner out', 750, 4)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log('parent', clickedFood);
  }
}
