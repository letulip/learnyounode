const readDir = require(`./mymodule`);

const printFiles = (err, list) => {
  if (err) {
    console.log(err);
  }

  list.forEach((item) => {
    console.log(item);
  });
};

readDir(process.argv[2], process.argv[3], printFiles);