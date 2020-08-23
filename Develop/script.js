// Assignment code here
var password = {
  // lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  lowerCase: ("abcdefghijklmnopqrstuvwxyz"),
  upperCase: ("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  number: ("0123456789"),
  symbol: ("!@#$%^&*()_-+={[}];'<,>.?/")
}


function getRandomLower() {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
