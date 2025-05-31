document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-icon");
  const sections = [];

  // Map each nav icon to its corresponding section
  navLinks.forEach(link => {
    const targetId = link.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      sections.push({
        id: targetId,
        element: section,
        link: link
      });
    }
  });

  function onScroll() {
    let currentSectionId = null;

    sections.forEach(section => {
      const rect = section.element.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        currentSectionId = section.id;
      }
    });

    // Fallback to first section if at top of page
    if (!currentSectionId && window.scrollY === 0 && sections.length > 0) {
      currentSectionId = sections[0].id;
    }

    // Update active class
    sections.forEach(section => {
      if (section.id === currentSectionId) {
        section.link.classList.add("active");
      } else {
        section.link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // Run once on load
});
