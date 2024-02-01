//Find out how to delete item inside array

const group = [
  { name: "Raktim", age: 30 },
  { name: "Anita", age: 10 },
  { name: "Ruchi Raj", age: 26 },
  { name: "Samundra", age: 26 },
  { name: "Sumit", age: 19 },
  { name: "Shyam", age: 32 },
  { name: "Hari Bahadur", age: 54 },
  { name: "Madan Bahadur", age: 60 },
  { name: "Badal", age: 9 },
];
console.table(group);

/////////////////////////////////////////////////////////////////
//Removing last otem
const popped = group.pop(); //remove the last item in an array and return the popped one
console.table(group);
console.log(`${JSON.stringify(popped)} removed`);
console.log(popped + " is removed"); //Ask to sir
console.log(popped, " is removed");
/////////////////////////////////////////////////////////////////
console.log("_________________________________________________");
/////////////////////////////////////////////////////////////////

//Remove speciefic items
const removed = group.splice(1, 2); // remove drom index 1 up to 2 items and return the removed ones
console.table(group);
console.log(removed, removed.length > 1 ? " are removed" : " is removed");
