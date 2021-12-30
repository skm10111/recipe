// import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";



export class ShoppingListSerivce {
    ingredientaChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('car', 5),
        new Ingredient('Moter', 10)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredients: Ingredient) {
        this.ingredients.push(ingredients);
        this.ingredientaChanged.next(this.ingredients.slice())
    }
    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientaChanged.next(this.ingredients.slice());
    }
}