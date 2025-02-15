// Dark Mode Toggle
const toggleButton = document.createElement("button");
toggleButton.className = "toggle-btn";
toggleButton.innerText = "Dark Mode";
toggleButton.onclick = () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.innerText = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
};

// Add button to page
document.addEventListener("DOMContentLoaded", () => {
    const toggleContainer = document.createElement("div");
    toggleContainer.className = "toggle-container";
    toggleContainer.appendChild(toggleButton);
    document.body.appendChild(toggleContainer);

    // Scroll animation for sections
    const sections = document.querySelectorAll("section");
    const revealSections = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections(); // Call once to reveal sections already in view
});
