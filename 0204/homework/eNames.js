//Write a JS function that finds the bird name starting with "e" character

const birds = ["Parrot", "Eagles", "emus", "Caracaras", "egrets"];

const withE = (arr) => arr.filter((a) => a[0].toLowerCase() === "e");

console.log(withE(birds));

const withRegex = (arr) => arr.filter((a) => a.search([/eE/g]));

console.log(withRegex(birds));
