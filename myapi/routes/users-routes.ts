import { UsersService } from "../controllers/users-service";
import * as express from "express";

const router = express.Router();

router.get("/", (request: express.Request,response: express.Response) => {
    console.log(request);
    const service = new UsersService();
    const users = service.getUsers();
    response.json(users);
});

router.get("/:id", (request: express.Request,response: express.Response) => 
{
   console.log(request.params);
   response.send('ciao');
});



module.exports = router; 
