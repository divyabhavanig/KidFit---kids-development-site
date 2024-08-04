<?php
$currentLevel = 1; // Set the initial level
$maxLevels = 5; // Set the maximum number of levels
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Game</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <img id="logo-image" src="./pictures/logo.png" alt="logo Image">
    <img id="bunny-image" src="./pictures/elephant.png" alt="Bunny Image">
    <div class="game-container">
        <div id="message-display"></div>
        <div id="stars-display"></div>
         <div class="tiles"></div>
        
        <div class="info-container">
            <div class="header">
                <div class="level-info">Level: 1</div>
                
            </div>
  
        </div>
    </div>
    <script src="script.js" defer></script>
</body>
</html>
