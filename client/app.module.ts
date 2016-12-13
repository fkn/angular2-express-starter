import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth } from "angular2-jwt";
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";

import { AppComponent }    from './app.component';
import { routing }         from "./routes";

import { ContactModule }   from "./modules/contact/contact.module";
import { HomeModule }      from "./modules/home/home.module";
import { GroceriesModule } from "./modules/groceries/groceries.module";
import { RecipesModule }   from "./modules/recipes/recipes.module";
import { MeasureModule }   from "./modules/measure/measure.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgSemanticModule,
        ContactModule,
        HomeModule,
        GroceriesModule,
        RecipesModule,
        MeasureModule,
        
        routing
    ],
    providers: [
        provideAuth({
            globalHeaders: [{"Content-type": "application/json"}],
            newJwtError: true,
            noTokenScheme: true
        })
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
