import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent } from './food-list.component';

@Component ({
  selector: 'my-app',
  directives: [FoodListComponent],
  template:`
    <div class = 'container'>
      <h1>Personal meal tracker</h1>
      <food-list
        [foodList] = 'foods'
        (onFoodSelect) = 'foodWasSelected($event)'>
      </food-list>

    </div>
  `
})




export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food('Monday', 'Chicken', 'delicious lunch', 290),
      new Food('Tuesday', 'Hamburger', 'burger week, couldn\'t hold myself', 550),
      new Food('Wednesday', 'Pizza', 'too grease', 900),
      new Food('Thurday', 'Pizza', 'too greasy', 900),
      new Food('Friday', '', 'late dinner out', 750)
    ]
  }


}
