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
  <title>Math Smash: Animal Rescue</title>
</head>
<body>
  <img id="logo-image" src="./pictures/logo.png" alt="logo Image">
  <img id="koala-image" src="./pictures/koala.png" alt="Koala Image">
  <div id="game-container">
    <div id="level">Level: <span id="current-level">1</span></div>
    <div id="math-question">
      <div id="first-number"></div>
      <div id="operator"></div>
      <div id="second-number"></div>
    </div>
    <input type="text" id="answer-input" placeholder="Your Answer" />
    <button onclick="checkAnswer()">Submit</button>
    
    <div id="result"></div>
    <img src="pictures/locked-cage.png" alt="Locked Cage" id="locked-cage" class="cage-image" />
    <img src="pictures/released-animal.png" alt="Released Animal" id="released-animal" class="cage-image" style="display: none;" />
    <div id="hurray-message" style="display: none;">Hurray! You rescued all animals!</div>
    <div id="stars-display"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
