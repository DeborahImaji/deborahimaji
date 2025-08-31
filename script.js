function changeTheme(event) {
    event.preventDefault();

    const bodyElement = document.querySelector("body");

    if (bodyElement.classList.contains("light")) {
        bodyElement.classList.remove("light");
    } else {
        bodyElement.classList.add("light");
    }
}

const themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);