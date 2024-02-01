//write a JS function that count number of vowels used in string
//vowels: aeiou

const countVowels = (string) => {
  let counter = 0;
  const lower = string.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    if (
      lower[i] === "a" ||
      lower[i] === "e" ||
      lower[i] === "i" ||
      lower[i] === "o" ||
      lower[i] === "u"
    )
      counter++;
  }
  return counter;
};

console.log(countVowels("Hello I am Subash Karki"));
