const fs = require(`fs`);
const http = require(`http`);

const STATUS_OK = 200;

const portNumber = process.argv[2];
const fileLocation = process.argv[3];

const connectionListener = (request, response) => {
  response.writeHead(STATUS_OK, {"content-type": `text-plain`});

  // my solution
  // const file = fs.createReadStream(fileLocation);
  // file.setEncoding(`utf-8`);
  // file.on(`data`, (data) => {
  //   response.end(`${data}`);
  // });

  // recommended solution
  fs.createReadStream(fileLocation).pipe(response);
};

const server = http.createServer(connectionListener);
server.listen(portNumber, () => {
  console.log(`Server is running: ${server.address()}`);
});