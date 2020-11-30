// Carousel logic

let carouselImages = document.getElementsByClassName("carousel-image");
let hiddenImage = 2;

let ticker = () => {
  hiddenImage === 2 ? (hiddenImage = 0) : hiddenImage++;
  console.log(hiddenImage);
};

setInterval(ticker, 3000);
