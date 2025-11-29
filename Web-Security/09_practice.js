// # String Methods Practice Questions

/* example 1: Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.*/

let firstName = prompt("What is your first name: ");
let lastName = prompt("What is your last name: ");
let fullName = firstName + lastName;
// let fullName = firstName + " " + lastName; // In normal cases we add space in bw like this

let userName = "@" + fullName.replace(/\s/g, '').toLowerCase() + fullName.length;
console.log(`Username: ${userName}`);


