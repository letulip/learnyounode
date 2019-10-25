const STATUS_OK = 200;

const fs = require(`fs`);
const map = require(`through2-map`);
const http = require(`http`);
const portNumber = process.argv[2];

const createOutStream = (inStream) => {
  inStream.pipe(map((chunk) => {
    return chunk.toString().split(``).reverse().join(``);
  })).pipe(outStream);
};

const connectionListener = (request, response) => {
  if (request.method === `POST`) {
    
    let rawData = ``;
    request.on(`data`, (data) => {
      rawData = `${data}`;
      console.log(rawData.toUpperCase());
    });
    request.on(`end`, () => {
      // console.log(rawData.toUpperCase());
      
      response.writeHead(STATUS_OK, {"content-type": `text-plain`});
      response.end(``);
    });
    // createOutStream(response);
    // response.on(`error`, console.error);
  }
  
};

const server = http.createServer(connectionListener);
server.listen(portNumber, () => {
  console.log(`Server is running: ${server.address()}`);
  
});