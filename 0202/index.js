/* write a JS function that checks username and password 
in the database, and checks if the password match or not.
return bool value
*/

const db = [
  { username: "Subash", password: "password1" },
  { username: "Raktim", password: "password2" },
  { username: "Hari", password: "password3" },
  { username: "Bahadur", password: "password4" },
  { username: "Sandy", password: "password5" },
  { username: "Mandy", password: "password6" },
];
const userExist = (username, password) => {
  const user = db.filter(
    (u) => u.username.toLowerCase() === username.toLowerCase()
  );
  if (user.length > 0) {
    return user[0].password === password;
  }
  return false;
};
const user404 = () => console.log("Please check your username or password");
userExist("subash", "password1")
  ? console.log("Logged in Successfully")
  : user404();

const userSearch = (query) =>
  db.filter((user) => user.username.toLowerCase().includes(query));

console.table(userSearch("r"));
