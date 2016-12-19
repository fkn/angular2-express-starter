import {Router, Response, Request, NextFunction} from "express";
import {onError} from "@angular/upgrade/src/util";
import {logError} from "typings/dist/support/cli";
import {controlNameBinding} from "@angular/forms/src/directives/reactive_directives/form_control_name";

const groceryApi: Router = Router();

const db = require("../../../../models");

groceryApi.get("/", (request: Request, response: Response) => {
    db.GroceryItem
        .findAll({})
        .then(items => response.send(items));
});

groceryApi.get("/:id", (request: Request, response: Response) => {

    db.GroceryItem
        .findById(request.params.id)
        .then(item => response.send(item))

});

groceryApi.get("/remove/:id", (request: Request, response: Response) => {
    db.GroceryItem
        .destroy({
            where: {id: request.params.id}
        }).then(()=>response.sendStatus(200));
});

groceryApi.post("/update/:id", (request: Request, response: Response) => {
    db.GroceryItem
        .update({
            name: request.body.groceries.name,
            calories: request.body.groceries.calories,
            fat: request.body.groceries.fat,
            protein: request.body.groceries.protein,
            carbohydrate: request.body.groceries.carbohydrate,
            acid: request.body.groceries.acid,
            polyols: request.body.groceries.polyols,
            fibre: request.body.groceries.fibre,
            ethanol: request.body.groceries.ethanol
        }, {
            where: {
                id: request.params.id
            }
        }).then(()=>response.sendStatus(200));
});

groceryApi.post("/create", (request: Request, response: Response) => {
    db.Image
        .create().then(imageItem => {
        db.GroceryItem
            .create({
                name: request.body.groceries.name,
                calories: request.body.groceries.calories,
                fat: request.body.groceries.fat,
                protein: request.body.groceries.protein,
                carbohydrate: request.body.groceries.carbohydrate,
                acid: request.body.groceries.acid,
                polyols: request.body.groceries.polyols,
                fibre: request.body.groceries.fibre,
                ethanol: request.body.groceries.ethanol,
                ImageId: imageItem.id
            }).then(item =>response.send(item));
    });
});

groceryApi.get("/search/:term", (request: Request, response: Response) => {
    db.GroceryItem.findAll({
        attributes: ['id', 'name'],
        where: {
            name: {
                $like: '%' + request.params.term + '%'
            }
        }
    }) .then(items => response.send(items));
});

groceryApi.post("/image/update", (request: Request, response: Response) => {
    console.log(request.body.file);
    db.Image
        .update({
            file: request.body.file
        }, {
            where: {
                id: request.body.grocery_id
            }
        }).then(()=>response.sendStatus(200))
});

groceryApi.get("/image/get/:id", (request: Request, response: Response) => {
    db.Image
        .findById(request.params.id)
        .then(item => response.send(item));
});

export {groceryApi};