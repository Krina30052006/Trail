
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".gallery .card img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  // Debug
  console.log("Gallery images found:", cards.length);

  cards.forEach((img) => {
    img.addEventListener("click", function() {
      console.log("Image clicked:", this.src);
      lightboxImg.src = this.src;
      lightbox.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function() {
    console.log("Close button clicked");
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) {
      console.log("Clicked outside image");
      lightbox.style.display = "none";
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      console.log("Escape key pressed");
      lightbox.style.display = "none";
    }
  });
});
