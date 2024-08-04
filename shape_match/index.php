<?php
$currentLevel = 1; // Set the initial level
$maxLevels = 10; // Set the maximum number of levels
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Village Fairy Tale Shape Matching Game</title>
</head>
<body>
    <img id="logo-image" src="./pictures/logo.png" alt="logo Image">
    <img id="bunny-image" src="./pictures/turtle.png" alt="Bunny Image">
    <div id="game-container">
        <div id="level-display"></div>
        <div id="shape-display" class="splash"></div>
        <div id="objects-container"></div>
        <div id="message-display"></div>
        <div id="stars-display"></div>
        <audio id="correct-sound" src="sounds/correctsound.mp3"></audio>
        <audio id="incorrect-sound" src="sounds/incorrect.mp3"></audio>
    </div>
    <script src="script.js"></script>
</body>
</html>