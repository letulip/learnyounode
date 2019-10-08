const fs = require(`fs`);

const linesCount = (pathToFile) => {
  const fileContents = fs.readFileSync(pathToFile).toString();
  return console.log(fileContents.split(`\n`).length - 1);
  
};

linesCount(process.argv[2]);