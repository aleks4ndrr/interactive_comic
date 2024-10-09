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

// meteor element
const meteor = document.querySelector(".panel1__meteor");

// handle scroll event
function handleScroll() {
  // position of the meteor relative to the viewport
  const meteorRect = meteor.getBoundingClientRect();

  // height of the viewport
  const windowHeight = window.innerHeight;

  // if the meteor is in view, start applying the scroll effect
  if (meteorRect.top < windowHeight && meteorRect.bottom > 0) {
    // get the scroll position (how much the user has scrolled)
    const scrollPosition = window.scrollY || window.pageYOffset;

    // calculate the amount to move the meteor
    const movementAmount = (scrollPosition - windowHeight) / 250;

    if (scrollPosition > windowHeight && scrollPosition < 3 * windowHeight) {
      meteor.style.transform = `translate(${movementAmount * -100}px, ${
        movementAmount * 100
      }px)`;
    }
  }
}

// attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// SOUND FOR FIRST PANEL

const sound = new Audio("assets/sounds/panel1.mp3");
sound.preload = "auto"; // Preload the sound

const firstPanel = document.getElementById("panel1");

// handle when the element comes into view
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Play sound when #first comes into view
      sound.play();
    }
  });
};

// Create the IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.3,
});

// Start observing the "first" panel
observer.observe(firstPanel);

const shipClosed = document.querySelector(".panel2__ship");
const shipOpen = document.querySelector(".panel2__ship_open");

shipClosed.addEventListener("click", () => {
  shipClosed.style.display = "none";
  shipOpen.style.display = "block";
});
