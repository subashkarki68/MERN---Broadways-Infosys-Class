const reverseStr = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
};

const capitalizeFirst = (str) => {
  let res = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      res += str[i].toUpperCase();
    } else {
      res += str[i].toLowerCase();
    }
  }
  return res;
};
