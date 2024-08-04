<?php
// Check if the user ID is present in the URL
if (!isset($_GET['user'])) {
    // Handle the case where the user ID is not provided
    echo json_encode(['success' => false, 'message' => 'User ID not provided']);
    exit;
}

// Retrieve the user ID from the URL
$userID = $_GET['user'];

// Assuming you have database connection code here
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kidfit";
$con = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Assuming you have received JSON data from the frontend
$input_data = json_decode(file_get_contents('php://input'), true);

// Extract form data
$activityID = $input_data['activity']; // Assuming 'activity' corresponds to 'activityID'
$commentText = $input_data['comment'];
$date_posted = date("Y-m-d H:i:s"); // Assuming you want to record the current date and time

// Use prepared statements to prevent SQL injection
$stmt = $con->prepare("INSERT INTO comments (userId, activityID, date_posted, commentText) VALUES (?, ?, ?, ?)");
$stmt->bind_param("iiss", $userID, $activityID, $date_posted, $commentText);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Feedback submitted successfully']);
} else {
    // Output detailed error information
    echo json_encode(['success' => false, 'message' => 'Failed to submit feedback', 'error' => mysqli_error($con)]);
}

$stmt->close();
$con->close();
?>
