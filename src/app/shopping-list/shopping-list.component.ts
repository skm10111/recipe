import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[] 
  private igChangeSub!: Subscription;
  constructor(private shoppingService: ShoppingListService,
    private loggingService: LoggingService ) { }
  
  ngOnInit(){
    this.ingredients = this.shoppingService.getIngredients();
    this.igChangeSub = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients;
      }
      );
      this.loggingService.printLog('Print by shopping-list')
  }

  onEditItem(index: number){
this.shoppingService.startedEditing.next(index)
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  //  onIngredientAdded(ingredient: Ingredient){
    //   // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      //   //   this.selectedRecipe = recipe;
      //   // })
      
      //  }
    }
    