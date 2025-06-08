
function changeTheme(event) {
    let bodyElement = document.querySelector("body");

    if (bodyElement.classList.contains("dark")) {
        bodyElement.classList.remove("dark");
    } else {
        bodyElement.classList.add("dark");
    }
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);