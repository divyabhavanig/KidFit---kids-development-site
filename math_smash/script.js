let currentLevel = 1;
let totalMistakes = 0;

function startLevel() {
  document.getElementById('current-level').textContent = currentLevel;
  document.getElementById('locked-cage').style.display = 'block';
  document.getElementById('released-animal').style.display = 'none';
  document.getElementById('hurray-message').style.display = 'none';
  generateMathQuestion();
}

function generateMathQuestion() {
  const firstNumberDiv = document.getElementById('first-number');
  const operatorDiv = document.getElementById('operator');
  const secondNumberDiv = document.getElementById('second-number');

  const num1 = Math.floor(Math.random() * 90) + 10;
  const num2 = generateSecondNumber(num1);
  let operation;

  if (currentLevel <= 2) {
    operation = '+';
  } else if (currentLevel <= 4) {
    operation = '-';
  } else if (currentLevel <= 6) {
    operation = '×';
  } else if (currentLevel <= 8) {
    operation = '÷';
  } else {
    operation = ['+', '-', '×', '÷'][Math.floor(Math.random() * 4)];
  }

  firstNumberDiv.textContent = num1;
  operatorDiv.textContent = operation;
  secondNumberDiv.textContent = num2;
}

function generateSecondNumber(num1) {
  let num2;

  if (currentLevel <= 8) {
    num2 = Math.floor(Math.random() * (num1 - 10)) + 10;
  } else {
    const divisorOptions = getDivisors(num1).filter(divisor => num1 % divisor === 0 && divisor !== num1);
    const randomIndex = Math.floor(Math.random() * divisorOptions.length);
    const divisor = divisorOptions[randomIndex];
    const quotient = Math.floor(Math.random() * 9) + 1;
    num2 = divisor * quotient;
  }

  return num2;
}

function getDivisors(num) {
  const divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}
function checkAnswer() {
  const answerInput = document.getElementById('answer-input');
  const resultDiv = document.getElementById('result');
  const lockedCage = document.getElementById('locked-cage');
  const releasedAnimal = document.getElementById('released-animal');
  const hurrayMessage = document.getElementById('hurray-message');

  const userAnswer = parseFloat(answerInput.value);
  const correctAnswer = calculateCorrectAnswer();

  if (!isNaN(userAnswer)) {
    const tolerance = 0.0001;

    if (Math.abs(userAnswer - correctAnswer) < tolerance) {
      resultDiv.textContent = 'Correct! Animal rescued!';
      lockedCage.style.display = 'none';
      releasedAnimal.style.display = 'block';

      if (currentLevel >9) {
        hurrayMessage.style.display = 'block';
        releasedAnimal.style.display = 'none';
        showFinalScore();
      } else {
        setTimeout(() => {
          currentLevel++;
          startLevel();
          answerInput.value = '';
          resultDiv.textContent = '';
        }, 1500);
      }
    } else {
      resultDiv.textContent = 'Incorrect. Try again.';
      answerInput.value = '';
      totalMistakes++; // Increment total mistakes on incorrect answer
    }
  } else {
    resultDiv.textContent = 'Please enter a valid number.';
  }
}

function calculateCorrectAnswer() {
  const num1 = parseInt(document.getElementById('first-number').textContent);
  const num2 = parseInt(document.getElementById('second-number').textContent);
  const operation = document.getElementById('operator').textContent;

  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '×':
      return num1 * num2;
    case '÷':
      return num1 / num2;
    default:
      return NaN;
  }
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

startLevel();

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
