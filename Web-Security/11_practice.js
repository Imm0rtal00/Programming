// Functions and Methods for Web Security Practice Exercises

//Function Declaration :
function calculateBountyTotal(bounties) {
    let total = 0;
    for (let i = 0; i < bounties.length; i++) {
        total += parseInt(bounties[i].replace(/,/g, ''));
    }
    return total;
}

//Function Expression :
const getHighestBounty = function(bounties) {
    let highest = 0;
    for (let i = 0; i < bounties.length; i++) {
        let bountyValue = parseInt(bounties[i].replace(/,/g, ''));
        if (bountyValue > highest) {
            highest = bountyValue;
        }
    }
    return highest;
};

//Arrow Function :
const formatBounty = (bounty) => {
    return `$${bounty}`;
};

//Using the functions :
let bounties = ["500", "1,000", "1,200", "2,000"];
let totalBounty = calculateBountyTotal(bounties);
console.log("Total Bounty: " + formatBounty(totalBounty));

let highestBounty = getHighestBounty(bounties);
console.log("Highest Bounty: " + formatBounty(highestBounty));

//End of Functions and Methods Practice Code