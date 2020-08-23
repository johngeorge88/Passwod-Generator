// Password Variables
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbol = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ';']
var char = []

// function to reset the password Char
function startReset() {
  char =[];
  writePassword()
}

// This is what happenes when we press generate password
function generatePassword() {
  // Ask the user to enter a password length
  passwordLength = parseInt(prompt("Please choose a password length of at least 8 characters and no more than 128 characters"));

  // Alert If the user entry is not valid
  if (passwordLength === null || passwordLength === "" || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 ) {
    alert("You need to provide a valid length! Please try again.")
    return generatePassword();
  }

  // Different charcterestics for the password (Upper-Case, Lower-Case, ....)
  var passwordUpper = confirm("Would you like your passwod to include Upper Case letters ?")
  var passwordLower = confirm("Would you like your passwod to include Lower Case letters ?")
  var passwordNumber = confirm("Would you like your passwod to include numbers ?")
  var passwordSymbol = confirm("Would you like your passwod to include characters ?")
  
//  Alert for the user that he must choose at least one characterstic for his password
  if (!passwordUpper && !passwordLower && !passwordNumber && !passwordSymbol){
    alert("Please choose at least on selection for our password charactrs")
    return generatePassword();
  }

  // Collecting the data that the user provided
  var passChoices= []
  if (passwordUpper) {
    passChoices = passChoices.concat(upperCase)
  }
  if (passwordLower) {
    passChoices = passChoices.concat(lowerCase)
  }
  if (passwordNumber) {
    passChoices = passChoices.concat(number)
  }
  if (passwordSymbol) {
    passChoices = passChoices.concat(symbol)
  }

  // Generating a random password depending on the password length chosen and its characterstics
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passChoices.length);
    var character = passChoices[randomNumber]
    char.push(character)
  }

  // Returning the password value to the Char array
  return char.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", startReset);
