// Assignment Code
const generateBtn = document.querySelector("#generate");

var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');

var getRandomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.Checked;
  var hasUpper = uppercaseEl.Checked;
  var hasNumber = numbersEl.Checked;
  var hasSymbol = symbolsEl.Checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber, 
    hasSymbol, 
    length
    );
});

// copy password to clipboard
password.addEventListener('click', ()=> {
  var textarea = document.createElement('textarea');
  var password = resultEl.innerText;

  if(!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.exactCommand('copy');
  textarea.remove();
})

function generatePassword(lower, upper, number, symbol, length) {


  let generatePassword = '';

  var typescount = lower + upper + number + symbol;

 // console.log('typesCount: ', typesCount);

  var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item) [0]
    );

  // console.log('typesArr: ', typesArr);

  if(typesCount === 0) {
    return '';
  }

for(let i = 0; i < length; i += typesCount) {
  typesArr.forEach(type => {
    var funcName = Object.keys(type)[0];

// console.log('funcName: ', funcName);

    generatedPassword += randomfunc[funcName]();
  });

}

var finalPassword = generatedPassword.slice(0, length);
return finalPassword;

}

function generatePassword() {
  // Most of the code will go inside this function!
  // returnprompt = window.prompt('How many caraters would you like your password to contain?');
var length = parseInt(
  prompt("How many caraters would you like your password to contain?")
)
console.log(length)

  // returnprompt  = window.prompt("click 'OK' to confirm including symbol characters");
  symbolPrompt = confirm("click 'OK' to confirm including symbol characters")
  
  console.log(symbolPrompt)

  // returnprompt  = window.prompt("click 'OK' to confirm including number characters");
NumberPrompt = confirm("click 'OK' to confirm including number characters")

console.log(NumberPrompt)

  // returnprompt  = window.prompt("click 'OK' to confirm including lowercase characters");
LowercasePrompt = confirm("click 'OK' to confirm including lowercase characters")

  console.log(LowercasePrompt)

  // returnprompt  = window.prompt("click 'OK' to confirm including uppercase characters");
  uppercasePrompt = confirm("click 'OK' to confirm including uppercase characters")

  console.log(uppercasePrompt)
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);