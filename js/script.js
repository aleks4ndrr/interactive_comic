let arrow_down;
let panel_one;
//initialize AOS when document loaded
window.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  arrow_down = document.getElementById("arrow");
  panel_one = document.getElementById("first");

  // check if elements exist before adding event listener
  if (arrow_down && panel_one) {
    arrow_down.addEventListener("click", () => {
      panel_one.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});
