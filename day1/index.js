const http = require('http');


const server = http.createServer(
    (request,response) => {
        response.writeHead(200, {'Content-Type': "text/plain"});
        response.end('Buongiorno, corso');
        return response;
    }
);

console.log('Server in ascolto');
server.listen(8000);


