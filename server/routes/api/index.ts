import { Router, Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { secret } from "../../config";

import { recipeApi } from "./recipe";
import { groceryApi } from "./grocery";
import { measureApi } from "./measure";
import { commentApi } from "./comments";
import { likeApi } from "./like";

const restApi: Router = Router();

restApi.use("/recipe", recipeApi);
restApi.use("/grocery", groceryApi);
restApi.use("/measure", measureApi);
restApi.use("/comment", commentApi);
restApi.use("/like", likeApi);
// restApi.use((request: Request & { headers: { authorization: string } }, response: Response, next: NextFunction) => {
//     const token = request.headers.authorization;

//     verify(token, secret, function(tokenError) {
//         if (tokenError) {
//             return response.status(403).json({
//                 message: "Invalid token, please Log in first"
//             });
//         }

//         next();
//     });
// });

// restApi.get("/", (request: Request, response: Response) => {
//     response.json({
//         text: "Greetings, you have valid token.",
//         title: "Protected call"
//     });
// });

export { restApi }





