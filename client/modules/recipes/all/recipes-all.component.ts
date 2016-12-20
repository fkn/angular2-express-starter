import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../../service/api.service";
import { FormControl } from "@angular/forms";

@Component({
    selector: "recipes-all",
    templateUrl: `client/modules/recipes/all/recipes-all.component.html`
})
export class RecipesAllComponent implements OnInit {
    private recipesArray: any[];
    constructor(
        private apiService: ApiService,
        private router: Router) { }

    updateRecipies() {
        this.apiService
            .getRecipes()
            .subscribe((data) => { this.recipesArray = data; });
    }

    showRecipe(id: number) {
        this.router.navigate(['/recipe', id]);
    }

    createRecipe(name: String, description: String) {
        this.apiService
            .addRecipe(name, description)
            .subscribe(recipe => this.recipesArray.push(recipe));
    }

    deleteRecipe(id: number) {
        this.apiService
            .deleteRecipe(id)
            .subscribe(recipe => this.deleteArrayFilter(this.recipesArray, id));
    }

    deleteArrayFilter(arr: any[], id: number) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id == id)
                arr.splice(i, 1);
        }
        return arr;
    }

    searchRecipes(term: string) {
        if (term.length == 0) {
            this.ngOnInit();
        } else {
            this.apiService
                .searchRecipes(term)
                .subscribe((data => this.recipesArray = data));
        }
    }

    ngOnInit() {
        this.updateRecipies();

    }
}
