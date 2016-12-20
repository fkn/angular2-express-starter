import { Router, Response, Request, NextFunction } from "express";

const measureApi: Router = Router();
const db = require("../../../../models");

measureApi.get("/", (request: Request, response: Response) => {
    db.Measure
        .findAll({})
        .then(items => response.send(items));
});

measureApi.get("/:id", (request: Request, response: Response) => {
    let id = request.params.id;
    db.Measure
        .findById(id)
        .then(items => response.send(items));
});



measureApi.post("/", (request: Request, response: Response) => {
    let name = request.body.name, type = request.body.type, power = request.body.power;
    db.Measure.create({
        name: name,
        type: type,
        power: power
    })
        .then(measure => {
            response.send(measure);
        });
});


measureApi.put("/:id", (request: Request, response: Response) => {
    let id = request.params.id, name = request.body.name, type = request.body.type, power = request.body.power;
    db.Measure.update({
        name: name,
        type: type,
        power: power
    },
        {
            where: {
                id: id
            }
        })

});

measureApi.delete("/:id", (request: Request, response: Response) => {
    let id = request.params.id;
    db.Measure.destroy({
        where: {
            id: id
        }
    })
        .then(measure => {
            response.send(measure);
        });
});



export { measureApi };