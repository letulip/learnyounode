const http= require(`http`);

const getContents = (url) => {
  http.get(url, (response) => {
    response.setEncoding(`utf-8`);
    let rawData = ``;
    response.on(`data`, (data) => {
      rawData += data;
    });
    response.on(`end`, () => {
      try {
        console.log(rawData.length);
        console.log(rawData);
      } catch (e) {
        console.error(e.message);
      }
    });
    response.on(`error`, console.error);
  }).on(`error`, console.error);
};

getContents(process.argv[2]);