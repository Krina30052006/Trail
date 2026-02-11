document.addEventListener("DOMContentLoaded", function() {
  const galleryImages = document.querySelectorAll(".gallery .card img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  // Open lightbox when clicking any image
  galleryImages.forEach(img => {
    img.addEventListener("click", function() {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
    });
  });

  // Close when clicking the close button
  closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
  });

  // Close when clicking outside the image
  lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Close with ESC key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  });
});
