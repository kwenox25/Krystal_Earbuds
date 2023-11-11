(() => {
  gsap.registerPlugin(SplitText);

  var tlSplitBurrowing = gsap.timeline(),
    SplitBurrowing = new SplitText(".titleColours", { type: "words,chars" }),
    chars = SplitBurrowing.chars;
  tlSplitBurrowing.from(
    chars,
    {
      duration: 0.8,
      opacity: 0,
      y: 10,
      ease: "circ.out",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".titleColours",
        //markers:true,
        start: "top 75%",
        end: "bottom center",
        scrub: 1,
      },
    },
    "+=0"
  );
})();

(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Create a GSAP timeline for the animations with a 1-second stagger
  var tl = gsap.timeline();

  // Stagger the animations with a 1-second delay
  tl.from(".features", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 1,
    scrollTrigger: {
      trigger: "#hero-con",
      start: "top 50%",
      end: "bottom center",
      // markers: true,
      toggleActions: "restart none resume complete",
    },
  });
})();

(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const navLinks = document.querySelectorAll("#main-header nav ul li a");

  function scrollLink(e) {
    e.preventDefault();
    console.log(e.currentTarget.hash);
    let selectedLink = e.currentTarget.hash;
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `${selectedLink}`, offsetY: 100 },
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", scrollLink);
  });
})();
