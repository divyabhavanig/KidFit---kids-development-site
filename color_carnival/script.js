const colors = ["red", "blue", "green", "yellow"];
const objects = {
    red: ["apple", "firetruck", "strawberry", "ladybug"],
    blue: ["blueberry", "butterfly", "umbrella", "dolphin"],
    green: ["parrot", "frog", "broccoli", "tree"],
    yellow: ["banana", "sunflower", "mango", "duck"]
};

const objectsWithFilenames = {
    red: ["apple.png", "firetruck.png", "strawberry.png", "ladybug.png"],
    blue: ["blueberry.png", "butterfly.png", "umbrella.png", "dolphin.png"],
    green: ["parrot.png", "frog.png", "broccoli.png", "tree.png"],
    yellow: ["banana.png", "sunflower.png", "mango.png", "duck.png"]
};

let currentLevel = 1;
let chancesLeft = 3;
let currentColor;
let currentObjects;
let totalMistakes = 0;
let starRating; // Declare starRating as a global variable

const levelDisplay = document.getElementById("level-display");
const colorDisplay = document.getElementById("color-display");
const objectsContainer = document.getElementById("objects-container");
const messageDisplay = document.getElementById("message-display");
const starsDisplay = document.getElementById("stars-display");

function displayMessage(message) {
    messageDisplay.textContent = message;
    messageDisplay.style.display = "block";

    setTimeout(() => {
        messageDisplay.textContent = "";
        messageDisplay.style.display = "none";
        if (message === "Correct! Well done!") {
            nextLevel();
        }
    }, 2000);
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function displayLevel() {
    levelDisplay.textContent = `Level: ${currentLevel}`;
}

function displayRandomColor() {
    currentColor = getRandomElement(colors);
    colorDisplay.style.backgroundColor = currentColor;
    currentObjects = objects[currentColor];
}

function createObjectElements() {
    objectsContainer.innerHTML = "";
    const numObjects = currentLevel * 2;

    const availableColors = colors.filter(color => color !== currentColor);
    for (let i = 0; i < numObjects - 1; i++) {
        const objectColor = getRandomElement(availableColors);
        const objectFilename = getRandomElement(objectsWithFilenames[objectColor]);

        const objectElement = document.createElement("div");
        objectElement.classList.add("object");

        const imageElement = document.createElement("img");
        const imageUrl = `pictures/${objectFilename}`;
        imageElement.src = imageUrl;
        objectElement.appendChild(imageElement);

        objectElement.addEventListener("click", () => checkMatch(objectColor));
        objectsContainer.appendChild(objectElement);
    }

    const correctObjectFilename = getRandomElement(objectsWithFilenames[currentColor]);
    const correctObjectElement = document.createElement("div");
    correctObjectElement.classList.add("object");
    const correctImageElement = document.createElement("img");
    correctImageElement.src = `pictures/${correctObjectFilename}`;
    correctObjectElement.appendChild(correctImageElement);
    correctObjectElement.addEventListener("click", () => checkMatch(currentColor));

    const allObjects = Array.from(objectsContainer.children);
    const randomPosition = Math.floor(Math.random() * numObjects);
    allObjects.splice(randomPosition, 0, correctObjectElement);

    allObjects.forEach(object => {
        objectsContainer.appendChild(object);
    });
}

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
}

function checkMatch(selectedObjectColor) {
    if (selectedObjectColor === currentColor) {
        playSound("correct-sound");
        displayMessage("Correct! Well done!");
    } else {
        playSound("incorrect-sound");
        displayMessage("Oops! Try again.");
        totalMistakes++;
    }
}

function nextLevel() {
    currentLevel++;
    if (currentLevel <= 10) {
        displayLevel();
        displayRandomColor();
        createObjectElements();
    } else {
        showFinalScore();
        restartGame();
    }
}

function restartGame() {
    currentLevel = 1;
    totalMistakes = 0;
    displayLevel();
    displayRandomColor();
    createObjectElements();
    starsDisplay.textContent = '';
}

function showFinalScore() {
    if (totalMistakes === 0) {
        starRating = '5 stars';
    } else if (totalMistakes <= 3) {
        starRating = '4 stars';
    } else if (totalMistakes <= 5) {
        starRating = '3 stars';
    } else {
        starRating = '1 star';
    }

    insertStarsInDatabase(starRating);

    document.getElementById('game-container').innerHTML = `
        <h1>Congratulations!</h1>
        <p>Star Rating: ${starRating}</p>
        <button id="go-to-journey-btn">Go to Journey Page</button>
    `;

    // Add event listener for the button
    const goToJourneyBtn = document.getElementById("go-to-journey-btn");
    goToJourneyBtn.addEventListener("click", goToHomePage);
}

function goToHomePage() {
    const userID = getUrlParameter('user');
    const url = `../journey.php?user=${userID}`;
    window.location.href = url;
}

function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function insertStarsInDatabase(stars) {
    const user = getUrlParameter('user');
    const activity = getUrlParameter('activity');
    
    const insertStarsUrl = `update_stars.php?user=${user}&activity=${activity}`;

    fetch(insertStarsUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `stars=${encodeURIComponent(stars)}&user=${encodeURIComponent(user)}&activity=${encodeURIComponent(activity)}`,
    })
    .then(response => {
        // Handle the response if needed
    })
    .catch(error => {
        console.error('Error inserting stars:', error);
    });
}

// Initial setup
displayLevel();
displayRandomColor();
createObjectElements();
