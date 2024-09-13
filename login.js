document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Get form values
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            // Basic validation
            if (email === '' || password === '') {
                alert('Please fill out both fields.');
                return;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Password validation
            // Regex for password: At least 8 characters, containing letters, numbers, and special characters
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordPattern.test(password)) {
                alert('Password must be at least 8 characters long and include letters, numbers, and special characters.');
                return;
            }

            // If all validations pass
            alert('Login successful! Redirecting...');

            // Simulate redirection (replace with actual redirection or server-side handling)
            setTimeout(() => {
                window.location.href = 'dashboard.html'; // Redirect to dashboard or appropriate page
            }, 1000);
        });
    } else {
        console.error('Form not found');
    }
});
