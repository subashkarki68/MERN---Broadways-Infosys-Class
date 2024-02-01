//JS function that converts reguladr text to title case
//eg: "subash karki" => "Subash Karki"

const convertToTitleCase = (str) => {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    // if (str[i - 1] === " ") result += str[i].toUpperCase();
    // else result += str[i].toLowerCase();
    str[i - 1] === " "
      ? (result += str[i].toUpperCase())
      : (result += str[i].toLowerCase());
  }
  return result;
};

console.log(convertToTitleCase("suBaSh kArKI, rUcHI rAj kARki").trim());
