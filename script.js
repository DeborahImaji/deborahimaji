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
  const scrollY = window.scrollY;

  // --- New Logic to handle the 'Home' section when at the top of the page ---
  if (scrollY <= 5) { // Check if scroll is at or very near the top
    removeActiveClass();
    // Special case: Find the home link by its href="#"
    const homeLink = document.querySelector(`.nav-link[href="#"]`);
    if (homeLink) {
      homeLink.classList.add('active');
    }
    return; // Exit the function to prevent further checks
  }

  // --- Existing logic for other sections ---
  sections.forEach(currentSection => {
    const sectionTop = currentSection.offsetTop;
    const sectionHeight = currentSection.offsetHeight;
    const sectionId = currentSection.id;
    const offset = 100;

    if (scrollY >= sectionTop - offset && scrollY < sectionTop + sectionHeight - offset) {
      removeActiveClass();
      // Use the existing logic for all other links
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Highlight correct section when page first loads
document.addEventListener('DOMContentLoaded', handleScroll);

// This is the end of my scroll spy code - yayyy

// Beginning of hamburger menu code

let mobileTogglemenu = document.getElementById("mobiletogglemenu");

// Toggle menu by clicking on hamburger
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Close mobile toggle menu and scroll to a section
function hidemenuAndScroll(element) {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");

  const link = element.querySelector('a');
const targetId = link.getAttribute('href');

if (targetId === '#') {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
} else {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

  document.querySelectorAll('.mobile-navbar-tabs-li').forEach(item => {
    item.classList.remove('activeThismobiletab');
  });
  element.classList.add('activeThismobiletab');
}

// New Scroll Spy for Mobile (FINAL UPDATED VERSION)

// Get all the mobile menu links
const mobileNavLinks = document.querySelectorAll('#mobile-ul a');
const introMobileTab = document.getElementById('intro-mobile-tab');


// Function to handle the mobile scroll spy
function scrollSpyMobile() {
  const scrollY = window.scrollY;

  let currentActiveSection = '';

  // Special case: If at the top of the page, the active section is 'intro'
  if (scrollY <= 1) {
    currentActiveSection = 'intro';
  } else {
    sections.forEach(currentSection => {
      // Offset to activate a bit earlier (adjust as needed)
      const sectionTop = currentSection.offsetTop - 150;
      const sectionHeight = currentSection.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentActiveSection = currentSection.getAttribute('id');
      }
    });
  }


  if (currentActiveSection) {
    mobileNavLinks.forEach(link => {
      const listItem = link.parentElement;

      // Remove the active class from all mobile links
      listItem.classList.remove('activeThismobiletab');

      // Now, add the active class to the correct one
      // Special case for the home link
      if (currentActiveSection === 'intro' && link.getAttribute('href') === '#') {
        listItem.classList.add('activeThismobiletab');
      } 
      // Normal case for all other links
      else if (link.href.includes(currentActiveSection) && currentActiveSection !== 'intro') {
        listItem.classList.add('activeThismobiletab');
      }
    });
  }
}

// Add the scroll event listener
window.addEventListener('scroll', scrollSpyMobile);

// Initially call the function to set the active tab on page load
document.addEventListener('DOMContentLoaded', scrollSpyMobile);

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