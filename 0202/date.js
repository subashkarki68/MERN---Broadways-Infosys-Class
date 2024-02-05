const now = new Date();
console.log(now.getTime());

//ISO String, UTC String, Time String
const now2 = new Date(1706879621781);
const now3 = new Date("02 Jana");
console.log("toISOString  => ", now2.toISOString());
console.log("toUTCString => ", now2.toUTCString());
console.log("toDateString => ", now2.toDateString());

console.log(now3);
