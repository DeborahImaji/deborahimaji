
function changeTheme() {
    let body = document.querySelector("body");
    let themeButtonIcon = document.querySelector("#theme=button-icon");

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        themeButtonIcon.innerHTML = `<img src="assets/icons/sun.png" alt="Sun Icon" class="theme-button-icon" id="theme-button-icon">`;
    } else {
        body.classList.add("dark");
        themeButtonIcon.innerHTML = `<img src="assets/icons/moon.png" alt="Moon Icon" class="theme-button-icon" id="theme-button-icon">`;
    }
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);