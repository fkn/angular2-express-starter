import { Routes, RouterModule } from '@angular/router';
import { GroceriesAllComponent } from "./all/groceries-all.component";
import { GroceriesItemComponent } from './item/groceries-item.component';
import  { GroceriesRecipeWitchGroceryComponent } from  "./recipeWitchGrocery/grocery-recipeWitchGrocery.component";

export const routes: Routes = [
    { path: 'grocery', component: GroceriesAllComponent, pathMatch: "full" },
    { path: 'grocery/recipe/:id', component: GroceriesRecipeWitchGroceryComponent},
    { path: 'grocery/:id', component: GroceriesItemComponent },
];

export const routing = RouterModule.forChild(routes);