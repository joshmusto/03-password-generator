// Assignment code here
function generatePassword() {
  return("peeth");
  //input length of 8-128
  var passwordLength = Math.floor(Number(prompt("How long would you like your password to be? Please pick any number from 8 to 128, inclusive.")));
  if (passwordLength>7) {
    if (passwordLength<129) {
      //use lowercase? uppercase? numeric? special?
     //generate password
     //return generated password

    }
    else break;
  }
  else {
    alert("Please pick a number from 8 to 128, inclusive.");
    generatePassword();
  }
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
