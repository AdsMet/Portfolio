document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".image-carousel");
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector(".image-track");
        const prevBtn = document.createElement("button");
        const nextBtn = document.createElement("button");
        
        prevBtn.classList.add("carousel-btn", "left");
        nextBtn.classList.add("carousel-btn", "right");
        prevBtn.innerHTML = "&#10094;"; // Left arrow
        nextBtn.innerHTML = "&#10095;"; // Right arrow
        
        carousel.appendChild(prevBtn);
        carousel.appendChild(nextBtn);
        
        let currentIndex = 0;
        const images = track.querySelectorAll("img");
        const maxIndex = images.length - 5;
        
        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 220}px)`;
        }
        
        prevBtn.addEventListener("click", function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        nextBtn.addEventListener("click", function () {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });
    });
});
