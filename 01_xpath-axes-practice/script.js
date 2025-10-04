// Example JS for dynamic interaction or console testing
console.log("XPath Axes Practice Page Loaded!");

// Example: highlight all table rows
const tableRows = document.querySelectorAll("#orders tbody tr");
tableRows.forEach((row, index) => {
    if (index % 2 === 0) {
        row.style.backgroundColor = "#c8e6c9";
    } else {
        row.style.backgroundColor = "#ffcdd2";
    }
});

// Example: add event listener to form submit
const form = document.getElementById("userForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form Submitted!");
});
