/*jshint esversion: 6 */

// EmailJS API implemented with a tutorial from CodeInstitute and EmailJS documentation

emailjs.sendForm("service_x7xdzzi", "tarotquizemail", "#contact-form")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });