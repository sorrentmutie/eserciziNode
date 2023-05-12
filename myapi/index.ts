import express from 'express';

const app = express();
const users_router = require("./routes/users-routes");

app.get('/', (request, response) => {
    response.send("Ciao Ciaoooo  dalla mia API");
});

app.use("/users", users_router);

const port = process.env.PORT  || 3000; 

app.listen(port, () => {
    console.log('API in ascolto sulla porta ' + port);
});