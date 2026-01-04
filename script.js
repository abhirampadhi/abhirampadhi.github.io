function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Update footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle (future expansion)
function toggleMenu() {
  alert("Mobile menu can be implemented if needed");
}

