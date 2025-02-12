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

// Dynamic Filter Button Generation
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-card");
  const filterContainer = document.getElementById("filter-container");
  const uniqueSkills = new Set();

  // Extract unique skills from projects
  projects.forEach((project) => {
    const skills = project.dataset.skills.split(",");
    skills.forEach((skill) => uniqueSkills.add(skill.trim()));
  });

  // Sort skills alphabetically
  const sortedSkills = Array.from(uniqueSkills).sort();

  // Create filter buttons dynamically
  sortedSkills.forEach((skill) => {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.dataset.skill = skill;
    button.textContent = skill;
    filterContainer.appendChild(button);
  });

  filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-button")) {
      const button = event.target;
      const state = button.dataset.state;
      button.dataset.state =
        state === "include" ? "exclude" : state === "exclude" ? "" : "include";
      button.classList.toggle("include", button.dataset.state === "include");
      button.classList.toggle("exclude", button.dataset.state === "exclude");
      applyFilters();
    }
  });

  function applyFilters() {
    const includeSkills = [];
    const excludeSkills = [];

    document.querySelectorAll(".filter-button").forEach((button) => {
      if (button.dataset.state === "include")
        includeSkills.push(button.dataset.skill);
      if (button.dataset.state === "exclude")
        excludeSkills.push(button.dataset.skill);
    });

    projects.forEach((project) => {
      const skills = project.dataset.skills.split(",");
      const includeMatch = includeSkills.every((skill) =>
        skills.includes(skill)
      );
      const excludeMatch = excludeSkills.some((skill) =>
        skills.includes(skill)
      );

      project.style.display =
        (includeMatch && !excludeMatch) ||
        (includeSkills.length === 0 && !excludeMatch)
          ? "block"
          : "none";
    });
  }
});
