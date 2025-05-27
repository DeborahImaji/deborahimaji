
function changeTheme() {
    let body = document.querySelector("body");

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        themeButton.innerHTML = `<p>It is bright</p>`;
    } else {
        body.classList.add("dark");
        themeButton.innerHTML = `<p>It is dark</p>`;
    }
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);