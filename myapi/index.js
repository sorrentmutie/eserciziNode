"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get('/', function (request, response) {
    response.send("Ciaooooo Ciaooooo  dalla mia API");
});
app.get("/users", function (request, response) {
    var users = [{ id: 1, name: "Mario", surname: "Rossi" }];
    var myUser;
    myUser = { id: 1, name: "Salvatore", surname: "Rossi" };
    response.json(users);
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('API in ascolto sulla porta ' + port);
});
