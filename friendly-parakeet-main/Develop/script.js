// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  console.log(characteramount)
  passwordText.value = password;
};

const randomFunc = {
  lower: getRandomLowercase,
  upper: getRandomUppercase,
  number: getRandomNumbers,
  symbol: getRandomSymbols
};
  

//Generate password function
function generatePassword (lower, upper, number, symbol) {

  var characteramount = +window.prompt("How many characters would you like your password to be?");

  if(characteramount > 128 || characteramount < 8) {
    window.alert("Password must be less than 128 characters and more than 8 characters.");
  };

  //Lowercase Prompt
  var randomlowercaseprompt = window.prompt("Would you like lowercase characters in your password? Please type 'Yes' or 'No'");

  if(randomlowercaseprompt === "Yes" || randomlowercaseprompt === "YES" || randomlowercaseprompt === "yes"){
    var randomlowercasevalue = true;
  }
  
  else if( randomlowercaseprompt === 'No' || randomlowercaseprompt === 'NO' || randomlowercaseprompt === 'no'){
    var randomlowercasevalue = false;
  };

  console.log(randomlowercasevalue);

  //Uppercase Prompt
  var randomuppercaseprompt = window.prompt("Would you like uppercase characters in your password? Please type 'Yes' or 'No'");
  
  if(randomuppercaseprompt === "Yes" || randomuppercaseprompt === "YES" || randomuppercaseprompt === "yes"){
    var randomuppercasevalue = true;
    
  }

  else if(randomuppercaseprompt === "No" || randomuppercaseprompt === "NO" || randomuppercaseprompt === "no"){
    var randomuppercasevalue = false;
  };

  console.log(randomuppercasevalue);

    //Numbers Prompt
    var randomnumbersprompt = window.prompt("Would you like numbers in your password? Please type 'Yes' or 'No'");
  
    if(randomnumbersprompt === "Yes" || randomnumbersprompt === "YES" || randomnumbersprompt === "yes"){
      var randomnumbersvalue = true;
      
    }
  
    else if(randomnumbersprompt === "No" || randomnumbersprompt === "NO" || randomnumbersprompt === "no"){
      var randomnumbersvalue = false;
    };
  
    console.log(randomnumbersvalue);

      //Symbols Prompt
  var randomsymbolsprompt = window.prompt("Would you like special characters in your password? Please type 'Yes' or 'No'");
  
  if(randomsymbolsprompt === "Yes" || randomsymbolsprompt === "YES" || randomsymbolsprompt === "yes"){
    var randomsymbolsvalue = true;
  }

  else if(randomsymbolsprompt === "No" || randomsymbolsprompt === "NO" || randomsymbolsprompt === "no"){
    var randomsymbolsvalue = false;
  };

  console.log(randomsymbolsvalue);

  let generatedPassword = '';

  //Type Count
  var typesCount = randomlowercasevalue + randomuppercasevalue + randomnumbersvalue + randomsymbolsvalue;

  console.log('typesCount: ', typesCount);

  //Type Array
  var typesArr = [{ randomlowercasevalue }, { randomuppercasevalue }, { randomnumbersvalue }, { randomsymbolsvalue }].filter(
  //Filters out the "no" responses
    item => Object.values(item) [0],
  );

  console.log('typesArr: ', typesArr);

  if(typesCount === 0) {
    return '';
  };

  //STUCK ON GETTING ARRAY TO WORK
  for(let i = 0; i < characteramount; i += typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log("funcName: ", funcName)

      generatedPassword += randomFunc[funcName]();
    })
  }
}
//Lowercase Function
function getRandomLowercase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};
//Uppercase Function
function getRandomUppercase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};
//Numbers Function
function getRandomNumbers(){
  return String.fromCharCode(Math.floor(Math.random() * 10))
};
//Symbol Fuction
function getRandomSymbols(){
  var symbols = '!@#$%^&*(){}=<>/,.';
  return String.fromCharCode(Math.floor(Math.random() * symbols.length))
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
