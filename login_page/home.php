<?php
session_start();

include("php/config.php");
if (!isset($_SESSION['valid'])) {
    header("Location: index.php");
    exit();
}

$id = $_SESSION['id'];

// Count user entries in user_activities
$entryCountQuery = mysqli_query($con, "SELECT COUNT(*) AS entryCount FROM user_activities WHERE userID = $id");
$entryCountResult = mysqli_fetch_assoc($entryCountQuery);
$userEntryCount = $entryCountResult['entryCount'];

// Determine badge based on entry count
$badgeAchievementIDs = [];

if ($userEntryCount >= 15) {
    // User has completed 15 activities, add all 5 badges
    $badgeAchievementIDs = [1, 2, 3, 4, 5];
} elseif ($userEntryCount >= 12) {
    // User has completed 12-14 activities, add 1-4 badges
    $badgeAchievementIDs = [1, 2, 3, 4];
} elseif ($userEntryCount >= 9) {
    // User has completed 9-11 activities, add 1-3 badges
    $badgeAchievementIDs = [1, 2, 3];
} elseif ($userEntryCount >= 6) {
    // User has completed 6-8 activities, add 1-2 badges
    $badgeAchievementIDs = [1, 2];
} elseif ($userEntryCount >= 3) {
    // User has completed 3-5 activities, add badge 1
    $badgeAchievementIDs = [1];
}

// Insert relevant badge details into achievements table (modified)
foreach ($badgeAchievementIDs as $badgeAchievementID) {
    // Check if the user already has the badge or higher-level badge
    $checkBadgeQuery = mysqli_query($con, "SELECT * FROM achievements WHERE userID = $id AND achievementID = $badgeAchievementID");

    if (mysqli_num_rows($checkBadgeQuery) == 0) {
        // User does not have the badge, insert into achievements table
        $dateCompleted = date("Y-m-d H:i:s");
        mysqli_query($con, "INSERT INTO achievements (achievementID, userID, date_completed) VALUES ('$badgeAchievementID', '$id', '$dateCompleted')");
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <title>Home</title>
</head>

<body>
    <div class="nav">
        <div class="logo">
            <p>
                <img src="logo.png" id="logo-image">
            </p>
        </div>

        <div class="right-links">
            <?php
            $id = $_SESSION['id'];
            $query = mysqli_query($con, "SELECT * FROM user WHERE userID=$id");

            while ($result = mysqli_fetch_assoc($query)) {
                $res_Uname = $result['username'];
                $res_Email = $result['email'];
                $res_Age = $result['age'];
                $res_id = $result['userID'];
            }

            echo "<a href='edit.php?Id=$res_id'>Change Profile</a>";
            echo "<a href='../homepage/home.php?user=$res_id'>Home</a>";
            ?>

            <a href="php/logout.php">
                <button class="btn">Log Out</button>
            </a>
        </div>
    </div>
    
    <main>
        <div class="dashboard">
            <div class="main-box top">
                <div class="top">
                    <div class="box">
                        <p>Hello <b><?php echo $res_Uname ?></b>, Welcome</p>
                        <p>Your email is <b><?php echo $res_Email ?></b>.</p>
                        <p>And you are <b><?php echo $res_Age ?> years old</b>.</p>
                    </div>
                </div>
            </div>

            <!-- Achievements Section -->
            <div class="achievements" >
                <div class="atext">
                <h2>Your Achievements</h2>
                </div>
                <div class="abadges">
                <?php
                // Fetch and display all badges earned by the user
                $allBadgesQuery = mysqli_query($con, "SELECT * FROM badges WHERE achievementID IN (
                    SELECT achievementID FROM achievements WHERE userID = $id
                )");

                while ($badgeResult = mysqli_fetch_assoc($allBadgesQuery)) {
                    $badgeName = $badgeResult['achievement_name'];
                    $badgeImage = $badgeResult['badge'];

                    echo "<div class='badge'>";
                    echo "<p><b>$badgeName</b></p>";
                    echo "<img src='data:image/png;base64," . base64_encode($badgeImage) . "' alt='$badgeName'>";
                    echo "</div>";
                }

                if (mysqli_num_rows($allBadgesQuery) == 0) {
                    echo "<p>Complete more activities to earn badges. <a href='../journey.php?user=$res_id'>Go to Journey Page</a></p>";
                }
                ?>
                </div>
            </div>
        </div>
    </main>
</body>

</html>
