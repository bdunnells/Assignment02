//Larger or Smaller? (10 points)
//Usage: Use simple conditional statements
//Create an application that accepts two integers within two separate prompts. 
//Then, display only the larger of the two within the browser window. 
//Don’t forget to handle the fact that the two could be equal.

let int1 = parseInt(prompt("Enter the first integer: "))
let int2 = parseInt(prompt("Enter the second integer: "))

if (int1 > int2) {
    console.log("The first integer ${int1} is larger.")
}
if (int1 < int2) {
    console.log("The first integer ${int2} is larger.")
}
if (int1 === int2) {
    console.log("The first integer ${int1} is equal to the second integer ${int2}.")
}

