<?php
$currentLevel = 1; // Set the initial level
$maxLevels = 5; // Set the maximum number of levels
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Save the Fairy</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <img id="logo-image" src="./pictures/logo.png" alt="logo Image">
    <img id="bunny-image" src="./pictures/prince.png" alt="Bunny Image">
    <img id="dragon-image" src="./pictures/dragon_ch.png" alt="Dragon Image">
    <div class="game-container">
        <h1>Save the Fairy</h1>
        <h2 id="score">0</h2>
        <div id="board"></div>
        <div id="level-message"></div>
    </div>
    <div id="message-display"></div>
    <script src="script.js" defer></script>
</body>
</html>

