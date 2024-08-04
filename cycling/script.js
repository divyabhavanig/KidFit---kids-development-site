document.addEventListener('DOMContentLoaded', function () {
    // Get user and activity parameters from the URL
    const user = getUrlParameter('user');
    const activity = getUrlParameter('activity');

    const submitButton = document.getElementById('submit-button');
    const checkbox = document.getElementById('cycling-checkbox');
    const congratsContainer = document.getElementById('congrats-container');
    const starRating = 5;

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        if (checkbox.checked) {
            // Show the congrats container
            congratsContainer.classList.remove('hidden');
            insertStarsInDatabase(starRating, user, activity);

            const goToHomePageBtn = document.createElement("button");
                goToHomePageBtn.innerText = "Go to Journey Page";
                goToHomePageBtn.addEventListener("click", goToHomePage);
                congratsContainer.appendChild(goToHomePageBtn);
            // Hide the congrats container after 5 seconds
            setTimeout(function () {
                congratsContainer.classList.add('hidden');
            }, 5000);
        } else {
            // Display an alert if the checkbox is not checked
            alert('Please check the "Did you try cycling?" checkbox before submitting.');
        }
    });

    function goToHomePage() {
        insertStarsInDatabase(starRating, user, activity);
    
        // Get the user parameter from the URL
        const userID = getUrlParameter('user');
    
        // Construct the URL with the correct user parameter
        const url = `../journey.php?user=${userID}`;
    
        // Redirect to the journey page
        window.location.href = url;
    }
    // Function to retrieve a parameter from the URL
    function getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Function to insert stars in the database
    function insertStarsInDatabase(stars, user, activity) {
        const insertStarsUrl = `update_stars.php?user=${user}&activity=${activity}`;

        fetch(insertStarsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'stars=' + encodeURIComponent(stars),
        })
        .then(response => {
            // You can handle the response if needed, but it's not crucial in this case
        })
        .catch(error => {
            console.error('Error inserting stars:', error);
        });
    }
});
