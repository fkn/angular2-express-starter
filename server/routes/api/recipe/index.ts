import { Router, Response, Request, NextFunction } from "express";

const recipeApi: Router = Router();

const db = require("../../../../models");

recipeApi.get("/", (request: Request, response: Response) => {
    db.Recipe
        .findAll({})
        .then(items => response.send(items));
});

recipeApi.get("/:id", (request: Request, response: Response) => {
    db.Recipe
        .findById(request.params.id)
        .then(item => response.send(item));
});

recipeApi.put("/", (request: Request, response: Response) => {
    let name = request.body.name, description = request.body.description;
    db.Recipe.create({
        name: name,
        description: description
    })
    .then(recipe => response.send(recipe));
});


export { recipeApi };

// CRUD
// C – create PUT
// R – read   GET
// U - update POST
// D - delete DELETE