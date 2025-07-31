function changeTheme(event) {
  event.preventDefault();

  let bodyElement = document.querySelector("body");

  if (bodyElement.classList.contains("light")) {
    bodyElement.classList.remove("light");
  } else {
    bodyElement.classList.add("light");
  }
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);


// Let us experiment with some mobile hamburger menu code

let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");

// Toggle menu by clicking on hamburger
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// close mobile toggle menu by clicking on LI
function hidemenubyli() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// This is the end of the mobile hamburger menu code


// Scroll spy code

// Get all the section elements
const sections = document.querySelectorAll('.section');

// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Remove the 'active' class from all nav links
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Add the 'active' class to a specific nav link
function addActiveClass(id) {
    // Find the nav link whose href matches the current section's ID
    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Handle the scroll event
function handleScroll() {
    // Get the current scroll position from the top of the viewport
    const scrollY = window.scrollY;

  sections.forEach(currentSection => {
        // Get the top and bottom position of the current section relative to the document
        // offsetTop gives the distance from the top of the document to the top of the element.
        const sectionTop = currentSection.offsetTop;
        const sectionHeight = currentSection.offsetHeight;
        const sectionId = currentSection.id;

        // Check if the current scroll position is within the bounds of this section
        // Dot appears a bit before section reaches top of screen
        const offset = 100;

        if (scrollY >= sectionTop - offset && scrollY < sectionTop + sectionHeight - offset) {
            removeActiveClass();
            addActiveClass(sectionId);
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Highlight correct section when page first loads
document.addEventListener('DOMContentLoaded', handleScroll);

// This is the end of my scroll spy code - yayyy


// Here is some code for the custom pointer
const cursorInner = document.getElementById("cursor-inner");
const cursorOuter = document.getElementById("cursor-outer");
const links = document.querySelectorAll("a,label,button");

document.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorInner.style.left = `${posX}px`;
  cursorInner.style.top = `${posY}px`;

  // cursorOuter.style.left = `${posX}px`;
  // cursorOuter.style.top = `${posY}px`;

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


