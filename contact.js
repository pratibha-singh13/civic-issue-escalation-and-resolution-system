document.addEventListener('DOMContentLoaded', function () {
    // Ensure that the form element exists before adding the event listener
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission behavior

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple validation for empty fields
            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields.');
                return;
            }

            // Name validation (no numbers or special characters, reasonable length)
            const namePattern = /^[A-Za-z\s]+$/;
            if (!namePattern.test(name)) {
                alert('Please enter a valid name (letters and spaces only).');
                return;
            }
            if (name.length < 3) {
                alert('Name must be at least 3 characters long.');
                return;
            }

            // Email validation (basic pattern)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Display success message
            alert('Thank you, ' + name + '! Your message has been sent successfully.');

            // Optionally, reset the form
            contactForm.reset();
        });
    } else {
        console.error('Form not found');
    }
});
