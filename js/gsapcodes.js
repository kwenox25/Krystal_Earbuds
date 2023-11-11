(() => {
  gsap.registerPlugin(SplitText);

  var tlSplitTitle = gsap.timeline(),
    SplitTitle = new SplitText(".titleColours", { type: "words,chars" }),
    chars = SplitTitle.chars;
  tlSplitTitle.from(
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

(() => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hotspotCon",
      start: "top center",
      // end: "center center",
      scrub: 1,
    },
  });
  tl.from(
    ".krystal-single",
    1,
    {
      autoAlpha: 0,
      scale: 0,
      ease: "elastic.in(1, 0.5)",
      x: -200,
    },
    0.5
  );

  tl.staggerFrom(
    ".krystal-waves",
    1,
    {
      autoAlpha: 0,
      x: -200,
      ease: "power2.out",
    },
    0.2
  );
  tl.from(".high", 1, {
    autoAlpha: 0,
    scale: 0,
    ease: "elastic.in(1, 0.5)",
    x: -200,
  });
  tl.from(".medium", 1, {
    autoAlpha: 0,
    scale: 0,
    ease: "elastic.in(1, 0.5)",
    x: -200,
  });
  tl.from(".low", 1, {
    autoAlpha: 0,
    scale: 0,
    ease: "elastic.in(1, 0.5)",
    x: -200,
  });
})();
