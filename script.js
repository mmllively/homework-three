// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%&*";

var userChar = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

var passwordLength = window.prompt("Choose length of characters between 8 and 128"); 
if (passwordLength<8 || passwordLength>128){
 window.alert("Incorrect number provided");
 return generatePassword();
}

var passwordUpper = window.confirm("Do you want to use uppercase letters?");
if (passwordUpper) {
  userChar += upperCase
}


var passwordLower = window.confirm("Do you want to use lowercase letters?");
if (passwordLower) {
  userChar += lowerCase
}


var passwordNumber = window.confirm("Do you want to use numbers?");
if (passwordNumber) {
  userChar += numbers
}

var passwordSpecial = window.confirm("Do you want to use special characters?");
if (passwordSpecial) {
  userChar += specialChar
}
var passwordGen = "";
for (var i = 0, n = userChar.length; i < passwordLength; ++i) {
  passwordGen += userChar.charAt(Math.floor(Math.random() * n));
}

console.log (passwordGen);
return passwordGen;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// function getPassword () {
//     var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()_+?><:{}[]";
//     var passwordLength = 16;
//     var password = ''; 
    
//     for (var i = 0; i < passwordLength; i++) {
//         var randomNumber = Math.floor(Math.random() * chars.length);
        
//         password += chars.substring(randomNumber, randomNumber +1);
//         console.log(password);
//     }
// }