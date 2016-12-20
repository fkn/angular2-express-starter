import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";
import { BrowserModule } from '@angular/platform-browser';

import { MeasureAllComponent } from "./all/measure-all.component";
import { MeasureItemComponent } from "./item/measure-item.component";
import { routing } from "./measure.routing";
import { SharedModule } from "../shared/shared.module";
 
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgSemanticModule,
        routing,
        SharedModule.forRoot()
    ],
    exports: [],
    declarations: [

        MeasureAllComponent,
        MeasureItemComponent
    ],
    bootstrap: [MeasureAllComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MeasureModule { }