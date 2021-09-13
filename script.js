const generateBtn = document.querySelector("#generate");

const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIKJLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const chars = '!@#$%^&*(){}[]=<>/,.';

function makePassword() {
  var availableChars = ""
  var length = parseInt(
    prompt("Choose a password length between 8 to 128")
  )
  while ( length < 8 || length > 128) {
    length = parseInt(prompt("choose a password length between 8 to 128"))
  }

  var symbolPrompt = confirm("click 'OK' to confirm including symbol characters")
  if (symbolPrompt){ 
    availableChars+=chars
  }


  var NumberPrompt = confirm("click 'OK' to confirm including number characters")
  if (NumberPrompt) {
    availableChars+=numbers
  }

  var LowercasePrompt = confirm("click 'OK' to confirm including lowercase characters")
  if (LowercasePrompt) {
    availableChars+=lowerCaseChars
  }

  var uppercasePrompt = confirm("click 'OK' to confirm including uppercase characters")
  if (uppercasePrompt) {
    availableChars+=upperCaseChars
  }
  let password = "";
  for (i = 0; i < length; i++) {
    password+=availableChars[Math.floor(Math.random() * availableChars.length)]
  }
  return password;
}

 function getRandomLower() {/   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);/ }

 function getRandomUpper() {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

 function getRandomNumber() {
   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
 function getRandomSymbol() {
   var symbols = '!@#$%^&*(){}[]=<>/,.';
   return symbols[Math.floor(Math.random() * symbols.length)];
}

function writePassword() {
  const password = makePassword();
  console.log(password)
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
