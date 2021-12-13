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

let aim = 0;
let horizontalPosition2 = 0;
let depth2 = 0;
for (let i = 0; i < dataArray.length; i++) {
  if (aim === 0) {
    if (dataArray[i][0] === "forward") {
      horizontalPosition2 += parseInt(dataArray[i][1]);
    } else if (dataArray[i][0] === "up") {
      aim = aim - parseInt(dataArray[i][1]);
    } else if (dataArray[i][0] === "down") {
      aim = aim + parseInt(dataArray[i][1]);
    }
  } else if (aim !== 0) {
    if (dataArray[i][0] === "forward") {
      horizontalPosition2 += parseInt(dataArray[i][1]);
      depth2 += aim * parseInt(dataArray[i][1]);
    } else if (dataArray[i][0] === "up") {
      aim = aim - parseInt(dataArray[i][1]);
    } else if (dataArray[i][0] === "down") {
      aim = aim + parseInt(dataArray[i][1]);
    }
  }
}
console.log(horizontalPosition2);
console.log(depth2);
console.log(horizontalPosition2 * depth2);
