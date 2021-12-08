//Variables for each character type
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers ="0123456789".split("");
var symbols = "!@#$%^&*".split("");


//Generate password function
function generatePassword (characters) {
  
  var password = []
  
  var characteramount = +window.prompt("How many characters would you like your password to be?");
  
  if(characteramount > 128 || characteramount < 8) {
    window.alert("Password must be less than 128 characters and more than 8 characters.");
  };
  
  //Lowercase Prompt
  var randomlowercaseprompt = window.prompt("Would you like lowercase characters in your password? Please type 'Yes' or 'No'");
  
  if(randomlowercaseprompt === "Yes" || randomlowercaseprompt === "YES" || randomlowercaseprompt === "yes"){
    password = password.concat(lowercase);
    console.log(password)
  };
  
  //Uppercase Prompt
  var randomuppercaseprompt = window.prompt("Would you like uppercase characters in your password? Please type 'Yes' or 'No'");
  
  if(randomuppercaseprompt === "Yes" || randomuppercaseprompt === "YES" || randomuppercaseprompt === "yes"){
    password = password.concat(uppercase);
    console.log(password)
  };
  
  
  
  //Numbers Prompt
  var randomnumbersprompt = window.prompt("Would you like numbers in your password? Please type 'Yes' or 'No'");
  
  if(randomnumbersprompt === "Yes" || randomnumbersprompt === "YES" || randomnumbersprompt === "yes"){
    password = password.concat(numbers);
    console.log(password)
  };
  
  
  //Symbols Prompt
  var randomsymbolsprompt = window.prompt("Would you like special characters in your password? Please type 'Yes' or 'No'");
  
  if(randomsymbolsprompt === "Yes" || randomsymbolsprompt === "YES" || randomsymbolsprompt === "yes"){
    password = password.concat(symbols);
    console.log(password)
  };
  
  
  
  var result = "";
  //math random function needs to be broken up
  for ( var i = 0; i < characteramount; i++ ) {
    result += password[Math.floor(Math.random() * password.length)];
    console.log("Result password" + result);
  }
  
  return result;
};

// Selects the generate button from html
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Writes the completed password to the #password text area
function writePassword() {
  
  var password = generatePassword();
  var passwordtext = document.querySelector("#password");
  
  passwordtext.value = password;
  
};