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
        .findOne({
            where: {id: request.params.id},
            include: [{model: db.Comment, as: 'comments'}],
        })
        .then(item => response.send(item));
});

recipeApi.delete("/:id", (request: Request, response: Response) => {
    let id = request.params.id;
    db.Recipe
        .destroy({ where: { id } })
        .then(() => response.sendStatus(200));
});

recipeApi.put("/", (request: Request, response: Response) => {
    let name = request.body.name, description = request.body.description;
    db.Recipe.create({
        name: name,
        description: description
    })
        .then(recipe => response.send(recipe));
});

recipeApi.get("/search/:term", (request: Request, response: Response) => {
    db.Recipe
        .findAll({
            attributes: ['id', 'name'],
            where: {
                name: {
                    $like: '%' + request.params.term + '%'
                }
            }
        })
        .then(items => response.send(items));
});



export { recipeApi };