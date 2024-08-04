var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var totalMistakes = 0;
var maxLevels=5;
var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Try Again");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    totalMistakes++; // Increment total mistakes
    userClickedPattern = []; // Clear user's pattern for unlimited tries
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);

  if (level > maxLevels) {
    showFinalScore();
  }
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
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
  $("#level-title").html(`
      <h3>Congratulations!</h3>
      <p>Star Rating: ${starRating}</p>
  `);
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