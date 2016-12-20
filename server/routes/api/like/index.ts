import { Router, Response, Request, NextFunction } from "express";

const likeApi: Router = Router();
const db = require("../../../../models");

likeApi.get("/:id", (request: Request, response: Response) => {
    var recipeId = request.params.id;
    db.Like
        .findAll({
            where: {
                RecipeId: recipeId
            }
        })
        .then(items => response.send(items));
});

likeApi.post("/", (request: Request, response: Response) => {
    let recipeId = request.body.RecipeId;
    db.Like.create({
        RecipeId: recipeId
    })
        .then(like => {
            response.send(like);
        });
});

export {likeApi}

 