// queryselector to ref the HTML element with "generate" ID
var generateBtn = document.querySelector("#generate");

// add event listener to the "generate" button-- when clicked it triggers "writePassword" function
generateBtn.addEventListener("click", writePassword);

// this function writes the password to an HTML input field with the ID "password".
function writePassword() {
  // use prompt to ask for preferred password length-- store in var "passwordLength"
  var passwordLength = prompt("How many characters do you want your password to be? (Choose between 8 and 128)");

  // check if user selected length is between 8 and 128-- If it's not, alert & exit
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a valid password length between 8 and 128 characters.");
    return;
  }

  // prompt user character types to include in the password-- store responses in vars
  var includeLowercase = confirm("Do you want to include lowercase letters?\n\nOK for yes, Cancel for no.");
  var includeUppercase = confirm("Do you want to include uppercase letters?\n\nOK for yes, Cancel for no.");
  var includeNumeric = confirm("Do you want to include numbers?\n\nOK for yes, Cancel for no.");
  var includeSpecial = confirm("Do you want to include special characters?\n\nOK for yes, Cancel for no.");

  // ensure user selected at least one char type. If not-- alert and exit
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }

  // define character groups based on user selection
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  // create a string "allChars" to hold selected chars based on the user selection
  var allChars = "";
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecial) allChars += specialChars;

  // generate password using a loop -- iterate numbrer of times as specified password length.
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  // display the generated password by selecting an HTML element with the ID "password" and set its "value" property to the generated password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}