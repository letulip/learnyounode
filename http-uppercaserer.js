const STATUS_OK = 200;

const map = require(`through2-map`);
const http = require(`http`);
const portNumber = process.argv[2];

const connectionListener = (request, response) => {
  response.writeHead(STATUS_OK, {"content-type": `text-plain`});
  
};

const server = http.createServer(connectionListener);
server.listen(portNumber, () => {
  console.log(`Server is running: ${server.address()}`);
  
});