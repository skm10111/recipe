import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    recipes!: Recipe[];
 

    constructor(private dataStorageService: DataStorageService,
        private recipeService: RecipeService) {}
    // @Output() featureSelected = new EventEmitter<string>();
    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }
    onSaveData(){
        this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
            this.recipes = recipes;
          });
          this.recipes = this.recipeService.getRecipes();
        if( this.recipes.length >= 1){
            this.dataStorageService.storeRecipes();

        }
        else{
            alert('Nothing to Save');
        }
        }

    

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }
}