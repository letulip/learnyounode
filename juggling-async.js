const http = require(`http`);

const getContents = (url) => {
  return new Promise((resolve) => {
    http.get(url, (response) => {
      response.setEncoding(`utf-8`);
      let rawData = ``;
      response.on(`data`, (data) => {
        rawData += data;
      });
      response.on(`end`, () => {
        resolve(rawData);
      });
      response.on(`error`, console.error);
    }).on(`error`, console.error);
  });
};

const awaitAnswers = async (urls) => {
  for (let i = 0; i < urls.length; i++) {
    printResult(await getContents(urls[i]));
  }
};

const printResult = (data) => {
  try {
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};

awaitAnswers([process.argv[2], process.argv[3], process.argv[4]]);
