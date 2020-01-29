const fs = require("fs");

//read text file and create triangle of 100 lines
const data = fs.readFileSync("./files/triangle.txt", "utf8").split(/\r?\n/);

const arr = []; //instanciate the array im going to use to test. 

for (let i = 0; i < data.length; i++) {
  arr[i] = data[i].split(" ");
  //some lines have an extra empty string - remove the end if this is the case.
  if (arr[i].length > i + 1) {
    arr[i].pop();
  }
}

//================================================

//TODO: SOLUTION----
//work backwards from the second to last row adding the greater of the two lower adjacent numbers
//until the top is reached. the maximum value should be the top. we will return that value.

const findMaxSum = array => {
    //starting from the second to last row identify the left and right adjacent numbers
  for (let row = 98; row >= 0; row--) {
    for (let node = 0; node < array[row].length; node++) {
      let current = Number(array[row][node]);
      let left = Number(array[row + 1][node]);
      let right = Number(array[row + 1][node + 1]);

      //   console.log("on the row:  ", row);
      //   console.log("the current, LEFT AND RIGHT node is: ");
      //   console.log(current);
      //   console.log(left);
      //   console.log(right);

      if (left > right) {
        //if left is greater than right then add to the current node
        current = current + left;
        array[row][node] = current; //change the value of the current node in the array
      } else {
        //otherwise add the right number
        current = current + right;
        array[row][node] = current; //change the value of the current node in the array
      }
      console.log("current is now", array[row][node]);
    }
  }
  console.log("Max sum of adjacent numbers is: ", array[0][0]);
  return array[0][0];
};

findMaxSum(arr);
