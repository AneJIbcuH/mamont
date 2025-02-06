const mamont = document.querySelector(".mamont");
const hand = document.querySelector(".hand");

let timeout;
const holdTime = 1000;

hand.addEventListener("touchstart", () => {
  timeout = setTimeout(() => {
    mamont.play();
  }, holdTime);
});

hand.addEventListener("touchend", () => {
  clearTimeout(timeout);
});

hand.addEventListener("touchmove", () => {
  clearTimeout(timeout);
});
