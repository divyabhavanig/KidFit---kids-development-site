<?php?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Awesome Bike Activity</title>
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
                    <li>Awesome Bike (Find a bike that screams fun and adventure for your little rider.)</li>
                    <li>Cool Helmet (Strap on a helmet with funky designs to keep things safe and stylish.)</li>
                    <li>Fun Threads(Slip into colorful and playful clothes)</li>
                    <li>Snazzy Sneakers</li>
                    <li>Buddy in the Basket(Bring a stuffed buddy along for the ride.)</li>
      
                </ul>
            </div>
            <img src="../pictures/cycling.png" alt="cycling">
            <div id="congrats-container" class="hidden">
                <div id="congrats-content">
                    <h2>Congratulations!</h2>
                    <p>You earned 5 stars for cycling!</p>
                </div>
            </div>
            
            <div id="feedback-container">
                <input type="checkbox" id="cycling-checkbox">
                <label for="cycling-checkbox">Did you try cycling?</label>
                <button id="submit-button">Submit</button>
            </div>
        </div>
        
        <div class="instructions-box">
            <div class="instructions">
                <h2>Instructions:</h2>
                <ol>
                    <li>
                        <h4>Hop on the Epic Ride:</h4>
                        <p>Jump onto that cool bike like you're about to embark on the most epic adventure of your life!</p>
                    </li>
                    <li>
                        <h4>Helmet Hero:</h4>
                        <p>Buckle up that helmet like a superhero gearing up for a mission. Safety is your superpower!</p>
                    </li>
                    <li>
                        <h4>Pedal Power:</h4>
                        <p>Start pedaling with all your might. Imagine you're zooming through a magical land filled with excitement.</p>
                    </li>
                    <li>
                        <h4>Stuffed Sidekick:</h4>
                        <p>Secure your stuffed sidekick in the basket – they're the co-captain of this fantastic journey!</p>
                    </li>
                    <li>
                        <h4>Kid Explorer Mode:</h4>
                        <p>Cruise around in full-on explorer mode. Every pedal takes you to new frontiers of fun and discovery!</p>
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

