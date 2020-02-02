var generateBtn = document.querySelector("#generate");

var allChar = [];
var generateB = document.querySelector(".btn");

var finalPassword = document.querySelector("password");


// the user input is a string so I added Number function

generateB.addEventListener("click", function() {
  
  var userInput = Number(prompt("How many characters would you like your password to contain?"));
  
  if (userInput >= 8 && userInput <= 128) {
    var specialChar = confirm("Click Ok to confirm including special characters");
    if (specialChar == true) {
      charSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "[", "]"]
      allChar.push(charSet)
    }
    
    var numChar = confirm("Click Ok to confirm including numeric characters")
    if (numChar == true) {
      numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      allChar.push(numSet)
    }
    
    
    var loChar = confirm("Click Ok to confirm including lowercase characters")
    if (loChar == true) {
      lowSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      allChar.push(lowSet)
    }
    
    
    var upCharconfirm = confirm("Click Ok to confirm including uppercase characters")
    if (upCharconfirm == true) {
      upSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      allChar.push(upSet)
    }
    
    
    
    function generatePassword(l) {
      var finalPass = "";
      
      //converting the array into a string 
      var xString = allChar.toString();
      
      // removing , from variable x
      var x = xString.replace(/,/g, "");
      
      
      for (var i = 0; i < l; i++) {
        finalPass += x.charAt(Math.floor(Math.random() * userInput));
      }
      return finalPass;
    };
    alert(generatePassword(userInput));
    
    
    document.getElementById("password").value = generatePassword(userInput);
    
    
  }
  else if (userInput <= 7) {
    alert("Password length must be at least 8 characters");
  }
  
  else {
    alert("Password length must be less than 129 characters")
  }
  
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


  
});
