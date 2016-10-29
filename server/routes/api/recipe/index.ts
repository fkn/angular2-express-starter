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


export { recipeApi };