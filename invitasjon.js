var image = document.getElementById("image");

var images = ["first-image.jpg", "second-image.jpg", "third-image.jpg"];
var currentImageIndex = 0;

image.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  image.src = images[currentImageIndex];
});
