const fs = require("fs");

const data = fs.readFileSync("Day2/InputDay2.txt", "utf8");
let dataArray = data.split("\n");
for (let i = 0; i < dataArray.length; i++) {
  dataArray[i] = dataArray[i].replace("\r", "");
  dataArray[i] = dataArray[i].split(" ");
}
let horizontalPosition = 0;
let depth = 0;
for (let i = 0; i < dataArray.length; i++) {
  if (dataArray[i][0] === "forward") {
    horizontalPosition += parseInt(dataArray[i][1]);
  } else if (dataArray[i][0] === "up") {
    depth -= parseInt(dataArray[i][1]);
  } else if (dataArray[i][0] === "down") {
    depth += parseInt(dataArray[i][1]);
  }
}
console.log(horizontalPosition);
console.log(depth);
console.log(horizontalPosition * depth);
