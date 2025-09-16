// Write your solution in this file!
// Declare customerName in the global scope
var customerName = 'bob';

// Function that uppercases customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer in the global scope (but don’t assign yet)
var bestCustomer;

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavorite in global scope with const
const leastFavoriteCustomer = 'somebody';

// Function that tries to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; // ❌ This will throw error (on purpose for test)
}

// Export for testing
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer,
  leastFavoriteCustomer
};

