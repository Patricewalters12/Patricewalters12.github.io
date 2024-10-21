// Sample users with usernames and passwords
const users = [
    { username: "paidge", password: "password" },
    { username: "durel", password: "12345678" },
    { username: "khale", password: "abcdefgh" },
    { username: "family", password: "mypassword" }
];

let attemptCount = 0;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password match any user
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = "productpage.html"; // Redirect to products page
    } else {
        attemptCount++;
        alert("Invalid username or password. Attempt " + attemptCount + " of 3.");
        
        // Check if attempts exceed 3
        if (attemptCount >= 3) {
            window.location.href = "error.html"; // Redirect to error page after 3 attempts
        }
    }
});

