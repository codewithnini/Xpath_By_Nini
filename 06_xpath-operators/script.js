console.log("XPath Operators Practice Loaded!");

// Example JS for arithmetic check
const nums = document.querySelectorAll("#numbers li");
let total = 0;
nums.forEach(n => total += parseInt(n.textContent));
console.log("Sum of numbers (for reference):", total);
