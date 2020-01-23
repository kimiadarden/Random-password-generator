// Assignment Code
var generateBtn = document.querySelector("#generate");

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
//  userInput of the password:
// THEN I choose a userInput of at least 8 characters and no more than 128 characters

// character types:
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// the user input is a string so I added Number function

var userInput = Number(prompt("How many characters would you like your password to contain?"));

if  (userInput>=8 && userInput<=128){
  confirm("Click Ok to confirm including special characters");
}
else if (userInput<=7) {
  alert("Password length must be at least 8 characters");
}

else {
  alert("Password length must be less than 129 characters")
}



// confirm("Click Ok to confirm including special characters")




// confirm("Click Ok to confirm including numeric characters")

// confirm("Click Ok to confirm including lowercase characters")

// confirm("Click Ok to confirm including uppercase characters")

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
