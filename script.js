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


// CURRENT MENU INDICATOR - DESKTOP

const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

// Scroll to item when clicked
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = item.querySelector('a').getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll spy
function updateActiveNavItem() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            currentSection = section.id;
        }
    });

    // Update new current menu
    navItems.forEach(item => {
        const targetId = item.querySelector('a').getAttribute('href').substring(1);
        if (targetId === currentSection) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', updateActiveNavItem);

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateActiveNavItem);


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