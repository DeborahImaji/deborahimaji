// CHANGE THEME
function changeTheme(event) {
    event.preventDefault();

    if (body.classList.contains('light')) {
        body.classList.remove('light');
    } else {
        body.classList.add('light');
    }
}

const body = document.querySelector('body');

const themeButton = document.querySelector('#theme-button');
themeButton.addEventListener('click', changeTheme);


// HAMBURGER MENU

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('menu-open');
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        toggleMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
    }
});