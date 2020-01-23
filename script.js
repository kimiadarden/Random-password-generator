// Assignment Code
var generateBtn = document.querySelector("#generate");



// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// the user input is a string so I added Number function
var userInput = Number(prompt("How many characters would you like your password to contain?"));

if (userInput >= 8 && userInput <= 128) {
  var specialChar = confirm("Click Ok to confirm including special characters");
  if (specialChar == true) {
    charSet = ["!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]"]
  }
  
  var numChar = confirm("Click Ok to confirm including numeric characters")
  if (numChar == true) {
    numSet = ["0","1","2","3","4","5","6","7","8","9"]
  }
  
  
  var loChar = confirm("Click Ok to confirm including lowercase characters")
  if (loChar == true) {
    lowSet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  }
  
  
  var upCharconfirm = ("Click Ok to confirm including uppercase characters")
  if (upCharconfirm == true) {
    upSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  }
  
 

  
    
    
  }
  else if (userInput <= 7) {
    alert("Password length must be at least 8 characters");
  }
  
  else {
    alert("Password length must be less than 129 characters")
  }
  
  
  
  
  
  
  
  
  function generatePassword() {
    
    
  }
  
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  
  
  
