
document.addEventListener('DOMContentLoaded', function () {
    const reportForm = document.querySelector('form');

    if (reportForm) {
        reportForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Get form values
            const title = document.getElementById('title').value.trim();
            const description = document.getElementById('description').value.trim();
            const location = document.getElementById('location').value.trim();
            const category = document.getElementById('category').value;
            const imageInput = document.getElementById('image');
            const image = imageInput.files[0];

            // Helper function to check if the string is alphanumeric or alphabetic
            function isAlphaNumeric(str) {
                return /^[a-zA-Z0-9\s]+$/.test(str); // Allow alphanumeric characters and spaces
            }

            // Basic validation
            if (title === '' || description === '' || location === '') {
                alert('Please fill out all required fields.');
                return;
            }

            // Title validation: Must be alphanumeric or alphabetic and at least 5 characters long
            if (!isAlphaNumeric(title) || title.length < 5) {
                alert('The issue title must be at least 5 characters long and contain only alphabets or alphanumeric characters.');
                return;
            }

            // Description validation: Must be alphanumeric or alphabetic and at least 10 characters long
            if (!isAlphaNumeric(description) || description.length < 10) {
                alert('The description must be at least 10 characters long and contain only alphabets or alphanumeric characters.');
                return;
            }

            // Location validation: Must be alphanumeric or alphabetic and at least 5 characters long
            if (!isAlphaNumeric(location) || location.length < 5) {
                alert('The location must be at least 5 characters long and contain only alphabets or alphanumeric characters.');
                return;
            }

            // Image validation: Check if a file is selected and if it's an image
            if (!image) {
                alert('Please upload an image.');
                return;
            }

            const validImageTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
            if (!validImageTypes.includes(image.type)) {
                alert('Please upload a valid image file (JPEG, PNG, SVG).');
                return;
            }

            // Display success message (for now)
            alert('Your issue has been successfully reported!');

            // Optionally reset the form after successful submission
            reportForm.reset();
        });
    } else {
        console.error('Form not found');
    }
});




