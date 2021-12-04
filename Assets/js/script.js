// Assignment Code
var generateBtn = document.querySelector('#generate');

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var num = '0123456789';
var symbol = '!@#$%^&*()_+~\\`|}{[]:;?><,./-=';

var passwordValue = '';

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector('#password');
  var passwordLength = prompt('Choose your password length');
  var passwordUpperCase = confirm('Would you like to add upper case letter?');
  var passwordLowerCase = confirm('Would you like to add lower case letter?');
  var passwordSymbol = confirm('Would you like to add symbol?');
  var passwordNumber = confirm('Would you like to add number?');

  while (passwordValue.length < passwordLength) {
    if (passwordUpperCase) {
      var upper = Math.floor(Math.random() * upperCase.length);
      passwordValue += upperCase.substring(upper, upper + 1);
    }

    if (passwordLowerCase) {
      var lower = Math.floor(Math.random() * lowerCase.length);
      passwordValue += lowerCase.substring(lower, lower + 1);
    }

    if (passwordSymbol) {
      var symb = Math.floor(Math.random() * symbol.length);
      passwordValue += symbol.substring(symb, symb + 1);
    }

    if (passwordNumber) {
      var numb = Math.floor(Math.random() * num.length);
      passwordValue += num.substring(numb, numb + 1);
    }
  }

  if (passwordLength < 8) {
    alert('Password length should be 8 characters');
  } else if (passwordLength > 128) {
    alert('Password length should be less than 128 characters');
  } else {
    passwordText.value = passwordValue;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
