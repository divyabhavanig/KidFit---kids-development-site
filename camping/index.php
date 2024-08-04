<?php?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Camping Activity</title>
</head>
<body>
    <header>
        <nav>
            <img src="../pictures/logo.png" alt="KiDFit logo">
        </nav>
    </header>

    <section class="activity-container">
        <div class="materials-box">
            <div class="materials">
                <h2>Materials Needed:</h2>
                <ul>
                    <li>Camping Tent Fortress</li>
                    <li>Flashlight Beacon(your guiding light for nighttime exploration)</li>
                    <li> Adventure Hat</li>
                    <li>Nature Binoculars</li>
                    <li>Campfire Buddy(A stuffed animal or toy for comfort and company)</li>
      
                </ul>
            </div>
            <img src="../pictures/camping.png" alt="camping">
            <div id="congrats-container" class="hidden">
                <div id="congrats-content">
                    <h2>Congratulations!</h2>
                    <p>You earned 5 stars for camping!</p>
                </div>
            </div>
            
            <div id="feedback-container">
                <input type="checkbox" id="camping-checkbox">
                <label for="camping-checkbox">Did you try camping?</label>
                <button id="submit-button">Submit</button>
            </div>
        </div>
        
        <div class="instructions-box">
            <div class="instructions">
                <h2>Instructions:</h2>
                <ol>
                    <li>
                        <h4>Tent Building Bonanza:</h4>
                        <p>Work together to pitch your camping tent fortress – teamwork makes the dream work!</p>
                    </li>
                    <li>
                        <h4>Light Up the Night:</h4>
                        <p>Switch on your flashlight beacon and take turns exploring the dark corners of your campsite.</p>
                    </li>
                    <li>
                        <h4>Hat Parade:</h4>
                        <p>Show off your adventure hats in a fun parade around the campfire – strike a pose like true explorers!</p>
                    </li>
                    <li>
                        <h4>Binocular Safari:</h4>
                        <p>Take a nature walk with your nature binoculars and spot birds, bugs, and other critters along the way.</p>
                    </li>
                    <li>
                        <h4>Campfire Stories with Your Buddy:</h4>
                        <p>Gather around the campfire with your campfire buddy and share spooky stories or silly jokes – let your imagination run wild!</p>
                    </li>
                </ol>
            </div>
        </div>

    </section>
    
    
    <footer>
        <p>&copy; 2024 KiDFit. All rights reserved.</p>
    </footer>
    <script src="./script.js"></script>
</body>
</html>

