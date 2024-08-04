const tilesContainer = document.querySelector(".tiles");
const levelInfoElement = document.querySelector(".level-info");
const messageDisplay = document.getElementById("message-display");

const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal", "darkorange", "mediumseagreen", "orchid", "saddlebrown"];
const tileCount = colors.length * 2; // Double the colors for pairs

// Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;
let clickCount = 0; // Total number of clicks
let currentLevel = 1; // Initial level
let totalMistakes = 0; // Total mistakes made during the game

function buildTile(color) {
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");

    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed");

        if (
            awaitingEndOfMove
            || revealed === "true"
            || element == activeTile
        ) {
            return;
        }

        clickCount++; // Increment total click count
        updateClickCount(); // Update the display of total click count

        // Reveal this color
        element.style.backgroundColor = color;
        console.log("Tile clicked:", color);

        if (!activeTile) {
            activeTile = element;
            console.log("First tile clicked:", color);
            return;
        }

        const colorToMatch = activeTile.getAttribute("data-color");

        if (colorToMatch === color) {
            element.setAttribute("data-revealed", "true");
            activeTile.setAttribute("data-revealed", "true");

            activeTile = null;
            awaitingEndOfMove = false;
            revealedCount += 2;

            if (revealedCount === tileCount) {
                if (currentLevel < 5) { // Adjusted to stop at level 5
                    // Move to the next level
                    currentLevel++;
                    startNewLevel();
                } else {
                    totalMistakes = calculateTotalMistakes();
                    const starRating = calculateStarRating(totalMistakes);
                    showFinalScore(starRating);
                    insertStarsInDatabase(starRating, user, activity);
                }
            }

            console.log("Match found!");
            return;
        }

        awaitingEndOfMove = true;

        setTimeout(() => {
            activeTile.style.backgroundColor = null;
            element.style.backgroundColor = null;
            element.setAttribute("data-revealed", "false"); // Reset revealed state

            awaitingEndOfMove = false;
            activeTile = null;

            console.log("Tiles reset after mismatch.");
        }, 1000);
    });

    return element;
}

// Function to start a new level
function startNewLevel() {
    // Reset game state for the new level
    revealedCount = 0;
    clickCount = 0;

    // Update display
    updateClickCount();
    updateLevelInfo();

    // Build up new tiles for the level
    tilesContainer.innerHTML = ""; // Clear existing tiles

    const allColors = colors.concat(colors); // Duplicate colors for pairs
    for (let i = 0; i < tileCount; i++) {
        const randomIndex = Math.floor(Math.random() * allColors.length);
        const color = allColors.splice(randomIndex, 1)[0];
        const tile = buildTile(color);

        tilesContainer.appendChild(tile);
    }
}

// Function to update the display of total click count
function updateClickCount() {
    // You can display or log the total click count as needed
    console.log(`Total number of clicks: ${clickCount}`);
}

// Function to update the display of level information
function updateLevelInfo() {
    levelInfoElement.textContent = `Level: ${currentLevel}`;
}

// Function to calculate the total mistakes made during the game
function calculateTotalMistakes() {
    // Calculate the total mistakes based on the game logic
    // In this simple memory game, we don't have explicit mistakes counting logic, so returning the click count as a placeholder
    return clickCount;
}

// Function to calculate star rating based on total mistakes
const user = getUrlParameter('user');
const activity = getUrlParameter('activity');
let starRating;
function calculateStarRating(totalMistakes) {
    // Adjust star rating based on the total mistakes
    if (totalMistakes <= 15) {
        // 5 stars
        return 5;
    } else if (totalMistakes <= 30) {
        // 4 stars
        return 4;
    } else if (totalMistakes <= 45) {
        // 3 stars
        return 3;
    } else if (totalMistakes <= 65) {
        // 2 stars
        return 2;
    } else {
        // 1 star
        return 1;
    }
    
    document.getElementById('game-container').innerHTML = `
        <h1>Congratulations!</h1>
        <p>Star Rating: ${starRating}</p>
    `;
}

// Function to display final score with star rating
function showFinalScore(starRating) {
    alert(`Congratulations! You completed all levels.\nTotal Clicks: ${clickCount}\nStar Rating: ${starRating} Stars`);
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

// Start the first level
startNewLevel();