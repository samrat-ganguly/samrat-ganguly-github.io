import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
// Scroll Tracking
const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackerTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
  {
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    duration: 1,
    timeline: scrollTrackerTimeline,
  }
);

//Scroll Reveal
ScrollReveal().reveal(".header", {
  duration: 2500,
  distance: "50px",
  origin: "top",
});
ScrollReveal().reveal(".project", {
  duration: 1000,
  delay: 2000,
});
ScrollReveal().reveal(".left", {
  duration: 1500,
  delay: 500,
  distance: "40px",
  origin: "left",
});
ScrollReveal().reveal(".right", {
  duration: 1500,
  delay: 500,
  distance: "40px",
  origin: "right",
});

ScrollReveal().reveal(".project-info", {
  duration: 1500,
  delay: 300,
  distance: "40px",
  origin: "bottom",
});
ScrollReveal().reveal(".project-img", {
  duration: 1500,
  delay: 500,
  distance: "40px",
  origin: "bottom",
});

ScrollReveal().reveal(".about-img", {
  duration: 1500,
  delay: 500,
  distance: "40px",
  origin: "left",
});
ScrollReveal().reveal(".info", {
  duration: 1500,
  delay: 500,
  distance: "40px",
  origin: "right",
});

ScrollReveal().reveal(".contact-item", {
  duration: 1500,
  delay: 500,
  distance: "40px",
  origin: "bottom",
});
