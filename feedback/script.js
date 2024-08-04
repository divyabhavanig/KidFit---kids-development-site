document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get values from form fields
  var activity = document.getElementById('activity').value;
  var comment = document.getElementById('comment').value;

  // Retrieve user ID from the hidden input field
  var user = document.getElementById('userIdInput').value;

  // Create an object with the form data
  var formData = {
    activity: activity,
    comment: comment
  };

  // Use fetch to send a POST request to the server
  fetch(`feedback.php?user=${user}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Display a feedback message
    console.log('Server Response:', data);

    // Redirect to the user dashboard if the submission was successful
    if (data.success) {
      console.log('Feedback submitted successfully!');
      alert('Feedback submitted successfully! Redirecting to the dashboard...');
      window.location.href = '../login_page/home.php';
    } else {
      console.error('Feedback submission failed:', data.message);
      alert('Feedback submission failed. Please try again.');
    }
  })
  .catch(error => {
    console.error('Fetch Error:', error);
    alert('Comment cannot be empty. Please try again.');
  });
});
