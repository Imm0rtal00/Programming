// Loops and Strings, Chapter 3

// for loop
for (let i = 1; i <= 10; i++) {
    console.log("for loop!");
}

// /* Infinite loop, here the condition says if j is greater than
//    or equals to 0 the loop will go on which is always true. */
for (let j = 1; j >= 0; j++) {
    console.log("It's an infinite loop!");
}

// while loop
let k = 1;

while (k <= 10) {
    console.log("It's a while loop!");
    k++;
}

// do-while loop

let l = 1;

do {
    console.log("It's a do-while loop!");
    l++;
} while (l <= 10);

// for-of loop
//This is a good example how we can count the number of letters of a string. 
let str = "cosmos";
let size = 0;

for (let val of str) {
    console.log("val =", val);
    size++;
}

console.log("Size of string:", size);


// for-in loop

let student = {
    name: "andromeda",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};

for (let key in student) {
    console.log("key:", key, " value: ", student[key]);
}

