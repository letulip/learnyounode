const http= require(`http`);

const getContents = (url) => {
  http.get(url, (response) => {
    response.setEncoding(`utf-8`);
    let rawData = ``;
    response.on(`data`, (data) => {
      rawData += data;
    });
    response.on(`end`, () => {
      printResult(rawData);
    });
    response.on(`error`, console.error);
  }).on(`error`, console.error);
};

const printResult = (data) => {
  try {
    console.log(data.length);
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}

getContents(process.argv[2]);