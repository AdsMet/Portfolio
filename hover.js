document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar a, .services, .case-studies, .testimonials, .recent-work, .contact");

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
});
