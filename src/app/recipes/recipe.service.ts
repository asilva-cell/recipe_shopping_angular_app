import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe Name Test 1',
      'Recipe Description Test 1',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-fajitas-horizontal-jpg-1522721531.jpg?crop=0.668xw:1.00xh;0.0748xw,0&resize=768:*',
      [new Ingredient('Red Pepper', 1), new Ingredient('Carrot', 2)]
    ),
    new Recipe(
      'Recipe Name Test 2',
      'Recipe Description Test 2',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-fajitas-horizontal-jpg-1522721531.jpg?crop=0.668xw:1.00xh;0.0748xw,0&resize=768:*',
      [new Ingredient('Green Pepper', 1), new Ingredient('Yam', 3)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    //   returns a new recipes array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
