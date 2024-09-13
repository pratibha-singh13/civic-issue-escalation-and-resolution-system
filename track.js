
document.addEventListener('DOMContentLoaded', function () {
    const trackButton = document.getElementById('track-button');
    const trackNumberInput = document.getElementById('track-number');
    const issueDetails = document.getElementById('issue-details');
    const issueStatus = document.getElementById('issue-status');
    const issueDescription = document.getElementById('issue-description');

    // Simulate issue data (in a real application, fetch from a backend)
    const issues = {
        '12345': { title: 'Broken Streetlight', status: 'Pending', description: 'The streetlight on Elm Street is broken.' },
        '67890': { title: 'Pothole on Main St', status: 'Resolved', description: 'Pothole fixed on Main Street.' }
    };

    trackButton.addEventListener('click', function () {
        const trackNumber = trackNumberInput.value.trim();

        // Simulate fetching issue data
        const issue = issues[trackNumber];

        if (issue) {
            issueDetails.classList.remove('hidden');
            issueStatus.textContent = `Status: ${issue.status}`;
            issueDescription.textContent = `Description: ${issue.description}`;
        } else {
            alert('No issue found with that tracking number.');
            issueDetails.classList.add('hidden');
        }
    });
});
