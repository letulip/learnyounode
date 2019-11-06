const STATUS_OK = 200;
const PARSE_TIME = `parsetime`;
const UNIX_TIME = `unixtime`;
const ISO = `iso`;

// {
//   "hour": 14,
//   "minute": 23,
//   "second": 15
// }

// { "unixtime": 1376136615474 }

const http = require(`http`);
const portNumber = process.argv[2];

const convertDateTime = (url) => {
  if (url.includes(PARSE_TIME)) {
    let regex = /(\d+):(\d+):(\d+)/;
    // console.log(url.match(regex)[0]);
    const timeIn = url.match(regex)[0].split(`:`);
    let timeOut = { hour: timeIn[0], minute: timeIn[1], second: timeIn[2]};
    return JSON.stringify(timeOut);
    
  }
  if (url.includes(UNIX_TIME)) {
    // Date.parse();
    let regex = /(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)/;
    // console.log(Date.parse(url.match(regex)[0]));
    let timeOut = { unixtime: Date.parse(url.match(regex)[0])};
    return JSON.stringify(timeOut);
  }
};

const connectionListener = (request, response) => {
  request.on(`start`, () => {
    response.writeHead(STATUS_OK, {"content-type": `application/json`});

  });

  if (request.method === `GET`) {
    convertDateTime(request.url);
    // console.log(request.url);

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