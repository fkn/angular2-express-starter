import { Routes, RouterModule } from '@angular/router';
import { GroceriesAllComponent } from "./all/groceries-all.component";
import { GroceriesItemComponent } from './item/groceries-item.component';

export const routes: Routes = [
    { path: 'grocery', component: GroceriesAllComponent, pathMatch: "full" },
    { path: 'grocery/:id', component: GroceriesItemComponent }
];

export const routing = RouterModule.forChild(routes);