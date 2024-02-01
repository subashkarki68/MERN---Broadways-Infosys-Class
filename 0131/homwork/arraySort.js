//Array sory method and sort the data in ascending order

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

const sortArray = (by = "age") => {
  if (by === "name") {
    // return group.sort((a, b) => {
    //   const fCharCode = a.name[0].toLowerCase().charCodeAt();
    //   const sCharCode = b.name[0].toLowerCase().charCodeAt();
    //   return fCharCode - sCharCode;
    // });
    return group.sort(
      (a, b) =>
        a.name[0].toLowerCase().charCodeAt() -
        b.name[0].toLowerCase().charCodeAt()
    );
  }
  return group.sort((a, b) => a.age - b.age);
};
//////////////////////////////////////////////////////
console.log("Sort By name: ");
console.table(sortArray("name"));
//////////////////////////////////////////////////////
console.log("Sort By default taht is age: ");
console.table(sortArray());
