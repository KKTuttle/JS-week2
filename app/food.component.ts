import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  inputs:['food'],
  template:`

  <div class = 'col-sm-6'>
    <h2 class = 'food-name'>Name: {{ food.name }}</h2>
    <h3>Day: {{ food.day }}</h3>
    <h3>Log: {{ food.log }}</h3>
    <h3>Calories: {{ food.calories }}</h3>
    <hr>
  </div>
  `
})

export class FoodComponent {
  public food: Food;
}
