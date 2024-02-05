//write a js function that works as a pagination

// const arr = ["rakim", "ruchi", "anima", "sumit", "samundra", "kuber"];
// const page = 1; //dynamic
// const limit = 2; //dynamic

/* Example
Page 1 => ["rakim", "ruchi"]
Page 2 => ["anima", "sumit"]
Page 3 => ["samundra", "kuber"]
Page 4 => []
*/

function paginate(arr, page, limit) {
  const a = 1;
  const b = 5;

  const test = arr.slice(a, b);

  return test;
}

const arr = ["rakim", "ruchi", "anima", "sumit", "samundra", "kuber"];
const page = 1;
const limit = 3;

const result = paginate(arr, page, limit);
console.log(`Page ${page} =>`, result);
