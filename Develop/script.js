// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  // This will start if the generate button is pushed.
  if(generateBtn = true)
  {
    var pwLength = window.prompt("How many characters would you like your password to be? (8-128 characters)")

    // This will determine whether the length input meets parameters.
    if(pwLength < 8 || pwLength > 128)
    {
      pwLength = window.prompt("Password must be between 8-128 characters. How many characters do you want your password to be?")
    }

    // Asks user if they want special characters.
    var specialCharacters = window.confirm("Do you want your password to have special characters? Y/N")
    var upperCase = window.confirm("Do you want to have uppercase letters in your password? Y/N")
    var lowerCase = window.confirm("Do you want your password to have lowercase letters? Y/N")
    var number = window.confirm("Do you want numbers included in your password? Y/N")

    if(!(specialCharacters) && !(upperCase) && !(lowerCase) && !(number))
    {
      window.alert("You must click ok for one of the four options to generate a password")
    }else
    {
      var final = [];
      switch(specialCharacters)
      {
        case true:
          var characters = ["!", "@", "#", "$", "%", "&", "*"];
          final = final.concat(characters);
          break;
        case false:
          break;
      }
      switch(upperCase)
      {
        case true:
          var lettersUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
          final = final.concat(lettersUp);
          break;
        case false:
          break;
      }
      switch(lowerCase)
      {
        case true:
          var lettersLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
          final = final.concat(lettersLow);
          break;
        case false:
          break;
      }
      switch(number)
      {
        case true:
          var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
          final = final.concat(numbers);
          break;
        case false:
          break;
      }

      console.log(final);

    }
    
    


    password = final.join("");
    console.log(password);
    
    
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




