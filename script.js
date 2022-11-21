// Assignment code here

function generatePassword() {
  //input length of 8-128
  var passwordLength = Math.floor(Number(prompt("How long would you like your password to be? Please pick any number from 8 to 128, inclusive.")));
  if (passwordLength>7) {
    if (passwordLength<129) {
      //use lowercase? uppercase? numeric? special?
      useLowercase = confirm("Would you like the password to contain lowercase letters?");
      useUppercase = confirm("Would you like the password to contain uppercase letters?");
      useNumbers = confirm("Would you like the password to contain numbers?");
      useSpecial = confirm("Would you like the password to contain special characters?");
      //concatenize array of usable characters
      if (useLowercase) lowercase="abcdefghijklmnopqrstuvwxyz"
      else lowercase="";
      arrayLowercase=Array.from(lowercase);
      if (useUppercase) uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      else uppercase="";
      arrayUppercase=Array.from(uppercase);
      if (useNumbers) numbers="0123456789"
      else numbers="";
      arrayNumbers=Array.from(numbers);
      if (useSpecial) special="!#$%&'()*+,-./:;<=>?@][^_`{|}~\"\\ "
      else special="";
      arraySpecial=Array.from(special);
      //if use=true, add char string to array
      canUse = lowercase.concat(uppercase, numbers, special);
      //make sure that at least one character type is selected...
      if (canUse.length>0) {
        //console log of usable characters for bug checking
        console.log("Usable characters: " + canUse.toString());
        //generate password
        //RNG
        function getRandomInt(max) {
          return Math.floor(Math.random() * (max+1));
        }
        var arrayPassword = [];
        for (var i=0; i<passwordLength; i++) {
          arrayPassword[i]=canUse[getRandomInt(canUse.length)];
        }
        //turn password array into string, remove commas, then return generated password
        arrayPassword = arrayPassword.toString().replaceAll(",", "");
        return arrayPassword;
      }
      //...otherwise throw an error
      alert("Passwords must include at least one group of characters.");
      return;
    }
    //if password is too long
    alert("That password would be too long. Please pick a number from 8 to 128, inclusive.");
    }
  else {
    //password is too short
    alert("That password wouldn't be long enough. Please pick a number from 8 to 128, inclusive.");
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
