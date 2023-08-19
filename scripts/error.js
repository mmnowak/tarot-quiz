 // Redirects to the index page after 10 seconds when error 404 is encountered
 if (url.statusCode === '404') {
    setTimeout(function () {
      window.location.href = './index.html';
    }, 10000);    

};
// Countdown timer showing when the user will be redirected to the index page when error 404 is encountered

var timeLeft = 9;
var countdownTimer = setInterval(function() {
document.getElementById("return-timer").innerHTML = 'Redirecting in... ' + timeLeft;
timeLeft -= 1;
}, 1000);