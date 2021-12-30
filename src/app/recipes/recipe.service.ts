import { Injectable } from "@angular/core";
// import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListSerivce } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
  // recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Crunchy and hot Samosa', 'A super-tasty - just ', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('Big Fat Burger', 'What else you need to say?', 'https://assets.epicurious.com/photos/5d951b92c97e700008ce027e/6:4/w_3672,h_2448,c_limit/HLY_Lentil_Burger_Horizontal.jpg', [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];
  constructor(private shoppingService: ShoppingListSerivce) { }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes.slice()[index];
  }
  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.shoppingService.addIngredients(ingredient);
  }
}