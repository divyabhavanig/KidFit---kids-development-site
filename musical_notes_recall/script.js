const notes = {
    "Sa": 261.63,
    "Re": 293.66,
    "Ga": 329.63,
    "Ma": 349.23,
    "Pa": 392.00,
    "Dha": 440.00,
    "Ni": 493.88,
};

let sequenceToPlay = [];
let currentNoteIndex = 0;
let userSequence = [];
let currentLevel = 1;
const maxLevels = 5;
let totalMistakes = 0;

function playNote(note) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(notes[note], audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
}
function updateCurrentLevel(level) {
    // Update the current level in the PHP section
    document.getElementById('current-level').innerText = level;
}

function playSequence() {
    if (currentNoteIndex < sequenceToPlay.length) {
        const noteToPlay = sequenceToPlay[currentNoteIndex];
        playNote(noteToPlay);
        document.getElementById('note-display').innerText = noteToPlay;
        currentNoteIndex++;
        setTimeout(() => {
            document.getElementById('note-display').innerText = '';
            playSequence();
        }, 1000);
    } else {
        currentNoteIndex = 0;
        document.getElementById('note-display').innerText = '';
    }
}

function checkUserInput(note) {
    userSequence.push(note);
    playNote(note);
    updateDisplayedInput();


}

function backspace() {
    if (userSequence.length > 0) {
        userSequence.pop();
        updateDisplayedInput();
    }
}

function updateDisplayedInput() {
    document.getElementById('note-display').innerText = userSequence.join(' ');
}

function calculateMistakes(actual, userInput) {
    let minLength = Math.min(actual.length, userInput.length);
    let mistakes = 0;

    for (let i = 0; i < minLength; i++) {
        if (actual[i] !== userInput[i]) {
            mistakes++;
        }
    }

    return mistakes;
}

function submitUserInput() {
    const mistakes = calculateMistakes(sequenceToPlay, userSequence);
    totalMistakes += mistakes;

    if (arraysAreEqual(sequenceToPlay, userSequence)) {
        document.getElementById('feedback').innerText = 'Correct! Well done.';
        totalMistakes += calculateMistakes(sequenceToPlay, userSequence);

        setTimeout(() => {
            document.getElementById('feedback').innerText = '';
            userSequence = [];

            if (currentLevel < maxLevels) {
                currentLevel++;
                document.getElementById('level-display').innerText = `Level: ${currentLevel}`;
                generateAndPlaySequence();
            } else {
                showFinalScore();
            }
        }, 1000);
    } else {
        document.getElementById('feedback').innerText = 'Oops! Try again.';
        setTimeout(() => {
            document.getElementById('feedback').innerText = '';
            userSequence = [];
            playSequence();
        }, 1000);
    }

    // Update the mistakes display here if needed
    document.getElementById('feedback').innerText = `Mistakes: ${totalMistakes}`;
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

    // Update stars in the database
    insertStarsInDatabase(starRating, user, activity);

    // Display final score to the user
    document.getElementById('game-container').innerHTML = `
        <h1>congratulations!</h1>
        <p>Star Rating: ${starRating}</p>
    `;
}

function generateAndPlaySequence() {
    sequenceToPlay = Array.from({ length: currentLevel }, () => {
        const randomNote = Object.keys(notes)[Math.floor(Math.random() * Object.keys(notes).length)];
        return randomNote;
    });

    playSequence();
}

function arraysAreEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
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


generateAndPlaySequence();

