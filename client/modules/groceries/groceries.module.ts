import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpModule} from "@angular/http";
import {NgSemanticModule} from "ng-semantic";
import {BrowserModule} from '@angular/platform-browser';

import {GroceriesAllComponent} from "./all/groceries-all.component";
import {GroceriesItemComponent} from './item/groceries-item.component';
import  {GroceriesRecipeWitchGroceryComponent} from "./recipeWitchGrocery/grocery-recipeWitchGrocery.component"
import {routing} from "./groceries.routing";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgSemanticModule,
        routing,
        SharedModule.forRoot()
    ],
    exports: [],
    declarations: [GroceriesAllComponent, GroceriesItemComponent, GroceriesRecipeWitchGroceryComponent],
    bootstrap: [GroceriesAllComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class GroceriesModule {
}