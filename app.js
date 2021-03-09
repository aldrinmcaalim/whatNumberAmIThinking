/*
================================================================================== 
BASIC SUMMARY
==================================================================================
Random Number Generator Guessing Game

================================================================================== 
Steps
==================================================================================
1) Ask user for number range they would like to guess within.

2) Ask user for first guess:
    1) If first guess is correct, then tell user they are correct and end program
    2) If first guess is not correct, then request the user guess again
    3) If user wants to quit at anypoint, they should enter 'quit'

3) Once the correct answer is found, display the number of attempts made.
*/

let maximum = Number(prompt("Enter legal numerical character(s)"));
while (!maximum) {
    maximum = Number(prompt("Enter LEGAL numerical character(s)"));
}

// const "targetNumber" Has to be after the above while loop, probably due to the order.
// If const "targetNumber" were to be directly after let "maximum", then const "targetNumber" would probably have stored the invalid data item from let "maximum"
//That is why we must place const "targetNumber" after both the declaration of let "maximum" and the while loop that checks to make sure the data value given to us from the user is valid for our purposes
const targetNumber = Math.floor(Math.random() * maximum) + 1; 
console.log(targetNumber);
let guess = prompt("Enter your first guess");
if (guess == 'quit') {
    console.log("You quit before the first attempt.");
}
let attempts = 1;

while (+guess !== targetNumber) {
    if (guess === 'quit') {
        break;
    }
    
    attempts++;
    if (guess < targetNumber) {
        guess = prompt("Too Low. Guess again...");
    } else {
        guess = prompt("Too High. Guess again...");
    }
}

if (guess === 'quit') {
    console.log(`Ok you quit.`);
} else {
    if (attempts > 1) {
        console.log(`You got it after ${attempts} tries.`);
    } else {
        console.log(`You got it on the first try!`);
    }
}
