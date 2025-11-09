// #strings
/* .length is a string length counting property not a method. 
so does it doesn't contains () brackets like .trim and other string methods*/

// let str1 = "no reservation";
// let str2 = "joe black";
// let str3 = "titanic";
// with variable name of string and .length you can see the length of a string

// console.log("Length of str1: " + str1.length + "\n" +
//     "Length of str2: " + str2.length + "\n" +
//     "Length of str3: " + str3.length + "\n");
// 
// Template Literals, these are simpler and standard method of using string
// Example 1:- We will print above .length wit template literal method.

// console.log(`Length of str1: ${str1.length}
// Length of str2: ${str2.length}
// Length of str3: ${str3.length}`);

// // Template literals ex 2: // it can also be used for multi line string variable

// let specialString = `this is a
// multiline example
// of termplate literals`;

// console.log(`${specialString}`);  // here it will print exactly like written in variable.

// example 2


// #String Methods in JS:-

// .trim() String Method
let permit = "     No Entry      ";
console.log(permit.trim());   // it will remove extra spaces from starting and ending of string

// .toUpperCase() String Method
let movieName = "inception";
console.log(movieName.toUpperCase());  // it will convert all letters to uppercase

