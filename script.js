function changeTheme (event) {
    event.preventDefault();

    let bodyElement = document.querySelector("body");

    if (bodyElement.classList.contains("light")) {
        bodyElement.classList.remove("light");
    } else {
        bodyElement.classList.add("light");
    }
}

function setCurrentHome (event) {
    event.preventDefault();

    navHome = document.querySelector("#nav-link");

    if (navHome.classList.contains("current")) {
        navHome.classList.remove("current");
    } else {
        navHome.classList.add("current");
    }
}

let navHome = document.querySelector("#nav-link");
navHome.addEventListener('click', setCurrentHome);

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);