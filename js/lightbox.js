// Lightbox

// Get elements
const rejectBtn = document.getElementById("rejectBtn");
const lightbox = document.getElementById("lightbox");
const closeLightbox = document.getElementById("closeLightbox");

// Show lightbox when clicking the "Reject" button
rejectBtn.addEventListener("click", () => {
    lightbox.style.display = "flex";
});

// Hide lightbox when clicking the close button
closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Hide lightbox when clicking outside the content box
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});