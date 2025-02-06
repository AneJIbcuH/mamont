const mamont = document.querySelector(".mamont");
const hand = document.querySelector(".hand");

let mamontTimeout;
const holdTime = 1000;

hand.addEventListener("touchstart", () => {
    mamontTimeout = setTimeout(() => {
    mamont.play();
  }, holdTime);
});

hand.addEventListener("touchend", () => {
  clearTimeout(mamontTimeout);
});

hand.addEventListener("touchmove", () => {
  clearTimeout(mamontTimeout);
});
