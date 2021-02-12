// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generates password to display to user
function generatePassword() {
  
  // Starts if generate password button is pushed
  if(generateBtn = true)
  {
    var pwLength = window.prompt("How many characters would you like your password to be? (8-128 characters)")

    // Verification of whether the user is entering a number or a character. Will only generate if it is a number.
    if(!(parseInt(pwLength)))
    {
      window.alert("The length must be a number between 8-128.")
    }
    else
    {
      // Determines whether input number is between 8 & 128 characters. If it is not, it will re-prompt the user for the length
      if(pwLength < 8 || pwLength > 128)
    {
      pwLength = window.prompt("Password must be between 8-128 characters. How many characters do you want your password to be?")
    }

    // Asks user if they want certain parameters in their password
    var specialCharacters = window.confirm("Do you want your password to have special characters?")
    var upperCase = window.confirm("Do you want to have uppercase letters in your password?")
    var lowerCase = window.confirm("Do you want your password to have lowercase letters?")
    var number = window.confirm("Do you want numbers included in your password?")

    // If the user does not choose any of the special parameters, it will advise them that they have to choose at least one.
    if(!(specialCharacters) && !(upperCase) && !(lowerCase) && !(number))
    {
      window.alert("You must click ok for one of the four options to generate a password")
    }else
    
    // Each switch determines whether or not the user chose to include the parameter in their password. If they did, it adds that set of characters to the array.
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
    }
    
    // Joins all chosen parameters in one string of characters without comma or spaces.
    password = final.join("");
    
    
   
    }
  }
  
  // Sends joined characters into the charset to randomize the final password
  charset = password;
  retVal = "";

  // Chooses random parts of the charset given the length of the password user chose to begin with
  for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }

  // Returns final password to write to the text box.
  return retVal;
}

function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




