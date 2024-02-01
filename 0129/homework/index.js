//Write a JS function that checks if the password is valid password or not
//  Validation rules:
//  1) at least 1 lowercase character   97 to 122
//  2) at least 1 uppercase character   65 to 90
//  3) at least 1 number                48 to 57
//  4) at least 1 symbol                33 to 47, 58 to 64, 91 to 96, 123 to 126
//  5) password length >= 8
//  Output: true/false

const validPassword = (password) => {
  let lowerCase = false,
    upperCase = false,
    number = false,
    symbol = false;
  for (let i = 0; i < password.length; i++) {
    let charCode = password[i].charCodeAt();
    if (charCode >= 97 && charCode <= 122) lowerCase = true;
    else if (charCode >= 65 && charCode <= 90) upperCase = true;
    else if (charCode >= 48 && charCode <= 57) number = true;
    else if (
      (charCode >= 33 && charCode <= 47) ||
      (charCode >= 58 && charCode <= 64) ||
      (charCode >= 91 && charCode <= 96) ||
      (charCode >= 123 && charCode <= 126)
    )
      symbol = true;
  }
  return lowerCase && upperCase && number && symbol && password.length >= 8;
};

console.log(validPassword("appP2aaaaa#"));
