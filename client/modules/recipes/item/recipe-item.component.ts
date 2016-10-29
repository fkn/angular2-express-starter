import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ApiService } from "../../../service/api.service";

@Component({
    selector: "form",
    templateUrl: `client/modules/recipes/item/recipe-item.component.html`
})
export class RecipeItemComponent implements OnInit {
    private recipe: any = {};

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.forEach( (params: Params) => {
            this.apiService
                .getRecipe(params.id)
                .subscribe( (data) => { this.recipe = data; } );
        });
    }
}
