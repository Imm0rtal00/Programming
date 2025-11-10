// Practice Qs 1
// Print all even numbers from 0 to 100.

for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log("even: ", num);
    }
}

// print all odd numbers from 0 to 100.

for (let odd = 0; odd <= 100; odd++) {
    if (odd % 2 === 1) {     // or (odd % 2 !== 0)
        console.log("odd:", odd);
    }
}

// Practice Qs 2
/* Create a game where you start with any random game number.
Ask the user to keep guessing the game number until the user enters correct value. */

let gameNum = 21;
let userNum = prompt("Guess a number:")

while (userNum != gameNum) {
    userNum = prompt("Sorry! You entered wrong number. Guess again : ");
}

console.log("Congratulations! You guessed right");
