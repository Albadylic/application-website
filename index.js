// Carousel logic

let carouselImages = Array.from(
  document.getElementsByClassName("carousel-image")
);
let hiddenImage = 2;

const stopButton = document.getElementById("stop-button");

const ticker = () => {
  hiddenImage === 2 ? (hiddenImage = 0) : hiddenImage++;
  console.log({ hiddenImage });
  console.log(carouselImages);
  imageDisplayer();
};

const myInterval = setInterval(ticker, 3000);

stopButton.addEventListener("click", () => {
  clearInterval(myInterval);
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
