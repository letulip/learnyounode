
//"YYYY-MM-DD hh:mm"
//"2013-07-06 17:42"

const net = require(`net`);
const portNumber = process.argv[2];

const formatMonth = (month) => {
  if (month <= 8) {
    return `0${++month}`;
  } else {
    return ++month;
  }
};

const formatDate = (date) => {
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
}

const getDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${formatMonth(date.getMonth())}-${formatDate(date.getDate())} ${date.getHours()}:${date.getMinutes()}\n`;
};

const connectionListener = (socket) => {
  socket.end(getDate());
};

const server = net.createServer(connectionListener).on(`error`, (err) => {
  console.error(err);
  
});
server.listen(portNumber, () => {
  console.log(`opened server on: ${server.address()}`);
  
});