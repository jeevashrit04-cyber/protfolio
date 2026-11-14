
console.log("Welcome to my Portfolio!");

const welcome = document.querySelector(".welcome");

welcome.addEventListener("click", function() {
    alert("Welcome to my Portfolio!");
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = contactForm.querySelector(
        'input[type="text"]'
    ).value;

    const email = contactForm.querySelector(
        'input[type="email"]'
    ).value;

    const message = contactForm.querySelector(
        "textarea"
    ).value;

    const subject = encodeURIComponent(
        "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

  const gmailURL =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=jeevashrit04@gmail.com" +
    "&su=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

window.open(gmailURL, "_blank");

});
