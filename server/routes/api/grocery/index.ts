import {Router, Response, Request, NextFunction} from "express";

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
        .then(item => response.send(item));
});

groceryApi.get((request: Request) => {
    console.log("delete");
    db.GroceryItem.find({where:{id:request.params.id}}).complete(function (err,groceryItem) {
        groceryItem.destroy();
    });
});
export {groceryApi};