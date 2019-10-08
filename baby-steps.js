const sumNumbers = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    if (parseInt(number)) {
      sum += parseInt(number);
    }
  });
  return console.log(sum);
};

sumNumbers(process.argv.slice(2));
