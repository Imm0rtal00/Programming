// // Conditional Statements

// // if-else condition
// let num = 10;

// if (num % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// // else-if condition
// let subscriptionType = "free"
// let ad;

// if (subscriptionType === "premium") {
//     ad = "disable"
//     console.log(ad);
// } else if (subscriptionType === "standard") {
//     ad = "disable"
//     console.log(ad);
// } else if (subscriptionType === "basic") {
//     ad = "enable"
//     console.log(ad);
// } else if (subscriptionType === "free") {
//     ad = "enable"
//     console.log(ad);
// } else {
//     console.log("Please choose correct plan")
// }

// Practice Problem - Grade Calculation

let score = prompt("What's your score?: ");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
    console.log("Your grade is:", grade);
} else if (score >= 70 && score <= 89) {
    grade = "B";
    console.log("Your grade is:", grade);
} else if (score >= 60 && score <= 69) {
    grade = "C";
    console.log("Your grade is:", grade);
} else if (score >= 50 && score <= 59) {
    grade = "D";
    console.log("Your grade is:", grade);
} else if (score >= 0 && score <= 49) {
    grade = "F";
    console.log("Your grade is:", grade);
} else {
    console.log("Please enter a valid score!")
}

// End of File