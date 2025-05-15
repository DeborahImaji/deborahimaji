
function changeTheme() {
    let body = document.querySelector("body");

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        themeButton.innerHTML = `<img src="assets/icons/sun.png" alt="Sun Icon" class="theme-button-icon" id="theme-button-icon">`;
    } else {
        body.classList.add("dark");
        themeButton.innerHTML = `<img src="assets/icons/moon.png" alt="Moon Icon" class="theme-button-icon" id="theme-button-icon">`;
    }
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);