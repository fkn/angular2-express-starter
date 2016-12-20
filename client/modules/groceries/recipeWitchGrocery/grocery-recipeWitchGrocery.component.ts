import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {ActivatedRoute, Params} from "@angular/router";
import  {Location} from "@angular/common";

@Component({
    selector: "form",
    templateUrl: `client/modules/groceries/recipeWitchGrocery/grocery-recipeWitchGrocery.component.html`
})
export class GroceriesRecipeWitchGroceryComponent implements OnInit {
    private recipeArray: any[];

    constructor(private apiService: ApiService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    onRowClick(event) {
        console.log(event.target.outerText);
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.apiService
                .searchGroceryWithRecipe(params.id)
                .subscribe((data) => {
                    this.recipeArray = data;
                    console.log(data);
                });
        });
    }

    goBack(): void {
        this.location.back();
    }

}

