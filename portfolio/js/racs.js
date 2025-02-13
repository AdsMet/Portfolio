document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".zoom-img");
    const zoomOverlay = document.createElement("div");
    zoomOverlay.id = "zoom-overlay";
    zoomOverlay.innerHTML = `
        <img id="zoomed-image" src="" alt="Zoomed Image">
        <span id="close-btn">&times;</span>
    `;
    document.body.appendChild(zoomOverlay);

    const zoomedImage = document.getElementById("zoomed-image");
    const closeButton = document.getElementById("close-btn");

    images.forEach(img => {
        img.addEventListener("click", () => {
            zoomedImage.src = img.src;
            zoomOverlay.style.display = "flex"; // Show zoomed image
        });
    });

    closeButton.addEventListener("click", () => {
        zoomOverlay.style.display = "none"; // Hide on close
    });

    zoomOverlay.addEventListener("click", (e) => {
        if (e.target === zoomOverlay) zoomOverlay.style.display = "none"; // Hide when clicking outside image
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") zoomOverlay.style.display = "none"; // Hide on ESC press
    });
});
