//Arrays & it's Methods

let bounties = ["500, 1000, 1,500, 2,000"];

//Accessing Array Items :
let firstBounty = bounties[0]; // "500"
let secondBounty = bounties[1]; // "1000"

//Modifying Array Items :
bounties[2] = "1,200"; // Changes the third item to "1,200"


//#Array Methods :

//Array Properties and Methods :
let numberOfBounties = bounties.length; // 4

//Adding Items to an Array :
bounties.push("2,500"); // Adds "2,500" to the end of the array

//Removing Items from an Array :
let lastBounty = bounties.pop(); // Removes and returns the last item ("2,500")

// shift Method :
let firstRemovedBounty = bounties.shift(); // Removes and returns the first item ("500")

// unshift Method :
bounties.unshift("400"); // Adds "400" to the beginning of the array

// Slice Method :
let someBounties = bounties.slice(1, 3); // Creates a new array with items from index 1 to 2 (["1000", "1,200"])

// Splice Method :
bounties.splice(1, 1, "1,100"); // Removes 1 item at index 1 and adds "1,100" there

//Looping Through an Array :
for (let i = 0; i < bounties.length; i++) {
    console.log(bounties[i]);
}

//Using forEach method :
bounties.forEach(function (bounty) {
    console.log(bounty);
});

//Multidimensional Arrays :
let bountyMatrix = [
    ["500", "1000"],
    ["1500", "2000"]
];

//Accessing items in a multidimensional array :
let firstRowFirstBounty = bountyMatrix[0][0]; // "500"
let secondRowSecondBounty = bountyMatrix[1][1]; // "2000"

//Adding a new row to the multidimensional array :
bountyMatrix.push(["2500", "3000"]);

//Removing the last row from the multidimensional array :
let lastRow = bountyMatrix.pop(); // Removes and returns the last row (["2500", "3000"])
[85, 97, 44, 37, 76, 60]
//Looping through a multidimensional array :
for (let i = 0; i < bountyMatrix.length; i++) {
    for (let j = 0; j < bountyMatrix[i].length; j++) {
        console.log(bountyMatrix[i][j]);
    }
}

//Using forEach method for multidimensional array :
bountyMatrix.forEach(function (row) {
    row.forEach(function (bounty) {
        console.log(bounty);
    });
});

//End of Arrays Practice Code





/* For a given array with marks fo students -> [85, 97, 44, 37, 76, 60] 
Find the average marks of the entire class. */

let marks = [85, 97, 44, 37, 76, 60];
sum = 0;
for (val of marks) {
    sum += val;
}
console.log(sum);

avg = sum / marks.length;
console.log(`Avg marks of class = ${avg}`);

// End of Practice Code


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.splice(0, 1);
companies.splice(1, 1, "Ola");
companies.push("Amazon");
console.log(companies);