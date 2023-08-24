/*jshint esversion: 6 */
const thankYouModal = document.getElementById("thankyou-modal");
// EmailJS API implemented with a tutorial from CodeInstitute and EmailJS documentation

// Displays a Bootstrap modal thanking the user for their message
function thankYouMessage() {
   $(thankYouModal).modal('show');
}

function sendMail(contactForm) {
   emailjs.send("service_x7xdzzi", "tarotquizemail") // Service ID, Template ID
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       thankYouMessage();
    }, function(error) {
       console.log('FAILED...', error);
    });

    return false;

   }