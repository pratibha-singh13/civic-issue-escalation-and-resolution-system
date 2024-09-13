// main.js

// Basic form validation for signup/login pages (for simulation purposes)
function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Login successful!');
        // Simulate a successful login by setting a session
        sessionStorage.setItem('user', username);
        updateNavBar();
    }
}

// Function to update the navbar when user is logged in
function updateNavBar() {
    const user = sessionStorage.getItem('user');
    const loginLink = document.getElementById('login-link');
    const signUpLink = document.getElementById('signup-link');

    if (user) {
        loginLink.innerText = 'Logout';
        loginLink.href = '#';
        signUpLink.style.display = 'none';

        loginLink.addEventListener('click', function (event) {
            event.preventDefault();
            sessionStorage.clear(); // Logout the user
            alert('Logged out successfully!');
            window.location.reload(); // Reload the page
        });
    }
}

// Function to show alert when "Report an Issue" is clicked
// Wait for the DOM to load before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Select the button using its ID
    const reportBtn = document.getElementById("reportBtn");

    // Add a click event listener to the button
    reportBtn.addEventListener("click", function (event) {
        // Prevent the default behavior of navigating to the report page
        event.preventDefault();

        // Show the alert
        alert('You are now reporting an issue. Redirecting...');
    });
});


// Smooth scrolling to sections when clicking navbar links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the navbar based on session
window.onload = function () {
    updateNavBar();
}


