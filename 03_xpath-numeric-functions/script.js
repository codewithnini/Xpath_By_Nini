console.log("XPath Numeric Functions Practice Loaded!");

// Example: calculate sum of cart items dynamically
const cartItems = document.querySelectorAll("#cart li");
let total = 0;
cartItems.forEach(item => total += parseFloat(item.textContent));
console.log("Cart total (calculated in JS):", total);
