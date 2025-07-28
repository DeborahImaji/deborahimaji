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

// Here is some scroll spy code - I'm experimenting

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