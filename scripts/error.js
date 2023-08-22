 /*jshint esversion: 6 */
 
 // Redirects to the index page after 10 seconds when error 404 is encountered
setTimeout(function () {
      window.location.href = './index.html';
}, 10000);    

// Countdown timer showing when the user will be redirected to the index page when error 404 is encountered

var timeLeft = 9;
setInterval(function() {
document.getElementById("return-timer").innerHTML = 'Redirecting in... ' + timeLeft;
timeLeft -= 1;
}, 1000);