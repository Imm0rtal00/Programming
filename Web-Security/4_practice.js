//OPERATORS Chapter 2

//Arithmetic Operators
let a = 7;
let b = 3;

console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);


//Unary Operators
let i = 1;
let d = 5;
console.log("i = ", i++); // It will still print 1 but from next line it will increase by 1
console.log("i = ", ++i); /* It will print 3 because original value is 1 and in previous step
we used post increment and in this step we used pre increment so after adding all it will be 3
*/

console.log("d = ", d--) // It will be 5, post decrement, and from next line it will be 4
console.log("d = ", --d) // It will be 3, Pre decrement, it will decrease one from previous step and one from this


// Assignment Operators
let p = 6;  // To assign value to a variable

p += 4;         // ex: p += 4 is same as p = p + 4, It's just a shortcut
p -= 3;         // ex: p -= 3 is same as p = p - 3
p *= 2;         // ex: p *= 2 is same as p = p * 2
p /= 3;         // ex: p /= 3 is same as p = p / 3
p %= 2;         // ex: p %= 2 is same as p = p % 2
p **= 3;        // ex: p **= 3 is same as p = p ** 3

console.log("p = p + 4 : ", p += 4);
console.log("p = p - 3 : ", p -= 3);
console.log("p = p * 2 : ", p *= 2);
console.log("p = p / 3 : ", p /= 3);
console.log("p = p % 2 : ", p %= 2);
console.log("p = p ** 3 : ", p **= 3);