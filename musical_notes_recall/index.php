<?php
$currentLevel = 1; // Set the initial level
$maxLevels = 5; // Set the maximum number of levels
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Note Recall Challenge</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <img id="logo-image" src="logo.png">
    <div id="game-container">
        <h1>Note Recall Challenge</h1>
        <div id="note-display"></div>
        <div id="user-input">
            <button onclick="checkUserInput('Sa')">Sa</button>
            <button onclick="checkUserInput('Re')">Re</button>
            <button onclick="checkUserInput('Ga')">Ga</button>
            <button onclick="checkUserInput('Ma')">Ma</button>
            <button onclick="checkUserInput('Pa')">Pa</button>
            <button onclick="checkUserInput('Dha')">Dha</button>
            <button onclick="checkUserInput('Ni')">Ni</button>
            <button onclick="backspace()">Backspace</button>
            <button onclick="submitUserInput()">Submit</button>
           
        </div>
        <div id="feedback"></div>
        <div id="level-display">Level: <span id="current-level"><?php echo $currentLevel; ?></span></div>
    </div>

    <img src="penguins.png" class="outer">
    <script src="script.js"></script>
</body>

</html>
