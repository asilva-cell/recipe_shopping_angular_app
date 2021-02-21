import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe Name Test 1',
      'Recipe Description Test 1',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-fajitas-horizontal-jpg-1522721531.jpg?crop=0.668xw:1.00xh;0.0748xw,0&resize=768:*'
    ),
    new Recipe(
      'Recipe Name Test 2',
      'Recipe Description Test 2',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-fajitas-horizontal-jpg-1522721531.jpg?crop=0.668xw:1.00xh;0.0748xw,0&resize=768:*'
    ),
  ];

  getRecipes() {
    //   returns a new recipes array
    return this.recipes.slice();
  }
}
