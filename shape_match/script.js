const shapeImages = {
    square: "shape_images/abstract-286.png",
    circle: "shape_images/circle.png",
    triangle: "shape_images/triangle.png",
    rectangle: "shape_images/rectangle.png",
    cylinder: "shape_images/cylinder.png",
};

const objects = {
    square: ["pillow", "bread", "window", "tv"],
    circle: ["ball", "apple", "donut", "plate"],
    triangle: ["teepee", "tree", "pizza", "cheese"],
    rectangle: ["book", "door", "chocolate", "pillow"],
    cylinder: ["bottle", "cake", "candle", "drum"],
};

const objectsWithFilenames = {
    square: ["pictures/square-pillow.png", "pictures/bread.png", "pictures/window.png", "pictures/tv.png"],
    circle: ["pictures/ball.png", "pictures/apple.png", "pictures/donut.png", "pictures/plate.png"],
    triangle: ["pictures/teepee.png", "pictures/tree.png", "pictures/pizza.png", "pictures/cheese.png"],
    rectangle: ["pictures/book.png", "pictures/door.png", "pictures/chocolate.png", "pictures/pillow.png"],
    cylinder: ["pictures/soda-can.png", "pictures/cake.png", "pictures/candles.png", "pictures/drum.png"],
};

let currentLevel = 1;
let currentShape;
let correctObject;
let mistakesCount = 0;
let totalMistakes = 0;

const levelDisplay = document.getElementById("level-display");
const shapeDisplay = document.getElementById("shape-display");
const objectsContainer = document.getElementById("objects-container");
const messageDisplay = document.getElementById("message-display");
const starsDisplay = document.getElementById("stars-display");

const correctSound = new Audio("sounds/correct.mp3");
const incorrectSound = new Audio("sounds/incorrect.mp3");

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function displayLevel() {
    levelDisplay.textContent = `Level: ${currentLevel}`;
}

function displayRandomShape() {
    currentShape = getRandomElement(Object.keys(shapeImages));
    shapeDisplay.style.backgroundImage = `url('${shapeImages[currentShape]}')`;
    correctObject = getRandomElement(objects[currentShape]);
}

function createObjectElements() {
    objectsContainer.innerHTML = "";
    const numObjects = currentLevel * 2; // Increase objects with level

    // Choose the correct shape and its corresponding object
    const correctShape = currentShape;
    const correctObject = getRandomElement(objects[correctShape]);

    // Create the correct object element
    const correctObjectElement = document.createElement("div");
    correctObjectElement.classList.add("object");
    correctObjectElement.style.backgroundImage = `url('${getRandomElement(objectsWithFilenames[correctShape])}')`;
    correctObjectElement.addEventListener("click", () => checkMatch(correctShape));
    objectsContainer.appendChild(correctObjectElement);

    // Create additional objects with different shapes
    const availableShapes = Object.keys(shapeImages).filter(shape => shape !== correctShape);

    for (let i = 1; i < numObjects; i++) {
        const objectShape = getRandomElement(availableShapes);
        const objectElement = document.createElement("div");
        objectElement.classList.add("object");

        // Check if the shape has filenames
        if (objectsWithFilenames[objectShape]) {
            const randomImage = getRandomElement(objectsWithFilenames[objectShape]);
            objectElement.style.backgroundImage = `url('${randomImage}')`;
        } else {
            console.error(`Filenames not found for shape: ${objectShape}`);
            return;
        }

        objectElement.addEventListener("click", () => checkMatch(objectShape));
        objectsContainer.appendChild(objectElement);
    }

    // Shuffle the objects
    const allObjects = Array.from(objectsContainer.children);
    allObjects.sort(() => Math.random() - 0.5);

    allObjects.forEach(object => {
        objectsContainer.appendChild(object);
    });
}

function checkMatch(selectedObjectShape) {
    if (selectedObjectShape === currentShape) {
        playSound(correctSound);
        alert("Correct! Well done!");
        nextLevel();
    } else {
        playSound(incorrectSound);
        alert("Oops! Try again.");
        mistakesCount++;
        totalMistakes++;
        
    }
}

function nextLevel() {
    currentLevel++;
    if (currentLevel <= 10) {
        displayLevel();
        displayRandomShape();
        createObjectElements();
    } else {
        showFinalScore();
        restartGame();
    }
}

function restartGame() {
    currentLevel = 1;
    mistakesCount = 0; // Reset mistakes count for each level
    totalMistakes = 0; // Reset total mistakes for the entire game
    displayLevel();
    displayRandomShape();
    createObjectElements();
    starsDisplay.textContent = ''; // Clear stars display
}
const user = getUrlParameter('user');
const activity = getUrlParameter('activity');
let starRating;
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
    insertStarsInDatabase(starRating, user, activity);
    document.getElementById('game-container').innerHTML = `
        <h1>Congratulations!</h1>
        <p>Star Rating: ${starRating}</p>
    `;
}

// Initial setup
displayLevel();
displayRandomShape();
createObjectElements();

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