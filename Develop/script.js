// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCharacter ='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~\\`|}{[]:;?><,./-=';

var passwordValue = '';


// Write password to the #password input
function writePassword() {  
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Choose your password length");
  passwordValue = '';

  for (var i = 0; i < passwordLength; i++) {
    var number = Math.floor(Math.random() * passwordCharacter.length);
    passwordValue += passwordCharacter.substring(number, number +1);
  }

  if (passwordLength > 128 ) {
    alert("Password length should be less than 128 characters");
  } else {
    passwordText.value = passwordValue;
  }  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
