const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (request,response) => {

       if(request.url === '/favicon.ico') {
        response.writeHead(404);
        response.end();
       } else {
        response.writeHead(200, {'Content-Type': "text/html"});
        fs.readFile('./index.html', (errore, mioFile) => {
            response.end(mioFile);
        });
        console.log("Percorso File: " + __dirname);
        console.log("Nome File: " + __filename);

       }
    }
);

console.log('Server in ascolto');
server.listen(8000);