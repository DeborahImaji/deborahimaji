
function changeTheme(event) {
    let bodyElement = document.querySelector("body");

    let mailIcon = document.querySelector("#mail-icon");
    let githubIcon = document.querySelector("#github-icon");
    let linkedinIcon = document.querySelector("#linkedin-icon");

    if (bodyElement.classList.contains("dark")) {

        bodyElement.classList.remove("dark");
        themeButton.classList.remove("dark");

        mailIcon.src = "assets/icons/socials/email.png";
        githubIcon.src = "assets/icons/socials/github.png";
        linkedinIcon.src = "assets/icons/socials/linkedin.png";

    } else {

        bodyElement.classList.add("dark");
        themeButton.classList.add("dark");

        mailIcon.src = "assets/icons/socials/email-white.png";
        githubIcon.src = "assets/icons/socials/github-white.png";
        linkedinIcon.src = "assets/icons/socials/linkedin-white.png";

    }
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);