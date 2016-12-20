import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ApiService} from "../../../service/api.service";
import {FormControl} from "@angular/forms";
import  {Location} from "@angular/common";

@Component({
    selector: "recipe-item",
    templateUrl: `client/modules/recipes/item/recipe-item.component.html`
})
export class RecipeItemComponent implements OnInit {
    private recipe: any = {};

    constructor(private apiService: ApiService,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location) {
    }

    deleteRecipe() {
        this.route.params.forEach((params: Params) => {
            this.apiService
                .deleteRecipe(params.id)
                .subscribe((data) => {
                    this.recipe = data;
                });
        });
        this.router.navigate(['/recipe']);
    }

    removeFromRecipe(id: number) {
        console.log();
    }

    goBack(): void {
        this.location.back();
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.apiService
                .getRecipe(params.id)
                .subscribe((data) => {
                    this.recipe = data;
                    console.log(data);
                });
        });
    }
}
