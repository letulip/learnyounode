const fs = require(`fs`);
const path = require(`path`);

const filterList = (list, ext) => {
  const filteredList = []
  list.forEach((file) => {
    if (path.extname(file) === `.${ext}`) {
      filteredList.push(file);
    }
  });
  return filteredList;
};

const readDirectory = (pathToDir, extension, callback) => {
  fs.readdir(pathToDir, (err, dirContents) => {
    if (err) {
      return callback(err);
    }

    return callback(null, filterList(dirContents, extension));
  });
};

module.exports = readDirectory;