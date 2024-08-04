<?php?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Recycled Planting Pots Activity</title>
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
                    <li>Empty plastic bottles (cleaned and labels removed)</li>
                    <li>Craft supplies (markers, stickers, colored paper)</li>
                    <li>Potting soil</li>
                    <li>Small plants or seeds</li>
                    <li>Scissors</li>
                    <li>Watering cans or spray bottles</li>
                </ul>
            </div>
            <img src="../pictures/plant.png" alt="recycled planting">
            <div id="congrats-container" class="hidden">
                <div id="congrats-content">
                    <h2>Congratulations!</h2>
                    <p>You earned 5 stars for planting!</p>
                </div>
            </div>
            
            <div id="feedback-container">
                <input type="checkbox" id="planting-checkbox">
                <label for="planting-checkbox">Did you plant?</label>
                <button id="submit-button">Submit</button>
            </div>
        </div>
        
        <div class="instructions-box">
            <div class="instructions">
                <h2>Instructions:</h2>
                <ol>
                    <li>
                        <h4>Decorate Your Planting Pot:</h4>
                        <p>Use markers, stickers, and colored paper to make your plastic bottle pot look awesome. Get creative!</p>
                    </li>
                    <li>
                        <h4>Cutting and Preparing:</h4>
                        <p>Ask an adult for help to cut the plastic bottle in half. The bottom part will be your special planting pot.</p>
                    </li>
                    <li>
                        <h4>Planting Seeds or Seedlings:</h4>
                        <p>Fill your decorated pot with soil and plant seeds or small seedlings. Watch them grow into cool plants!</p>
                    </li>
                    <li>
                        <h4>Watering and Talking:</h4>
                        <p>Learn how much water your plants need. Water them just right and talk to them as they grow. Plants love it!</p>
                    </li>
                    <li>
                        <h4>Create a Mini Recycled Garden:</h4>
                        <p>Put all the decorated pots together in one area. Voila! You've created a mini garden using recycled materials. Great job!</p>
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
