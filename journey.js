document.addEventListener('DOMContentLoaded', function () {
    var playButtons = document.querySelectorAll('.play-button');
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    var confirmBtn = document.getElementById('confirmBtn');
    var cancelBtn = document.getElementById('cancelBtn');

    playButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            overlay.style.display = 'block';
            popup.style.display = 'block';
            var link = this.getAttribute('data-link');
            confirmBtn.setAttribute('data-link', link);

            // Fetch activity details from the PHP file
            fetch('journey.php')
                .then(response => response.json())
                .then(data => {
                    // Use data to update activity details on the popup
                    var activityId = this.getAttribute('data-activity-id');
                    var activity = data.find(activity => activity.activityId == activityId);

                    // Update placeholders with fetched data
                    document.getElementById('popup-title').innerText = activity.activity_name;
                    document.getElementById('popup-description').innerText = activity.description;
                    document.getElementById('popup-difficulty').innerText = 'Difficulty: ' + activity.difficulty;
                })
                .catch(error => console.error('Error fetching activities:', error));
        });
    });

    confirmBtn.addEventListener('click', function () {
        var link = confirmBtn.getAttribute('data-link');
        window.location.href = link;
    });

    cancelBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });
});
