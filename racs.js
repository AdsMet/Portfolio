document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".zoom-img");
    const zoomOverlay = document.createElement("div");
    zoomOverlay.id = "zoom-overlay";
    zoomOverlay.innerHTML = `
        <img id="zoomed-image" src="" alt="Zoomed Image">
        <span id="close-btn">&times;</span>
        <span id="prev-btn">&#10094;</span>
        <span id="next-btn">&#10095;</span>
    `;
    document.body.appendChild(zoomOverlay);

    const zoomedImage = document.getElementById("zoomed-image");
    const closeButton = document.getElementById("close-btn");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    let currentIndex = 0;

    function updateImage(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        currentIndex = index;
        zoomedImage.src = images[currentIndex].src;
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            updateImage(index);
            zoomOverlay.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => {
        zoomOverlay.style.display = "none";
    });

    prevButton.addEventListener("click", () => updateImage(currentIndex - 1));
    nextButton.addEventListener("click", () => updateImage(currentIndex + 1));

    document.addEventListener("keydown", (e) => {
        if (zoomOverlay.style.display === "flex") {
            if (e.key === "Escape") zoomOverlay.style.display = "none";
            if (e.key === "ArrowLeft") updateImage(currentIndex - 1);
            if (e.key === "ArrowRight") updateImage(currentIndex + 1);
        }
    });

    zoomOverlay.addEventListener("click", (e) => {
        if (e.target === zoomOverlay) zoomOverlay.style.display = "none";
    });
});
