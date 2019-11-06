const STATUS_OK = 200;

const map = require(`through2-map`);
const http = require(`http`);
const portNumber = process.argv[2];

// my solution without map.pipe

// const connectionListener = (request, response) => {
//   if (request.method === `POST`) {
    
//     request.on(`data`, (data) => {
//       response.write(data.toString().toUpperCase());
//     });
//     request.on(`end`, () => {
//       response.writeHead(STATUS_OK, {"content-type": `text-plain`});
//       response.end(``);
//     });
//   } else {
//     return response.end(`send me a POST\n`);
//   }
  
// };

// suggested solution with map.pipe

const connectionListener = (request, response) => {
  if (request.method === `POST`) {
    request.pipe(map((chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  } else {
    return response.end(`send me a POST\n`);
  }
};

const server = http.createServer(connectionListener);
server.listen(portNumber, () => {
  console.log(`Server is running: ${server.address()}`);
  
});