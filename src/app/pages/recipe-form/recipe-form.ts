import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import * as RecipeFormActions from '../../store/recipe-form.actions';
import * as fromRecipeForm from '../../store/recipe-form.selectors';

import { RecipeForm1 } from "../../components/recipe-form/recipe-form-1/recipe-form-1";
import { AddIngredientsToRecipe } from "../../components/recipe-form/add-ingredients-to-recipe/add-ingredients-to-recipe";
import { AddStepsToRecipe } from "../../components/recipe-form/add-steps-to-recipe/add-steps-to-recipe";

@Component({
  selector: 'app-recipe-form',
  imports: [RecipeForm1, AddIngredientsToRecipe, AddStepsToRecipe],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.scss',
})
export class RecipeForm {


  constructor(private store: Store) {
  }

  onSubmit() {
    this.store.dispatch(RecipeFormActions.submitRecipe());

    // Récupérer toutes les données
    this.store.select(fromRecipeForm.selectCompleteRecipe).subscribe(recipe => {
      console.log('Recette complète:', recipe);
      
      // Préparer les données pour l'API
      const formData = new FormData();
      formData.append('name', recipe.recette.name || '');
      
      
      //formData.append('image', recipe.recette.imageUrl);
      
      
      formData.append('ingredients', JSON.stringify(recipe.ingredients));
      formData.append('steps', JSON.stringify(recipe.steps));
      
      // TODO: Appeler votre service API
      // this.recipeService.createRecipe(formData).subscribe(...)
      
    }).unsubscribe();
  }

  


}
