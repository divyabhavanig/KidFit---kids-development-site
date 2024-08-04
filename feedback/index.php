<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kidfit";

// Create connection
$con = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if the user is logged in
if (!isset($_SESSION['valid'])) {
    header("Location: index.php");
}

// Retrieve user information from the session
$id = $_SESSION['id'];
$query = mysqli_query($con, "SELECT * FROM user WHERE userID=$id");

while ($result = mysqli_fetch_assoc($query)) {
    $res_Uname = $result['username'];
    $res_Email = $result['email'];
    $res_Age = $result['age'];
    // No need to retrieve $res_id here, as it's already stored in $_SESSION['id']
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feedback Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <img id="logo-image" src="logo.png">
  <div class="feedback-container">
    <h2>Feedback Form</h2>
    <form id="feedbackForm">
    <input type="hidden" id="userIdInput" value="<?php echo $id; ?>">
      <label for="activity" style="display: block;">Select Activity:</label>
      <select id="activity" name="activity" class="activity-select">
        <!-- Assuming you have 15 activities -->
        <?php
          for ($i = 1; $i <= 15; $i++) {
            echo "<option value=\"$i\">Activity $i</option>";
          }
        ?>
      </select>

      <label for="comment" style="display: block;">Comments:</label>
      <textarea id="comment" name="comment" rows="4" class="comment-input" placeholder="Enter your comments..."></textarea>


      <input type="submit" value="Submit" class="submit-button">
    </form>

    <script src="script.js"></script>
  </div>
</body>
</html>
