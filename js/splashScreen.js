 
 setTimeout(function() {
     window.location.href = "../web final/index.html";
   }, 4000);


   var countdownElement = document.getElementById("countdown");
        var timeLeft = 4; // Initial countdown time in seconds

        function countdown() {
            countdownElement.textContent = timeLeft;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timer); // Stop the countdown when it reaches 0
                countdownElement.style.display = "none"; // Hide the countdown element
            }
        }

        var timer = setInterval(countdown, 1000); // Update the countdown every second