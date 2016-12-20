import { Routes, RouterModule }   from '@angular/router';
import { MeasureAllComponent }    from "./all/measure-all.component";
import { MeasureItemComponent } from "./item/measure-item.component";


export const routes: Routes = [
    { path: 'measure', component: MeasureAllComponent, pathMatch: "full" },
    { path: 'measure/:id', component: MeasureItemComponent},
   
];

export const routing = RouterModule.forChild(routes);