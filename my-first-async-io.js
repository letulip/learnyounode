const fs = require(`fs`);

const countStrings = (pathToFile, callback) => {
  fs.readFile(pathToFile, (err, fileContents) => {
    if (err) {
      return console.log(err);
      
    }
    
    return callback(fileContents.toString().split(`\n`).length - 1);
  });
};

const printStringsTotal = (stringsCount) => {
  console.log(stringsCount);
};

countStrings(process.argv[2], printStringsTotal);