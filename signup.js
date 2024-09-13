document.addEventListener('DOMContentLoaded', function () {
    const citizenForm = document.querySelector('form[action="citizen-dashboard.html"]');
    const leaderForm = document.querySelector('form[action="leader-dashboard.html"]');

    function validateName(name) {
        // Check if name contains only alphabets (including spaces)
        const namePattern = /^[A-Za-z\s]+$/;
        return namePattern.test(name);
    }

    if (citizenForm) {
        citizenForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            // Basic validation
            if (name === '' || email === '' || password === '') {
                alert('Please fill out all fields.');
                return;
            }

            // Name validation
            if (!validateName(name)) {
                alert('Name can only contain alphabets and spaces.');
                return;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Password validation
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordPattern.test(password)) {
                alert('Password must be at least 8 characters long and include letters, numbers, and special characters.');
                return;
            }

            // If all validations pass
            alert('Sign Up successful! Redirecting...');

            // Simulate redirection (replace with actual redirection or server-side handling)
            setTimeout(() => {
                window.location.href = 'citizen-dashboard.html'; // Redirect to citizen dashboard or appropriate page
            }, 1000);
        });
    }

    if (leaderForm) {
        leaderForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Get form values
            const name = document.getElementById('name-leader').value.trim();
            const email = document.getElementById('email-leader').value.trim();
            const password = document.getElementById('password-leader').value.trim();
            const position = document.getElementById('position').value.trim();

            // Basic validation
            if (name === '' || email === '' || password === '' || position === '') {
                alert('Please fill out all fields.');
                return;
            }

            // Name validation
            if (!validateName(name)) {
                alert('Name can only contain alphabets and spaces.');
                return;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Password validation
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordPattern.test(password)) {
                alert('Password must be at least 8 characters long and include letters, numbers, and special characters.');
                return;
            }

            // If all validations pass
            alert('Sign Up successful! Redirecting...');

            // Simulate redirection (replace with actual redirection or server-side handling)
            setTimeout(() => {
                window.location.href = 'leader-dashboard.html'; // Redirect to leader dashboard or appropriate page
            }, 1000);
        });
    }
});
