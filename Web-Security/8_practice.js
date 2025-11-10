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

// .toLowerCase() String Method
let directorName = "CHRISTOPHER NOLAN";
console.log(directorName.toLowerCase()); // it will convert all letters to lowercase

// .slice() String Method
let film = "The Dark Knight";
console.log(film.slice(4, 8)); // it will extract letters from index 4 to index 7 (8-1)

// .replace() String Method
let actor = "Robert Downey Jr.";
console.log(actor.replace("Downey", "Smith")); // it will replace "Downey" with "Smith"
console.log(actor.replaceAll("o", "0")); // it will replace all "o" with "0"

// .includes() String Method
let franchise = "Marvel Cinematic Universe";
console.log(franchise.includes("Cinematic")); // it will return true if "Cinematic" is found in the string

// .indexOf() String Method
let character = "Tony Stark is Iron Man";
console.log(character.indexOf("Iron")); // it will return the starting index of "Iron" in the string

// .charAt() String Method
let quote = "To be or not to be";
console.log(quote.charAt(6)); // it will return the character at index 6