// EmailJS API implemented following a tutorial from CodeInstitute

function sendMail(contactForm) {
    emailjs.send("service_x7xdzzi","tarotquizemail", {
        "from-name": contactForm.name.value,
        "from-email": contactForm.email.value,
        "feedback": contactForm.feedback-message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("ERROR")
        }
    )

    return false;
};
