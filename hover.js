document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll(".services, .case-studies, .testimonials, .recent-work, .contact");

    // Highlight navbar links on hover
    links.forEach(link => {
        link.addEventListener("mouseenter", function() {
            this.style.color = "#00ff00";
            this.style.textDecoration = "underline";
        });
        link.addEventListener("mouseleave", function() {
            this.style.color = "";
            this.style.textDecoration = "none";
        });
    });

    // Highlight section when scrolled into view
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                section.style.color = "#00ff00";
                section.style.textDecoration = "underline";
            } else {
                section.style.color = "";
                section.style.textDecoration = "none";
            }
        });
    });
});
