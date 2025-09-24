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

function initFadeInAnimation() {
    const elements = document.querySelectorAll('.fade-in-hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.dataset.index);

                setTimeout(() => {
                    entry.target.classList.add('fade-in-visible');
                }, index * 200);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach((el, index) => {
        el.dataset.index = index;
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', initFadeInAnimation);


// EXPERIENCE SECTION

let currentTab = 0;

function switchTab(index, tabElement) {
    // Update tab indicator position
    const tabs = document.querySelectorAll('.exp-tab');
    const indicator = document.getElementById('exp-tabIndicator');
    const tabWidth = tabElement.offsetWidth;
    const tabLeft = tabElement.offsetLeft;

    indicator.style.width = tabWidth + 'px';
    indicator.style.left = tabLeft + 'px';

    // Update active states
    tabs.forEach(tab => tab.classList.remove('exp-active'));
    tabElement.classList.add('exp-active');

    // Show corresponding content
    const contents = document.querySelectorAll('.exp-tab-content');
    contents.forEach((content, i) => {
        if (i === index) {
            content.classList.add('exp-active');
        } else {
            content.classList.remove('exp-active');
        }
    });

    currentTab = index;
}

// Show/hide desktop/mobile text
function updateTabText() {
    const isMobile = window.innerWidth <= 768;
    const desktopTexts = document.querySelectorAll('.exp-desktop-text');
    const mobileTexts = document.querySelectorAll('.exp-mobile-text');

    desktopTexts.forEach(text => {
        text.style.display = isMobile ? 'none' : 'inline';
    });

    mobileTexts.forEach(text => {
        text.style.display = isMobile ? 'inline' : 'none';
    });
}

// Initialize tab indicator position and text display
document.addEventListener('DOMContentLoaded', function () {
    const firstTab = document.querySelector('.exp-tab.exp-active');
    const indicator = document.getElementById('exp-tabIndicator');

    indicator.style.width = firstTab.offsetWidth + 'px';
    indicator.style.left = firstTab.offsetLeft + 'px';

    updateTabText();

    // Entrance animation
    setTimeout(() => {
        document.querySelector('.exp-section').style.transform = 'translateY(0)';
        document.querySelector('.exp-section').style.opacity = '1';
    }, 100);
});

// Update text display and indicator on resize
window.addEventListener('resize', function () {
    updateTabText();

    // Recalculate indicator position
    const activeTab = document.querySelector('.exp-tab.exp-active');
    const indicator = document.getElementById('exp-tabIndicator');

    setTimeout(() => {
        indicator.style.width = activeTab.offsetWidth + 'px';
        indicator.style.left = activeTab.offsetLeft + 'px';
    }, 100);
});

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    const tabs = document.querySelectorAll('.exp-tab');

    if (e.key === 'ArrowLeft' && currentTab > 0) {
        switchTab(currentTab - 1, tabs[currentTab - 1]);
    } else if (e.key === 'ArrowRight' && currentTab < tabs.length - 1) {
        switchTab(currentTab + 1, tabs[currentTab + 1]);
    }
});

// Smooth scroll
document.documentElement.style.scrollBehavior = 'smooth';