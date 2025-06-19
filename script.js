
function changeTheme(event) {
    let bodyElement = document.querySelector("body");
    let mailIcon = document.querySelector("#mail-icon");

    if (bodyElement.classList.contains("dark")) {
        bodyElement.classList.remove("dark");
        mailIcon.src = "assets/icons/socials/email.png";
    } else {
        bodyElement.classList.add("dark");
        mailIcon.src = "assets/icons/socials/email-white.png";
    }
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);