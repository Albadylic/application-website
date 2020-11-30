// Carousel logic

let carouselImages = document.getElementsByClassName("carousel-image");
let hiddenImage = 2;

const stopButton = document.getElementById("stop-button");

let ticker = () => {
  hiddenImage === 2 ? (hiddenImage = 0) : hiddenImage++;
  console.log(hiddenImage);
};

let myInterval = setInterval(ticker, 3000);

stopButton.addEventListener("click", () => {
  clearInterval(myInterval);
});
