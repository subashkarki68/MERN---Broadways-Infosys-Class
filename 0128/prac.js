//write a JS function that creates a commaFormatter
//ex: x= 1000; expected out: 10,000
//ex y = 1000000; expected: 1,000,000

const reverseString = (str) => {
  let result = "";
  for (i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

const commaFormat = (number) => {
  const stringed = String(number);
  let count = 0;
  let result = "";
  for (let i = stringed.length - 1; i >= 0; i--) {
    count++;
    result += stringed[i];
    if ((count === 3) & (i !== 0)) {
      result += ",";
      count = 0;
    }
  }
  return result;
};
// console.log(commaFormat(100000000000).split("").reverse().join(""));
console.log(reverseString(commaFormat(9898989898)));
