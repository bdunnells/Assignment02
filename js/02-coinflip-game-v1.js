//The “Coin Flip” Game v1 (10 points)

//Usage: Use nested conditional statements

//In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:

//Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number:

//let randomNum = Math.round(Math.random())

//Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
//Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.
//If the result is heads and the user selects heads, display the following message within an alert:
//The flip was heads and you chose heads...you win!
//If the result is heads and the user selects tails, display the following message within an alert:
//The flip was heads but you chose tails...you lose!
//If the result is tails and the user selects heads, display the following message within an alert:
//The flip was tails but you chose heads...you lose!
//If the result is tails and the user selects tails, display the following message within an alert:
//The flip was tails and you chose tails...you win!
//
// Import and initialize prompt-sync
const prompt = require('prompt-sync')();

//By default, running Math.random() returns a float like 0.413592. If you need a whole number, 
// you must multiply it by your desired range and round it down using Math.floor().
function getNewRandom() {
    return Math.floor(Math.random() * 10)
    //return Math.round(Math.random())
}

let coinFlip = parseInt(getNewRandom())
console.log("The random number of coinFlip = ", +coinFlip, "\n")

let choice = prompt("Head or Tail? ")
console.log(`You choose: ${choice}`);
console.log()

if (coinFlip > 10) {
    if (choice === "head"){
        //console.log("The flip was heads and you chose heads...you win!")
        alert("The flip was heads and you chose heads...you win!")
    } else {
        //console.log("The flip was heads but you chose tails...you lose!")
        alert("The flip was heads but you chose tails...you lose!")
    }
} else {
    if (choice === "tail"){
        //console.log("The flip was tails and you chose tails...you win!")
        alert("The flip was tails and you chose tails...you win!")
    } else {
        //console.log("The flip was tails but you chose heads...you lose!")
        alert("The flip was tails but you chose heads...you lose!")
    }   
}