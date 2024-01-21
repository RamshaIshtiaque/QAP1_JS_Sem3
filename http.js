//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
//The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

const http = require('http');

//create a server object:
http.createServer(function (req, res) {
    //write a response to the client
    res.write('Hello World!');
    //end the response
    res.end(); 
    //the server object listens on port 3000
  }).listen(3000); 

  console.log('Listening on port 3000');

