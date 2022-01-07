import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, throttleTime } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  recipes!: Recipe[];
  private userSub!: Subscription;
  isAuthenticated = false;

  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }
  // @Output() featureSelected = new EventEmitter<string>();
  // onSelect(feature: string) {
  //     this.featureSelected.emit(feature);
  // }
  onSaveData() {
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
    if (this.recipes.length >= 1) {
      this.dataStorageService.storeRecipes();
    } else {
      alert('Nothing to Save');
    }
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  onLogout(){
    this.authService.logout();
  }
}
