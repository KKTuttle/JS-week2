import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  inputs:['food'],
  template:`
    <h6>Day: {{ food.day}}</h6>
    <h6>Name: {{ food.name }}</h6>
    <h6>Log: {{ food.log }}</h6>
    <h6>Calories: {{ food.calories }}</h6>
    <hr>
  `

})

export class FoodComponent {
  public food: Food;
}
