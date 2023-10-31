(() => {
  gsap.registerPlugin(TextPlugin);

  const textElement = document.querySelector(".burning-passion h3");

  const scrambleTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: textElement,
      start: "top center", // Adjust this as needed
      end: "bottom center", // Adjust this as needed
      scrub: 1,
    },
  });

  scrambleTimeline.to(textElement, {
    scrambleText: {
      text: "INTENSE DESIRE",
      rightToLeft: true,
      chars: "lowercase",
    },
    duration: 5,
  });
})();
