let currObstacleTile;
let currFairyTile;
let score = 0;
let totalMistakes = 0;
let currentLevel = 1;
let scoreRequirement = 20;
let gameStarted = false;

window.onload = function () {
    setGame();
}

function setGame() {
    showStartingMessage("Save the Fairy! Click only on the fairy to save her.");
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    // Initialize audio element for dragon sound
    let audioElement = document.createElement("audio");
    audioElement.id = "dragonSound";
    audioElement.src = "./sounds/incorrect.mp3";
    document.body.appendChild(audioElement);
}

function playLevel() {
    let shufflingTime = getShufflingTime();
    setTimeout(() => {
        if (currentLevel <= 5) {
            setObstacle();
            setFairy();
            showLevelMessage();
            playLevel();
        } else {
            showFinalScore();
            restartGame();
        }
    }, shufflingTime);
}

function showStartingMessage(message) {
    document.getElementById("level-message").innerHTML = `<div class="starting-message">${message}</div>`;
    setTimeout(() => {
        document.getElementById("level-message").innerHTML = "";
        gameStarted = true;
        playLevel();
    }, 5000);
}

function showCongratsMessage(message) {
    console.log(message);
    document.getElementById("level-message").innerHTML = `<div class="congrats-message">${message}</div>`;
    setTimeout(() => {
        document.getElementById("level-message").innerHTML = "";
    }, 10000);
}

function showLevelMessage() {
    scoreRequirement = 20 + currentLevel * 20;
    let levelMessage = `Level ${currentLevel} - Score: ${score} - Required: ${scoreRequirement}`;
    document.getElementById("level-message").innerText = levelMessage;
}

function getShufflingTime() {
    let baseShufflingTime = 2500;
    if (currentLevel === 2 || currentLevel === 3) {
        baseShufflingTime = 3500;
    }
    else if (currentLevel === 4 || currentLevel === 5) {
        baseShufflingTime = 2000;
    }
    return baseShufflingTime + currentLevel * 500;
}

function levelUp() {
    showCongratsMessage(`Great job! Level ${currentLevel} Complete!`);
    currentLevel++;
    score = 0;
    playLevel();
}

function restartGame() {
    if (currentLevel > 5) {
        currentLevel = 1;
        totalMistakes = 0;
    }
    showCongratsMessage("Game Over. Restarting...");
    setTimeout(() => {
        scoreRequirement = 20;
        score = 0;
        showLevelMessage();
        playLevel();
    }, 3000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setObstacle() {
    if (currObstacleTile) {
        currObstacleTile.innerHTML = "";
    }
    let obstacle = document.createElement("img");
    obstacle.src = "./pictures/dragon.png";
    obstacle.addEventListener("click", increaseMistakes);

    let num = getRandomTile();
    if (currFairyTile && currFairyTile.id == num) {
        return setObstacle();
    }
    currObstacleTile = document.getElementById(num);
    currObstacleTile.appendChild(obstacle);
}

function setFairy() {
    if (currFairyTile) {
        currFairyTile.innerHTML = "";
    }
    let fairy = document.createElement("img");
    fairy.src = "./pictures/fairy_icon.png";

    let num = getRandomTile();
    if (currObstacleTile && currObstacleTile.id == num) {
        return setFairy();
    }
    currFairyTile = document.getElementById(num);
    currFairyTile.appendChild(fairy);
}

function selectTile() {
    if (!gameStarted) {
        return;
    }

    if (this == currFairyTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        if (score >= scoreRequirement) {
            levelUp();
        } else {
            showCongratsMessage("Hurray!");
        }
    }
}

function increaseMistakes() {
    totalMistakes++;
}
const user = getUrlParameter('user');
const activity = getUrlParameter('activity');
let starRating;
function showFinalScore() {
    if (currentLevel > 5) {
        
        if (totalMistakes <= 3) {
            starRating = '5 stars';
        } else if (totalMistakes <= 8) {
            starRating = '4 stars';
        } else if (totalMistakes <= 12) {
            starRating = '3 stars';
        } else if (totalMistakes <= 15) {
            starRating = '2 stars';
        } else {
            starRating = '1 star';
        }

        const starsMessage = `Congratulations! You've earned ${starRating}`;
        alert(starsMessage);
    }
    insertStarsInDatabase(starRating, user, activity);
}

function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function insertStarsInDatabase(stars, user, activity) {
    const insertStarsUrl = `update_stars.php?user=${user}&activity=${activity}`;

    fetch(insertStarsUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `stars=${encodeURIComponent(starRating)}&user=${encodeURIComponent(user)}&activity=${encodeURIComponent(activity)}`,
    })
    .then(response => {
        // You can handle the response if needed, but it's not crucial in this case
    })
    .catch(error => {
        console.error('Error inserting stars:', error);
    });
    
}