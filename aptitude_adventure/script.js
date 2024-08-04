const questionsLevel1 = [
    { question: 'What is the LCM of 2 and 3?', answers: [4, 6, 8, 9], correct: 6 },
    { question: 'Calculate the profit percentage if the cost is $50 and the selling price is $70.', answers: [20, 25, 30, 40], correct: 40 },
    { question: 'Find the HCF of 12 and 18.', answers: [2, 3, 4, 6], correct: 6 },
    { question: 'If a product costs $80 and the loss percentage is 20%, find the selling price.', answers: [64, 72, 80, 88], correct: 64 },
    { question: 'If John is 15 years old and his sister is 3 years younger, how old is his sister?', answers: [10, 12, 15, 18], correct: 12 },
];
const user = getUrlParameter('user');
const activity = getUrlParameter('activity');
let currentQuestionIndex = 0;
let stars = 0;

function startGame() {
    // Shuffle questions for Level 1
    shuffleArray(questionsLevel1);
    // Show the first question
    showQuestion(questionsLevel1[currentQuestionIndex]);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion(question) {
    const questionContainer = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');

    questionContainer.innerText = question.question;

    // Clear previous answer buttons
    answerButtons.innerHTML = '';

    // Create answer buttons dynamically
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer, question.correct));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        // Handle correct answer
        alert('Correct!');
        stars++;
    } else {
        // Handle incorrect answer
        alert('Incorrect. Try again!');
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questionsLevel1.length) {
        showQuestion(questionsLevel1[currentQuestionIndex]);
    } else {
        // End of the game
        displayStars();
        insertStarsInDatabase(starRating, user, activity);
    }
}

function displayStars() {
    const starRating = getStarRating(stars);
    

    // Display stars and message
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars-container');
    starsContainer.innerHTML = starRating;
    
    const congratsContainer = document.createElement('p');
    congratsContainer.classList.add('congrats-message');
    congratsContainer.innerText = `Congratulations! You completed the game. Your star rating: ${starRating}`;

    const homeButton = document.createElement('button');
    homeButton.innerText = 'Return to Home';
    homeButton.classList.add('btn');
    homeButton.addEventListener('click', () => redirectToHomePage());

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    modalContainer.appendChild(starsContainer);
    modalContainer.appendChild(congratsContainer);
    modalContainer.appendChild(homeButton);

    document.body.appendChild(modalContainer);

    // Clear question and answer buttons
    const questionContainer = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');
    questionContainer.innerText = '';
    answerButtons.innerHTML = '';

}

let starRating;
function getStarRating(score) {
    if (score === 5) {
        return '⭐⭐⭐⭐⭐'; 
    } else if (score === 4) {
        return '⭐⭐⭐⭐'; 
    }
     else if (score === 3) {
        return '⭐⭐⭐'; 
    } 
    else if (score === 2) {
        return '⭐⭐'; 
    } 
    else {
        '⭐'
    }
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

function redirectToHomePage() {
    
       // Redirect to the home page (replace 'index.html' with your home page)
    window.location.href = 'index.php';
}



// Start the game when the page loads
startGame();
