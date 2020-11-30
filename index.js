// Carousel logic

const carouselImages = Array.from(
  document.getElementsByClassName("carousel-image")
);
let hiddenImage = 2;
let myInterval;

const stopButton = document.getElementById("stop-button");
const startButton = document.getElementById("start-button");

const ticker = () => {
  hiddenImage === 2 ? (hiddenImage = 0) : hiddenImage++;
  imageDisplayer();
  imageOrderer();
};

const startCarousel = () => {
  myInterval = setInterval(ticker, 3000);
};

stopButton.addEventListener("click", () => {
  clearInterval(myInterval);
});

startButton.addEventListener("click", () => {
  startCarousel();
});

const imageDisplayer = () => {
  carouselImages.forEach((item, index) => {
    if (index === hiddenImage) {
      item.classList.remove("image-visible");
      item.classList.add("image-hidden");
    } else {
      item.classList.add("image-visible");
      item.classList.remove("image-hidden");
    }
  });
};

const imageOrderer = () => {
  hiddenImage === 1
    ? (carouselImages[0].style.order = 1)
    : (carouselImages[0].style.order = 0);
};
