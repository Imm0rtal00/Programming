// Conditional Statements

// if-else condition
let num = 10;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// else-if condition
let subscriptionType = "free"
let ad;

if (subscriptionType === "premium") {
    ad = "disable"
    console.log(ad);
} else if (subscriptionType === "standard") {
    ad = "disable"
    console.log(ad);
} else if (subscriptionType === "basic") {
    ad = "enable"
    console.log(ad);
} else if (subscriptionType === "free") {
    ad = "enable"
    console.log(ad);
} else {
    console.log("Please choose correct plan")
}


// switch-case condition
// example 1:

let day = 3;
let dayName;

switch (day) {
    case 1:        // the value and type of the switch cases should be same as of variable values.
        dayName = "Monday";
        console.log(`Today's Day is: ${dayName}`);
        break;
    case 2:
        dayName = "Tuesday";
        console.log(`Today's Day is: ${dayName}`);
        break;
    case 3:
        dayName = "Wednesday";
        console.log(`Today's Day is: ${dayName}`);
        break;
    case 4:
        dayName = "Thursday";
        console.log(`Today's Day is: ${dayName}`);
        break;
    case 5:
        dayName = "Friday";
        console.log(`Today's Day is: ${dayName}`);
        break;
    case 6:
        dayName = "Saturday";
        console.log(dayName);
        break;
    case 7:
        dayName = "Sunday";
        console.log(`Today's Day is: ${dayName}`);
        break;
    default:
        console.log("Please enter a valid day number (1-7)");
        break;
}

// example 2:

let fruit = "grapes";

switch (fruit) {
    case "banana":
        console.log("Banana is yellow");
        break;
    case "apple":
        console.log("Apple is red");
        break;
    case "mango":
        console.log("Mango is yellow");
        break;
    case "grapes":
        console.log("Grapes are green");
        break;
    default:
        console.log("Choose any of these fruits (apple, mango, banana and grapes)");
        break;
}

// Practice Problem - Grade Calculation

// let score = parseInt(prompt("What's your score?: ")); //Uncomment this line if you are taking input from browser environment.
let score = 97;
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