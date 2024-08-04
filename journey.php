<?php
// Retrieve the user ID from the URL
if (isset($_GET['user'])) {
    $userID = $_GET['user'];

    // Use $userID as needed in your journey page
} else {
    // Handle the case where user ID is not provided in the URL
    // You may want to redirect the user or show an error message
    header("Location: ../homepage/home.php"); // Redirect to the home page
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="journey.css">
    <title>KiDFit - Activity Selection</title>
</head>
<body>
    <header>
        <nav>
            <img src="./pictures/logo.png" alt="KiDFit logo">
            <ul>
                <!-- Modify the "Home" link to include the user ID -->
                <li><a href="./homepage/home.php?user=<?php echo $userID; ?>">Home</a></li>
            </ul>
        </nav>
    </header>
    <div class="container">
        <div class="content" id="levels-container">

            <?php
            // Assuming you have a database connection
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "kidfit";

            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Fetch activities from the database
            $sql = "SELECT activityId, activity_name, description, difficulty FROM activities";
            $result = $conn->query($sql);

            // Convert result to JSON for JavaScript consumption
            $activities = array();
            while ($row = $result->fetch_assoc()) {
                $activities[] = $row;
            }

            foreach ($activities as $activity) {
                ?>
                <div class="level activity-<?php echo $activity['activityId']; ?>">
                    <h2 id="popup-title"><?php echo $activity['activity_name']; ?></h2>
                    <p id="popup-description"><?php echo $activity['description']; ?></p>
                    <p id="popup-difficulty">Difficulty: <?php echo $activity['difficulty']; ?></p>
<!-- Modify the "Play" button in journey.php -->
<button class="play-button" data-link="<?php echo strtolower(str_replace(' ', '_', $activity['activity_name'])); ?>/index.php?user=<?php echo $userID; ?>&activity=<?php echo $activity['activityId']; ?>" data-activity-id="<?php echo $activity['activityId']; ?>" data-js-file="<?php echo strtolower(str_replace(' ', '_', $activity['activity_name'])); ?>/activity.js">Adventure Time</button>

                </div>
                <?php
            }

            $conn->close();
            ?>

        </div>
    </div>
    <div class="overlay" id="overlay"></div>
    <div class="popup-container" id="popup">
        <p>Are you sure you want to play this activity?</p>
        <button id="confirmBtn">Yes</button>
        <button id="cancelBtn">Cancel</button>
    </div>
    <footer>
        <p>&copy; 2024 KiDFit. All rights reserved.</p>
    </footer>

    <script src="journey.js"></script>
</body>
</html>
