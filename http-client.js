const http= require(`http`);

const getContents = (url) => {
  http.get(url, (response) => {
    response.setEncoding(`utf-8`);
    response.on(`data`, (data) => {
      console.log(data.toString());
    });
    response.on(`error`, console.error);
  }).on(`error`, console.error);
};

getContents(process.argv[2]);