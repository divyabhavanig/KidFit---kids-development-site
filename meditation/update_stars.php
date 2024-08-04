<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kidfit"; // Replace with your actual database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if userID and activityID are set in the URL
if (isset($_GET['user']) && isset($_GET['activity'])) {
    $userID = $_GET['user'];
    $activityID = $_GET['activity'];

    $stars = 5; // Replace with the actual stars value
    $dateCompleted = date("Y-m-d H:i:s");

    $checkSql = "SELECT * FROM user_activities WHERE userID = ? AND activityID = ?";
    $stmtCheck = $conn->prepare($checkSql);
    $stmtCheck->bind_param("ii", $userID, $activityID);
    $stmtCheck->execute();
    $result = $stmtCheck->get_result();

    if ($result === FALSE) {
        die("Error checking existing entry: " . $conn->error);
    }

    if ($result->num_rows > 0) {
        $updateSql = "UPDATE user_activities SET stars = ?, date_completed = ? WHERE userID = ? AND activityID = ?";
        $stmtUpdate = $conn->prepare($updateSql);
        $stmtUpdate->bind_param("ssii", $stars, $dateCompleted, $userID, $activityID);

        if ($stmtUpdate->execute()) {
            echo "Update successful";
        } else {
            die("Error updating entry: " . $stmtUpdate->error);
        }

        $stmtUpdate->close();
    } else {
        // Use prepared statement for INSERT query
        $insertSql = "INSERT INTO user_activities (userID, activityID, stars, date_completed) VALUES (?, ?, ?, ?)";
        $stmtInsert = $conn->prepare($insertSql);
        $stmtInsert->bind_param("iiss", $userID, $activityID, $stars, $dateCompleted);

        if ($stmtInsert->execute()) {
            echo "Insert successful";
        } else {
            die("Error adding new entry: " . $stmtInsert->error);
        }

        $stmtInsert->close();
    }

    $stmtCheck->close();
} else {
    echo "User ID or activity ID not received.";
}

$conn->close();
?>
