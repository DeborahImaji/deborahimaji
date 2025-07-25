function changeTheme (event) {
    event.preventDefault();

    let bodyElement = document.querySelector("body");

    if (bodyElement.classList.contains("light")) {
        bodyElement.classList.remove("light");
    } else {
        bodyElement.classList.add("light");
    }
}

const links = document.querySelectorAll('.nav-link');

// Highlight the link when clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('current'));
    link.classList.add('current');
  });
});

// Highlight the correct link on page load (based on URL hash)
window.addEventListener('DOMContentLoaded', () => {
  const currentHash = window.location.hash || '#home';
  const activeLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
  if (activeLink) {
    activeLink.classList.add('current');
  }
});

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener('click', changeTheme);