// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  // This will start if the generate button is pushed.
  if(generateBtn = true)
  {
    var length = window.prompt("How many characters would you like your password to be? (8-128 characters)")

    // This will determine whether the length input meets parameters.
    if(length < 8 || length > 128)
    {
      length = window.prompt("Password must be between 8-128 characters. How many characters do you want your password to be?")
    }

    // Asks user if they want special characters.
    var specialCharacters = window.prompt("Do you want your password to have special characters? Y/N")

    if(specialCharacters.toUpperCase === "Y" || specialCharacters.toUpperCase === "N")
    {
      if(specialCharacters.toUpperCase === "Y")
      {
        specialCharacters = true;
      }else
      {
        specialCharacters = false;
      }
    }else
    {
      specialCharacters = window.prompt("Please only use Y or N for response. Do you want special characaters in your password?")
      if(specialCharacters.toUpperCase === "Y")
      {
        specialCharacters = true;
      }else
      {
        specialCharacters = false;
      }
    }
    
    var upperCase = window.prompt("Do you want to have uppercase letters in your password? Y/N")

    if(upperCase.toUpperCase === "Y" || upperCase.toUpperCase === "N")
    {
      if(upperCase.toUpperCase === "Y")
      {
        upperCase = true;
      }else
      {
        upperCase = false;
      }
    }else
    {
      upperCase = window.prompt("Please only use Y or N for response. Do you want special characaters in your password?")
      if(upperCase.toUpperCase === "Y")
      {
        upperCase = true;
      }else
      {
        upperCase = false;
      }
    }

    var lowerCase = window.prompt("Do you want your password to have lowercase letters? Y/N")

    if(lowerCase.toUpperCase === "Y" || lowerCase.toUpperCase === "N")
    {
      if(lowerCase.toUpperCase === "Y")
      {
        lowerCase = true;
      }else
      {
        lowerCase = false;
      }
    }else
    {
      lowerCase = window.prompt("Please only use Y or N for response. Do you want special characaters in your password?")
      if(lowerCase.toUpperCase === "Y")
      {
        lowerCase = true;
      }else
      {
        lowerCase = false;
      }
    }

    

  }
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




