<?php
$currentLevel = 1; // Set the initial level
$maxLevels = 10; // Set the maximum number of levels
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Color Identification Game</title>
</head>
<body>
    <img id="logo-image" src="./pictures/logo.png" alt="logo Image">
    <img id="bunny-image" src="./pictures/bunny.png" alt="Bunny Image">
    <div id="game-container">
        <div id="level-display"></div>
        <div id="color-display" class="border-transition"></div>
        <div id="objects-container"></div>
        <div id="message-display"></div>
        <audio id="correct-sound" src="sounds/correct.mp3"></audio>
        <audio id="incorrect-sound" src="sounds/incorrect.mp3"></audio>
        <div id="stars-display"></div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
