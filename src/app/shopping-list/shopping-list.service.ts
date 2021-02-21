import { Ingredient } from '../shared/ingredient.model';

import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient>();
  
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Tomatoes', 5),
    new Ingredient('Potatoes', 2),
  ];

  getIngredients() {
    //   returns a new ingredients array
    return this.ingredients.slice();
  }
}
