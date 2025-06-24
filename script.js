
window.addEventListener("DOMContentLoaded", function () {
    new Typewriter("#gradient-intro", {
        autoStart: true,
        delay: 120,
        loop: false
    })
        .typeString("HELLO WORLD,<br />I AM DEBORAH IMAJI.")
        .start();
});


function changeTheme(event) {
    event.preventDefault();
    let bodyElement = document.querySelector("body");

    let mailIcon = document.querySelector("#mail-icon");
    let githubIcon = document.querySelector("#github-icon");
    let linkedinIcon = document.querySelector("#linkedin-icon");

    let themeIcon = document.querySelector("#theme-icon");

    if (bodyElement.classList.contains("dark")) {

        bodyElement.classList.remove("dark");

        mailIcon.src = "assets/icons/socials/email.png";
        githubIcon.src = "assets/icons/socials/github.png";
        linkedinIcon.src = "assets/icons/socials/linkedin.png";

        themeIcon.src = "assets/icons/theme/moon.png";

    } else {

        bodyElement.classList.add("dark");

        mailIcon.src = "assets/icons/socials/email-white.png";
        githubIcon.src = "assets/icons/socials/github-white.png";
        linkedinIcon.src = "assets/icons/socials/linkedin-white.png";

        themeIcon.src = "assets/icons/theme/sun.png";

    }
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);