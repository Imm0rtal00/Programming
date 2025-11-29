// Direct object model
const user = {
    name: "Alice",
    role: "admin"
};

// Function to change user role
function changeUserRole(newRole) {
    user.role = newRole;
}

// Simulate an attack by changing the user role
changeUserRole("superadmin");

console.log(`User role changed to: ${user.role}`); // Output: User role changed to: superadmin

// Secure version using Object.freeze
const secureUser = Object.freeze({
    name: "Alice",
    role: "admin"
});

// Function to attempt to change user role
function attemptChangeUserRole(newRole) {
    secureUser.role = newRole; // This will fail silently or throw an error in strict mode
}

// Simulate an attack by attempting to change the user role
attemptChangeUserRole("superadmin");

console.log(`Secure user role remains: ${secureUser.role}`); // Output: Secure user role remains: admin

// Using a closure to encapsulate user data
function createUser(name, role) {
    let userRole = role;

    return {
        getName: function() {
            return name;
        },
        getRole: function() {
            return userRole;
        },
        changeRole: function(newRole) {
            userRole = newRole;
        }
    };
}

const closedUser = createUser("Alice", "admin");

// Attempt to change role through the provided method
closedUser.changeRole("superadmin");

console.log(`Closed user role changed to: ${closedUser.getRole()}`); // Output: Closed user role changed to: superadmin

// Attempt to directly access userRole (not possible)
// console.log(closedUser.userRole); // Undefined   
// The userRole variable is not accessible from outside the closure

// Arrow function practice
const arrowSum = (a, b) => a + b;
console.log(arrowSum(10, 20)); // Output: 30




//--------------------------------------------------------------------------------------------------------------------------------------------

// sum function
function sum(a, b) {
    return a + b;
}
console.log(sum(60, 9));

// arrow function version 
const arrowsum = (a, b) => {
    return a + b;
};
console.log(arrowsum(3,5));

