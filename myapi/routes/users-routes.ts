import { UsersService } from "../controllers/users-service";
import * as express from "express";

const router = express.Router();
const service = new UsersService();

router.get("/", (request: express.Request,response: express.Response) => {
    const users = service.getUsers();
    response.json(users);
});

router.get("/:id", (request: express.Request,response: express.Response) => 
{
   const id = request.params['id'];   
   const user = service.getUser(parseInt(id));
   if(user) {
    response.json(user);
   }else {
    response.sendStatus(404);
   }
});


router.get("/:id/files",(request: express.Request,response: express.Response) => {
    const id = parseInt(request.params["id"]);
    const files = service.getFiles(id);
    if(files) {
        response.json(files);
    } else {
        response.sendStatus(404);
    }
});

router.get("/:id/files/:f", (request: express.Request,response: express.Response) => 
{
   const id = parseInt(request.params["id"]);
   const f = parseInt(request.params["f"]);
   const myfile = service.getFile(id, f);
   if(myfile) {
      response.json(myfile);
   } else {
      response.status(404);
      response.send("File non trovato");
   }
});



module.exports = router; 
