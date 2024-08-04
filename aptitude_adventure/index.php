<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Aptitude Game</title>
</head>
<body>
    <img id="logo-image" src="logo.png">
    
    <div id="quiz-container">
        <h1>Aptitude Challenge</h1>
        <div id="question-container">
            <p id="question">Loading Question...</p>
        </div>
        <div id="answer-buttons" class="btn-container">
            <!-- Answer buttons will be dynamically populated here -->
        </div>
        <button id="next-button" class="btn" onclick="nextQuestion()">Next</button>
    </div>
    
    <img src="fox.png" class="outer">

    <script src="script.js"></script>
</body>
</html>
