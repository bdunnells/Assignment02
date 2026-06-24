/*
The “Coin Flip Streak” Game (10 points)

In this part of the assignment you will explore what you’ve learned so far about variables, 
do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. 
The point of this simple game is to see what kind of streak you can get to (how many times “Heads” 
comes up in a row before “Tails” does to end the game). To complete the game follow the steps 
outlined below:

Begin your application by declaring a variable called coinFlip. Do not assign the variable a number 
just yet.
Create a do while loop.
Within the do while loop assign a randomly generated number to You will have to use the same Math 
formula that you used in the previous assignment to get this number.
Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into 
the console window. If it’s 1, write out “Tails” into the console window.
Set the condition of the do while loop to end once the coinFlip becomes “Tails”.
*/
function getNewRandom() {
    return Math.round(Math.random())
}
let cnt = 0
let coinFlip = parseInt(getNewRandom())

do {
  
    //console.log("The random number of coinFlip = ", +coinFlip, "\n")
    if (coinFlip === 0) {
        console.log("Heads")
    } else if (coinFlip === 1) {
        console.log("Tails")
        break;
    } 
    //console.log('cnt = ', +cnt)
    cnt++;
} while (cnt < 10) //counter = 10 as an example