console.log("VANTA Loaded");
const productImages = [
  "assets/images/product1-1.png",
  "assets/images/product1-2.png",
  "assets/images/product1-3.png"
];

let currentProductImage = 0;

function showProductImage(index) {
  currentProductImage = index;

  document.getElementById("product1-image").src =
    productImages[currentProductImage];

  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentProductImage);
  });
}

function changeProductImage(direction) {
  currentProductImage += direction;

  if (currentProductImage < 0) {
    currentProductImage = productImages.length - 1;
  }

  if (currentProductImage >= productImages.length) {
    currentProductImage = 0;
  }

  showProductImage(currentProductImage);
}
let touchStartX = 0;
let touchEndX = 0;

const productSlider = document.querySelector(".product-slider");

if (productSlider) {
  productSlider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  productSlider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;

    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance < 0) {
        changeProductImage(1);
      } else {
        changeProductImage(-1);
      }
    }
  });
}
