import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";
import { BrowserModule } from '@angular/platform-browser';

import { CommentComponent } from "../../components/comment/com.component";
import { LikeComponent } from "../../components/like/like.component";
import { RecipesAllComponent } from "./all/recipes-all.component";
import { RecipeItemComponent } from './item/recipe-item.component';
import { routing } from "./recipes.routing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgSemanticModule,
        routing,
        SharedModule.forRoot()
    ],
    exports: [  ],
    declarations: [
        CommentComponent,
        RecipesAllComponent,
        RecipeItemComponent,
        LikeComponent 
    ],
    bootstrap:    [ RecipesAllComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class RecipesModule { }