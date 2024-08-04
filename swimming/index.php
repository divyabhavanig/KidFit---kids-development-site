<?php?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Swimming Activity</title>
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
                    <li>Swim Suit Superhero Cape</li>
                    <li>Goggle Gear</li>
                    <li> Cool Hat (If You Feel Like It)</li>
                    <li>Aqua Sneakers</li>
                    <li>Floatie Pal</li>
      
                </ul>
            </div>
            <img src="../pictures/swimming.png" alt="swimming">
            <div id="congrats-container" class="hidden">
                <div id="congrats-content">
                    <h2>Congratulations!</h2>
                    <p>You earned 5 stars for swimming!</p>
                </div>
            </div>
            
            <div id="feedback-container">
                <input type="checkbox" id="swimming-checkbox">
                <label for="swimming-checkbox">Did you Swim?</label>
                <button id="submit-button">Submit</button>
            </div>
        </div>
        
        <div class="instructions-box">
            <div class="instructions">
                <h2>Instructions:</h2>
                <ol>
                    <li>
                        <h4>Super Dive In:</h4>
                        <p>Dive into the water like a superhero taking the plunge. You're on a mission for mega fun!</p>
                    </li>
                    <li>
                        <h4>Goggle Power Activate:</h4>
                        <p>Adjust those goggles to activate your underwater superhero vision. See all the cool stuff below the surface!</p>
                    </li>
                    <li>
                        <h4>Hat Hero (If Worn):</h4>
                        <p>If you're rocking a hat, wear it like an explorer ready for awesome discoveries.</p>
                    </li>
                    <li>
                        <h4>Aqua Sneaker Shuffle:</h4>
                        <p>Shuffle around in your aqua sneakers, making cool water moves. Your feet are like mini-dancers on a wet stage!</p>
                    </li>
                    <li>
                        <h4>Floatie Sidekick Time:</h4>
                        <p>Secure your floatie pal and let the watery adventures begin. They're your trusty sidekick for all the splash battles!</p>
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

