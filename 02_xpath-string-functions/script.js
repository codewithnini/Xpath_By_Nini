console.log("XPath String Functions Practice Loaded!");

// Simple visual demo
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Button clicked: " + btn.textContent.trim());
    });
});
