// CHANGE THEME

function changeTheme(event) {
    event.preventDefault();

    if (body.classList.contains('light')) {
        body.classList.remove('light');
        themeButtonIcon.src = `assets/icons/theme-moon.png`;

    } else {
        body.classList.add('light');
        themeButtonIcon.src = `assets/icons/theme-sun.png`;

    }
}

const body = document.querySelector('body');
const themeButtonIcon = document.querySelector("#theme-button-icon");

const themeButton = document.querySelector('#theme-button');
themeButton.addEventListener('click', changeTheme);


// CUSTOM POINTER

const cursorInner = document.getElementById("cursor-inner");
const cursorOuter = document.getElementById("cursor-outer");
const links = document.querySelectorAll("a,label,button");

document.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorInner.style.left = `${posX}px`;
    cursorInner.style.top = `${posY}px`;

    cursorOuter.animate(
        {
            left: `${posX}px`,
            top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
    );

    links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            cursorInner.classList.add("hover");
            cursorOuter.classList.add("hover");
        });
        link.addEventListener("mouseleave", () => {
            cursorInner.classList.remove("hover");
            cursorOuter.classList.remove("hover");
        });
    });
});


// CURRENT MENU INDICATOR - DESKTOP

const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
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


// FADE IN ANIMATION

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '100px 0px 100px 0px'
});

const fadeInElements = document.querySelectorAll('.fade-in-hidden');

fadeInElements.forEach((el, index) => {
    el.style.setProperty('--delay', `${index * 0.4}s`);
    observer.observe(el);
});


// Comprehensive fix
window.addEventListener('load', () => {
    // Force scroll to top
    window.scrollTo(0, 0);

    // Trigger animations for initially visible elements after a short delay
    setTimeout(() => {
        document.querySelectorAll('.animate-item').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    }, 200);
});