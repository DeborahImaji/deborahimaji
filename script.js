
window.addEventListener("DOMContentLoaded", function () {
    new Typewriter("#gradient-intro", {
        autoStart: true,
        delay: 120,
        loop: false
    })
        .typeString("HELLO WORLD,<br />I AM DEBORAH IMAJI.")
        .callFunction(() => {
            startScrollAnimations();
        })
        .start();
});

// SLIDE UP ON SCROLL - START

function startScrollAnimations() {
    const slideUpElements = document.querySelectorAll('.slide-up-on-scroll');

    slideUpElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    slideUpElements.forEach(el => observer.observe(el));
}

// SLIDE UP ON SCROLL - END

function changeTheme(event) {
    event.preventDefault();
    let bodyElement = document.querySelector("body");

    let mailIcon = document.querySelector("#mail-icon");
    let githubIcon = document.querySelector("#github-icon");
    let linkedinIcon = document.querySelector("#linkedin-icon");

    let themeIcon = document.querySelector("#theme-icon");

    let techStackArrows = document.querySelectorAll(".tech-stack-arrow");

    if (bodyElement.classList.contains("dark")) {

        bodyElement.classList.remove("dark");

        mailIcon.src = "assets/icons/socials/email.png";
        githubIcon.src = "assets/icons/socials/github.png";
        linkedinIcon.src = "assets/icons/socials/linkedin.png";

        themeIcon.src = "assets/icons/theme/moon.png";

        techStackArrows.forEach(techStackArrows => {
            techStackArrows.src = "assets/icons/right-arrow-light.png"
        });

    } else {

        bodyElement.classList.add("dark");

        mailIcon.src = "assets/icons/socials/email-white.png";
        githubIcon.src = "assets/icons/socials/github-white.png";
        linkedinIcon.src = "assets/icons/socials/linkedin-white.png";

        themeIcon.src = "assets/icons/theme/sun.png";

        techStackArrows.forEach(techStackArrows => {
            techStackArrows.src = "assets/icons/right-arrow-dark.png"
        });

    }
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);