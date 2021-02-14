import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe Name Test',
      'Recipe Description Test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-fajitas-horizontal-jpg-1522721531.jpg?crop=0.668xw:1.00xh;0.0748xw,0&resize=768:*'
    ),
    new Recipe(
      'Recipe Name Test',
      'Recipe Description Test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-fajitas-horizontal-jpg-1522721531.jpg?crop=0.668xw:1.00xh;0.0748xw,0&resize=768:*'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
