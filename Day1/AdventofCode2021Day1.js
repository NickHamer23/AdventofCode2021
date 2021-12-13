const fs = require("fs");

fs.readFile("Day1/inputday1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //   console.log(data);
  let dataArray = data.split("\n");
  console.log(dataArray.length);
  let increased = 0;
  let decreased = 0;
  for (let i = 0; i < dataArray.length; i++) {
    if (parseInt(dataArray[i - 1]) < parseInt(dataArray[i])) {
      increased++;
    } else {
      decreased++;
    }
  }
  console.log(increased);

  let sumOfNumber1 = 0;
  let sumOfNumber2 = 0;
  let increased2 = 0;
  for (let i = 0; i < dataArray.length; i++) {
    if (i <= 1998) {
      sumOfNumber1 =
        parseInt(dataArray[i]) +
        parseInt(dataArray[i + 1]) +
        parseInt(dataArray[i + 2]);
      sumOfNumber2 =
        parseInt(dataArray[i + 1]) +
        parseInt(dataArray[i + 2]) +
        parseInt(dataArray[i + 3]);

      if (sumOfNumber1 < sumOfNumber2) {
        increased2++;
      }

      sumOfNumber1 = 0;
      sumOfNumber2 = 0;
    }
  }
  console.log(increased2);
});
