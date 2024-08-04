<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kidfit";

// Create connection
$con = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if the user is logged in
if (!isset($_SESSION['valid'])) {
    header("Location: index.php");
}

// Retrieve user information from the session
$id = $_SESSION['id'];
$query = mysqli_query($con, "SELECT * FROM user WHERE userID=$id");

while ($result = mysqli_fetch_assoc($query)) {
    $res_Uname = $result['username'];
    $res_Email = $result['email'];
    $res_Age = $result['age'];
    // No need to retrieve $res_id here, as it's already stored in $_SESSION['id']
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KiDFit - Brain Development Platform</title>
    <link rel="stylesheet" href="home.css">
</head>
<body>
    <header>
        <nav>
            <img src="./pictures/logo.png" alt="KiDFit logo">
            <ul>
            <li><a href='../homepage/home.php?user=<?php echo $_SESSION['id']; ?>'>Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href='../journey.php?user=<?php echo $_SESSION['id']; ?>'>Journey</a></li>
                <li><a href="#footer">Contact</a></li>
                <li><a href="../login_page/home.php">Dashboard</a></li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <h2>Welcome to KiDFit - Brain Development Platform</h2>
        <p>Unlock the full potential of your child's brain through engaging games and activities designed for cognitive development.</p>
        <div class="horizontal-divs">
            <div class="left-div">
                <!-- Content for the left div -->
                <h3>Spark Brilliance</h3>
                <p>Embark on a journey of curiosity and creativity. Explore the boundless wonders within your child's mind through engaging activities that spark imagination and learning.</p>
            </div>
            <div class="image-div">
                <!-- Image goes here -->
                <img src="./pictures/home.png" alt="KiDFit Image">
            </div>
            <div class="right-div">
                <!-- Content for the right div -->
                <h3>Wonder Unleashed</h3>
                <p>Embark on a journey of curiosity and creativity. Explore the boundless wonders within your child's mind through engaging activities that spark imagination and learning.</p>
            </div>
        </div>
    </section>

    <section id="about">
        <h2>About Us</h2>
        <p>Meet the brilliant minds behind KiDFit, dedicated to creating an innovative platform for children's brain development</p>

        <div class="about-wrapper">
          <div class="wrapper">
            <div id="left-door" class="door">
              <div class="shape"></div>
              <div class="shape"></div>
              <div id="left-knob" class="knob"></div>
            </div>
            <div id="right-door" class="door">
              <div class="shape"></div>
              <div class="shape"></div>
              <div id="right-knob" class="knob"></div>
            </div>
            <img src="divyabhavani.jpg" alt="Divyabhavani Ganpisetty" class=profile-image>
            <div class="text-content">
              <p>Greetings! I'm Divyabhavani Ganpisetty, immersing myself in the wonders of Computer Science and Engineering at RVITM. Here, algorithms become my playmates, and coding is my language of choice.</p>
              <div class="social-icons">
                <a class="instagram-icon" href="https://www.instagram.com/divy.abhavani" target="_blank">
                  <img src="./pictures/instagram.png" alt="Instagram">
                </a>
                <a class="email-icon" href="mailto:your-divyabhavanig@gmail.com" target="_blank">
                  <img src="./pictures/email.png" alt="Email">
                </a>
                <a class="email-icon" href="https://wa.me/9535910307" target="_blank">
                  <img src="./pictures/whatsapp.png" alt="Whatsapp">
                </a>
              </div>
            </div>      
          </div>
          <div class="wrapper">
            <div id="left-door" class="door">
              <div class="shape"></div>
              <div class="shape"></div>
              <div id="left-knob" class="knob"></div>
            </div>
            <div id="right-door" class="door">
              <div class="shape"></div>
              <div class="shape"></div>
              <div id="right-knob" class="knob"></div>
            </div>
            <img src="chetana.jpg" alt="Chetana R Reddy" class=profile-image>
            <div class="text-content">
              <p>Hey there! I'm Chetana R Reddy, diving into the fascinating world of Computer Science and Engineering at RVITM. From coding escapades to problem-solving quests, each day is a new byte-sized adventure.</p>
              <div class="social-icons">
                <a class="instagram-icon" href="https://www.instagram.com/chetana_r02" target="_blank">
                  <img src="./pictures/instagram.png" alt="Instagram">
                </a>
                <a class="email-icon" href="mailto:chetanar2403@gmail.com" target="_blank">
                  <img src="./pictures/email.png" alt="Email">
                </a>
                <a class="email-icon" href="https://wa.me/7019092513" target="_blank">
                  <img src="./pictures/whatsapp.png" alt="Whatsapp">
                </a>
              </div>
            </div>      
          </div>
          <div class="wrapper">
            <div id="left-door" class="door">
              <div class="shape"></div>
              <div class="shape"></div>
              <div id="left-knob" class="knob"></div>
            </div>
            <div id="right-door" class="door">
              <div class="shape"></div>
              <div class="shape"></div>
              <div id="right-knob" class="knob"></div>
            </div>
            <img  src="./pictures/deeksha.png" alt="Deeksha DG" class=profile-image>

            <div class="text-content">
              <p>Hello, I'm Deeksha DG, diving into the exciting world of Computer Science and Engineering at RVITM. In this vibrant space, algorithms are my puzzles, and coding is my creative outlet.</p>
              <div class="social-icons">
                <a class="instagram-icon" href="https://www.instagram.com/deeksha_dg17" target="_blank">
                  <img src="./pictures/instagram.png" alt="Instagram">
                </a>
                <a class="email-icon" href="mailto:deekshaganapumane@gmail.com" target="_blank">
                  <img src="./pictures/email.png" alt="Email">
                </a>
                <a class="email-icon" href="https://wa.me/9448063560" target="_blank">
                  <img src="./pictures/whatsapp.png" alt="Whatsapp">
                </a>
              </div>
            </div>      
          </div>
        </div>
    </section>
    
<!-- Inside your why-choose section -->
<section id="why-choose">
  <h2>Why Choose KiDFit</h2>
  <p>Explore the reasons why KiDFit is the perfect choice for your child's brain development:</p>
  <div class="book">
      <input type="checkbox" id="c1">
      <input type="checkbox" id="c2">
      <input type="checkbox" id="c3">
      <input type="checkbox" id="c4">
      <div id="cover"><img src="./pictures/owl.png"></div>
      <div class="flip-book">
          <div class="flip" id="p1">
              <div class="back">
                  <img src="./pictures/tiger.png">
                  <label class="back-btn" for="c1">Back</label>
              </div>
              <div class="front">
                  <h2>Chapter 1: Educational Excellence</h2>
                  <p>Discover how KiDFit's educational activities unlock the full potential of your child's cognitive development. Engaging quizzes, challenges, and interactive learning experiences await!</p>
                  <label class="next-btn" for="c1">Next</label>
              </div>
          </div>
          <div class="flip" id="p2">
              <div class="back">
                  <img src="./pictures/fox.png">
                  <label class="back-btn" for="c2">Back</label>
              </div>
              <div class="front">
                  <h2>Chapter 2: Active Adventures</h2>
                  <p>Embark on a journey of physical well-being with KiDFit. Flip the pages to explore fun exercises and exciting activities that keep your child active, healthy, and full of energy!</p>
                  <label class="next-btn" for="c2">Next</label>
              </div>
          </div>
          <div class="flip" id="p3">
              <div class="back">
                  <img src="./pictures/bear.png">
                  <label class="back-btn" for="c3">Back</label>
              </div>
              <div class="front">
                  <h2>Chapter 3: Creative Play Wonderland</h2>
                  <p>Turn the pages to enter a world of imagination and creativity. KiDFit's creative play activities ignite your child's imagination, encouraging them to explore and express their unique ideas</p>
                  <label class="next-btn" for="c3">Next</label>
              </div>
          </div>
          <div class="flip" id="p4">
              <div class="back">
                  <label class="back-btn" for="c4">Back</label>
              </div>
              <div class="front">
                  <h2>Chapter 4: Safe Social Hub</h2>
                  <p>Navigate to the Safe Community chapter and learn how KiDFit ensures a secure online environment. Discover the importance of a safe and supportive community for your child's digital journey.</p></p>
                  <label class="next-btn" for="c4">Next</label>
              </div>
          </div>
      </div>
  </div>
</section>


    

<!-- Inside your activities section -->
<section id="activities">
  <h2>Our Activities</h2>
		<div class="box">
			<span style="--i:1"><img src="./pictures/art.png"></span>
      <span style="--i:2"><img src="./pictures/math.png"></span>
      <span style="--i:3"><img src="./pictures/cook.png"></span>
      <span style="--i:4"><img src="./pictures/memory.png"></span>
      <span style="--i:5"><img src="./pictures/sing.png"></span>
      <span style="--i:6"><img src="./pictures/shape.png"></span>
      <span style="--i:7"><img src="./pictures/yoga.png"></span>
      <span style="--i:8"><img src="./pictures/plant.png"></span>
		</div>
</section>

<section id="footer">
<footer>
  <div class="footer-content">
      <div class="left-section">
          <img src="./pictures/logo.png" alt="KidFit Logo">
          <p>Unlocking the potential of young minds through engaging and educational activities.</p>
      </div>
      <div class="right-section">
          <h3>Quick Links</h3>
          <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="../journey.php?user=<?php echo $_SESSION['id']; ?>journey">Journey</a></li>
              <li><a href="#footer">Contact</a></li>
              
          </ul>
          <!-- Assuming $dynamicUserId contains the dynamic user ID -->
          <a href='../feedback/index.php?user=<?php echo $_SESSION['id']; ?>'>Give Feedback</a>

      </div>
  </div>
  <div class="copyright">
      <p>&copy; 2024 KidFit. All rights reserved. | Contact: <a href="mailto:info@kidfit.com">kidfit2024@gmail.com</a></p>
  </div>
</footer>
</section>

<script src="./home.js"></script>

</body>
</html>