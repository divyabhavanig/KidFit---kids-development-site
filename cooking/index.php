<?php?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Cooking</title>
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
                    <li><strong>Bread Expedition (your choice):</strong><br>
                      Select your favorite bread - white, wheat, or even an exotic choice like whole grain!</li>
                    
                    <li><strong>Spread-it-Love Quest:</strong><br>
                      Opt for spreads like mayo, mustard, or a zesty dressing to infuse your sandwich with flavor excitement.</li>
                    
                    <li><strong>Cheese Discovery:</strong><br>
                      Uncover slices of your preferred cheese. It's the delicious puzzle piece that binds your creation.</li>
                    
                    <li><strong>Veggie Wonderland Expedition:</strong><br>
                      Embark on a veggie adventure with lettuce, tomatoes, and cucumbers - make it a colorful exploration!</li>
                    
                    <li><strong>Ketchup Smile Artistry:</strong><br>
                      Grab the ketchup to add a touch of artistic flair. Draw a smiley face on your sandwich - it's your edible masterpiece signature!</li>
                  </ul>
                  
            </div>
            <img src="../pictures/cook.png" alt="cooking">
            <div id="congrats-container" class="hidden">
                <div id="congrats-content">
                    <h2>Congratulations!</h2>
                    <p>You earned 5 stars for cooking!</p>
                </div>
            </div>
            
            <div id="feedback-container">
                <input type="checkbox" id="planting-checkbox">
                <label for="planting-checkbox">Did you cook?</label>
                <button id="submit-button">Submit</button>
            </div>
        </div>
        
        <div class="instructions-box">
            <div class="instructions">
                <h2>Instructions:</h2>
                <ol>
                    <li>
                      <h4>Wash Hands Adventure:</h4>
                      <p>Begin your culinary journey by washing your hands thoroughly. A clean start sets the stage for a tasty adventure!</p>
                    </li>
                    
                    <li>
                      <h4>Spread-it-Love Brushstrokes:</h4>
                      <p>Unveil the bread canvas and with a spoon or knife, apply your chosen dressing on one or both slices. Consider it the brushstroke that sets the flavor tone.</p>
                    </li>
                    
                    <li>
                      <h4>Cheese Palette Placement:</h4>
                      <p>Lay down slices of cheese strategically – like arranging colors on an artist's palette. Let the cheese be the bridge between flavors.</p>
                    </li>
                    
                    <li>
                      <h4>Veggie Rainbow Composition:</h4>
                      <p>Compose a vibrant veggie rainbow atop the cheese, creating a visual feast on your edible canvas.</p>
                    </li>
                    
                    <li>
                      <h4>Ketchup Smile Fusion:</h4>
                      <p>Now, let your inner artist shine. Use the ketchup to draw a cheerful smiley face on your sandwich - it's the finishing touch to your edible masterpiece!</p>
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
