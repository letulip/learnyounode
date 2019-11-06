const STATUS_OK = 200;
const PARSE_TIME = `parsetime`;
const UNIX_TIME = `unixtime`;

// {
//   "hour": 14,
//   "minute": 23,
//   "second": 15
// }

// { "unixtime": 1376136615474 }

const http = require(`http`);
const url = require(`url`);
const portNumber = process.argv[2];

const convertDateTime = (url) => {
  let timeOut = {};

  if (url.includes(PARSE_TIME)) {
    const regex = /(\d+):(\d+):(\d+)/;
    const timeIn = url.match(regex)[0].split(`:`);
    timeOut = { hour: parseInt(timeIn[0]) + 3, minute: parseInt(timeIn[1]), second: parseInt(timeIn[2])};
    
    
  }
  if (url.includes(UNIX_TIME)) {
    const regex = /(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+).(\d+)Z/;
    timeOut = { unixtime: Date.parse(`${url.match(regex)[0]}`)};
  }

  return JSON.stringify(timeOut);
};

const connectionListener = (request, response) => {
  request.on(`start`, () => {
    response.writeHead(STATUS_OK, {"content-type": `application/json`});

  });

  if (request.method === `GET`) {
    response.write(convertDateTime(request.url));

    request.on(`data`, () => {
    });

    request.on(`end`, () => {
      response.end(``);
    });
  } else {
    return response.end(`Send me a GET\n`);
  }
};

const server = http.createServer(connectionListener);
server.listen(portNumber, () => {
  console.log(`Server is running: ${server.address()}`);
  
});