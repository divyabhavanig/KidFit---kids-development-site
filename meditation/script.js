document.addEventListener("DOMContentLoaded", function() {

    const user = getUrlParameter('user');
    const activity = getUrlParameter('activity');

    const startBtn = document.getElementById("startBtn");
    const breathingBuddy = document.getElementById("breathingBuddy");
    const sereneMusic = document.getElementById("sereneMusic");
    const container = document.querySelector(".container");
    let stars=5;
    startBtn.addEventListener("click", startBreathingExercise);

    function startBreathingExercise() {
        const adventures = ["Enchanted Forest", "Underwater Wonderland", "Space Odyssey"];
        const selectedAdventure = adventures[Math.floor(Math.random() * adventures.length)];

        // Disable the button while the voice instructions are playing
        startBtn.disabled = true;

        alert(`Welcome to the ${selectedAdventure} Adventure! Let's start the breathing exercise.`);

        // Voice instructions
        speak("Inhale deeply", 0.25, 1);
        speak("Exhale slowly", 0.25, 1);
        speak("Inhale deeply", 0.25, 1);
        speak("Exhale slowly", 0.25, 1);
        speak("Inhale deeply", 0.25, 1);
        speak("Exhale slowly", 0.25, 1);
        speak("Congratulations! You've completed the breathing exercises.", 1.0, 1);

        // Play serene music
        sereneMusic.play();
        // Show breathing buddy
        breathingBuddy.style.display = "block";
        // Simulate breathing animation with multiple breaths
        simulateBreathing(3); // Adjust the number of repetitions as needed
    }

    function simulateBreathing(repetitionCount) {
        let repetitions = 0;

        function breathe() {
            if (repetitions < repetitionCount) {
                // Breathe in and out
                breathingBuddy.style.transform = "scale(1.2)";
                setTimeout(() => {
                    breathingBuddy.style.transform = "scale(1)";
                    setTimeout(breathe, 5000); // Adjust the delay before the next breath (1.5 seconds)
                }, 1500); // Adjust the duration of each breath (1 second)
            } else {
                // Voice instructions
                speak("Congratulations! You've completed the breathing exercises.", 1.0);
                // Pause serene music
                sereneMusic.pause();
                // Hide breathing buddy
                breathingBuddy.style.display = "none";
                // Enable the button after the voice is finished
                startBtn.disabled = false;

                // Display congratulations and 5 stars
                container.innerHTML = `<h2>Congratulations!</h2><p>You've completed the breathing exercises.</p>`;
                for (let i = 0; i < 5; i++) {
                    container.innerHTML += '⭐'; // Add 5 stars
                }

                // Add a button to go to the home page
                const goToHomePageBtn = document.createElement("button");
                goToHomePageBtn.innerText = "Go to Journey Page";
                goToHomePageBtn.addEventListener("click", goToHomePage);
                container.appendChild(goToHomePageBtn);
            }
            repetitions++;
        }

        breathe();
    }

    // Function to use Web Speech API for voice instructions
    function speak(text, rate, repeatCount) {
        const synth = window.speechSynthesis;

        for (let i = 0; i < repeatCount; i++) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = rate; // Adjust the rate for slower or faster speech
            synth.speak(utterance);
            // Add a delay between repeated instructions
            if (i < repeatCount - 1) {
                setTimeout(() => {}, 1000); // Adjust the delay between repetitions (5 seconds)
            }
        }
    }

    function goToHomePage() {
        insertStarsInDatabase(stars, user, activity);
    
        // Get the user parameter from the URL
        const userID = getUrlParameter('user');
    
        // Construct the URL with the correct user parameter
        const url = `../journey.php?user=${userID}`;
    
        // Redirect to the journey page
        window.location.href = url;
    }
    
    function getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Function to insert stars in the database
    function insertStarsInDatabase(stars, user, activity) {
        const insertStarsUrl = `update_stars.php?user=${user}&activity=${activity}`;

        fetch(insertStarsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'stars=' + encodeURIComponent(stars),
        })
        .then(response => {
            // You can handle the response if needed, but it's not crucial in this case
        })
        .catch(error => {
            console.error('Error inserting stars:', error);
        });
    }
});