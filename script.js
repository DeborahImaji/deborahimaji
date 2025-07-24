function changeTheme (event) {
    event.preventDefault();

    let bodyElement = document.querySelector("body");

    if (bodyElement.classList.contains("light")) {
        bodyElement.classList.remove("light");
    } else {
        bodyElement.classList.add("light");
    }
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);