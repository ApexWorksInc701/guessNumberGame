// this app allows users to guess a number within a given range of numbers
console.log("Number Guess Game");
console.log("-------------------");

// prompting user to guess a number between 1 and 2
var min = 1; // minimum number
var max = 2; // maximum number
var points = 0; // points scored by user
var gameStatus = 0; // 0 means keep running the game
var gameLevel = 1; // initiating the game

// prompting user for his username
var username = prompt("Enter username: ");
//var cookieName = "username";

// saving username in cookies
//let saveCookie = (cookieName, username) => {
//  document.cookie = cookieName + "=" + username;
//  return "Username saved in cookies!";
//}
  
// Welcoming user
console.log("Welcome, " + username + "!"); 
// running the game
runGame(gameLevel, gameStatus); 

function runGame(gameLevel, gameStatus) {
  // running the game
  while(gameStatus >= 0 && gameStatus != 9) {
  console.log("\nLevel " + gameLevel);
  console.log("---------");
  guessedNumber = prompt("Guess a number from 1 - " + (gameLevel+1) + ": ");
  guessedNumber = Number(guessedNumber);
  randomNumber = getRandomNumber(min, max);
  console.log("Your Guess: ", guessedNumber, "Answer: ", randomNumber);
  // correct guess
  if (randomNumber == guessedNumber){
      console.log("Correct for 3 points!");
      points += 3;
      console.log("Total Points: ", points);
      gameLevel += 1; // moving to the next level in the game
      max += 1 // increasing the range of numbers
  } else {
    // wrong guess
    console.log("Sorry, you missed it!\n");
    gameStatus = prompt("Press 9 to quit or any positive integer to continue! "); 
    gameStatus = Number(gameStatus); // converting user input into number
    }
  }
// error handling
if(gameStatus == 9){ // user requested to end the game
    console.log("Game Over!");
    var myCookie = getCookie("username");
    console.log(myCookie);
  } else { // user entered a number other than 1 or 9
    console.log("Game crashed, kindly restart!")
  } 
}

// random number generator for a given range of numbers
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

