import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../service/api.service";
import { Router } from "@angular/router";

@Component({
    selector: "form",
    templateUrl: `client/modules/groceries/all/groceries-all.component.html`
})
export class GroceriesAllComponent implements OnInit {
    private groceriesArray: any[];

    constructor(
        private apiService: ApiService,
        private router: Router) {}

    showGrocery(id: number) {
        this.router.navigate(['/grocery', id]);
    }


    ngOnInit() {
        this.apiService
            .getGroceries()
            .subscribe( (data) => { this.groceriesArray = data; } );
    }
}
