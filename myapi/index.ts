import express from 'express';
import { User } from './models/user';
const app = express();

app.get('/', (request, response) => {
    response.send("Ciao Ciaoooo  dalla mia API");
});

app.get("/users", (request,response) => {
    const users: User[] = [ 
        { id: 1, name: "Mario", surname: "Rossi"},
        { id: 2, name: "Luigi", surname: "Bianchi"},
    ];
    response.json(users);
});

const port = process.env.PORT  || 3000; 

app.listen(port, () => {
    console.log('API in ascolto sulla porta ' + port);
});