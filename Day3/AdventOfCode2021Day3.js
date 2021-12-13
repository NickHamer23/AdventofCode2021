const fs = require("fs");

const data = fs.readFileSync("Day3/InputDay3.txt", "utf8");

let dataArray = data.split("\n");
for (let i = 0; i < dataArray.length; i++) {
  dataArray[i] = dataArray[i].replace("\r", "");
}
let numberOf0 = 0;
let numberOf1 = 0;
let gamarate = "";
for (let stringPosition = 0; stringPosition < 12; stringPosition++) {
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].charAt(stringPosition) === "0") {
      numberOf0++;
    } else {
      numberOf1++;
    }
  }
  if (numberOf0 > numberOf1) {
    gamarate = gamarate.concat("0");
  } else if (numberOf1 > numberOf0) {
    gamarate = gamarate.concat("1");
  }
  numberOf0 = 0;
  numberOf1 = 0;
}
console.log(gamarate);
// console.log(numberOf1);
