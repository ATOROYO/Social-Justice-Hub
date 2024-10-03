// Select the menu icon and nav links
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

// Add event listener to the menu icon
menuIcon.addEventListener("click", () => {
  // Toggle the 'active' class to show or hide the navigation links
  navLinks.classList.toggle("active");
});
