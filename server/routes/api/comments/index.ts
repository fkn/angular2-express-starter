import { Router, Response, Request, NextFunction } from "express";

const commentApi: Router = Router();
const db = require("../../../../models");

commentApi.get("/:id", (request: Request, response: Response) => {
    var recipeId = request.params.id;
    db.Comment
        .findAll({
            order: 'createdAt DESC',
            where: {
                RecipeId: recipeId
            }
        })
        .then(items => response.send(items));
});

commentApi.post("/", (request: Request, response: Response) => {

    let name = request.body.name, comment = request.body.comment, recipeId = request.body.RecipeId;
    console.log(request);
    db.Comment.create({
        name: name,
        comment: comment,
        RecipeId: recipeId
    })
        .then(measure => {
            response.send(measure);
        });
});

export {commentApi}

