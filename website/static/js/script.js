function showSection(sectionId) {
  // Hide all content sections
  let sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Show the selected content section
  document.getElementById(sectionId).style.display = "block";

  // Remove 'active' class from all menu items
  let menuItems = document.querySelectorAll(".navigation a");
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Add 'active' class to the clicked menu item
  let activeMenuItem = document.querySelector(
    `.navigation a[data-section="${sectionId}"]`
  );
  if (activeMenuItem) {
    activeMenuItem.classList.add("active");
  }
}

// // i dont think this is needed (but this is to ensure that the project is highlighted when the page is reload)
// document.addEventListener("DOMContentLoaded", function() {
//   showSection('projects'); // Show Projects section on load
// });
