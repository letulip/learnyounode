const fs = require(`fs`);
const path = require(`path`);

const readDirectory = (pathToDir, extension, callback) => {
  fs.readdir(pathToDir, (err, dirContents) => {
    if (err) {
      return console.log(err);
    }

    return callback(dirContents, extension);
  });
};

const printFiles = (list, extension) => {
  list.forEach((file) => {
    if (path.extname(file) === `.${extension}`) {
      console.log(file);
    }
  });
};

readDirectory(process.argv[2], process.argv[3], printFiles);