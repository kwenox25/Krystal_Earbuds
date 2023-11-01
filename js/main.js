let menu = document.querySelector(".menu");
let menuItems = document.querySelectorAll(".menuItem");
let hamburger = document.querySelector(".hamburger");
let menuIcon = document.querySelector(".menuIcon");
let mainHeader = document.querySelector("#main-header");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    hamburger.classList.remove("expanded");
    mainHeader.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
    hamburger.classList.add("expanded");
    mainHeader.classList.add("showMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

let lightbox = document.querySelector("#lightbox");

(() => {
  gsap.registerPlugin(ScrollTrigger);

  let tlImages = gsap.timeline();
  tlImages.from("#hero-image", {
    duration: 3,
    autoAlpha: 0,
    x: -200,
  });
})();

(() => {
  console.log.apply("IFFE Fired");

  //variables
  const model = document.querySelector("#model");
  const hotSpots = document.querySelectorAll(".Hotspot");

  //functions
  function loaded() {
    hotSpots.forEach((hotSpot) => {
      hotSpot.style.display = "block";
    });
  }

  let infoHotspots = [
    {
      title: "Air Vent",
      desc: "The air vent is a small opening or perforation in the earbud's casing designed to provide ventilation. It helps prevent a vacuum seal in your ear, enhancing comfort during extended use and allowing for better sound quality by equalizing air pressure inside and outside the earbud.",
      icon: "images/airvent.png",
    },

    {
      title: "L for Left Label",
      desc: "The L label on the earbud serves as a clear indication of which ear the earbud should be placed in. This is essential for users to ensure they're wearing the earbuds correctly for optimal audio quality and comfort.",
      icon: "images/label.png",
    },

    {
      title: "Soft Earbud:",
      desc: "Soft earbuds are the part of the earbud that comes into direct contact with the user's ear canal. They are typically made from soft, comfortable materials to ensure a secure and comfortable fit. The choice of soft materials helps reduce discomfort during extended use and enhances noise isolation.",
      icon: "images/earbuds.png",
    },

    {
      title: "Sound Output Hole:",
      desc: "The sound output hole is where audio is emitted from the earbud. It's the point where the music or other audio signals generated within the earbud's driver or speaker are released into the ear canal to be heard by the user.",
      icon: "images/sound.png",
    },

    {
      title: "Magnetic Charging Pin 1:",
      desc: "Magnetic charging pins are connectors used for recharging the earbuds. They are often magnetized to help the earbuds snap into place on a charging dock or case, ensuring a secure and reliable connection for charging. Magnetic Charging Pin 1 implies it's one of the two connectors on the earbud.",
      icon: "images/charge.png",
    },

    {
      title: "Magnetic Charging Pin 2:",
      desc: "Similar to Magnetic Charging Pin 1, this is the second connector used for charging the earbud. Having two pins often allows for faster charging and more secure connection between the earbud and the charging dock or case.",
      icon: "images/charge.png",
    },

    {
      title: "Microphone Hole:",
      desc: "The microphone hole is where the built-in microphone is located on the earbud. This is essential for voice calls, voice commands, or any other feature that requires audio input from the user. The hole allows sound to reach the microphone for clear communication.",
      icon: "images/microphone.png",
    },
  ];

  const imagePaths = [
    "images/airvent.png",
    "images/label.png",
    "images/earbuds.png",
    "images/sound.png",
    "images/charge.png",
    "images/charge.png",
    "images/microphone.png",
  ];

  function showInfo(e) {
    // const selected = document.querySelector(`#${this.slot}`);
    // const h2 = selected.querySelector("h2");
    // const p = selected.querySelector("p");

    // // Replace the content of the title and description
    // const hotspotIndex = Number(this.slot.split("-")[1]) - 1; // Extract hotspot index
    // h2.textContent = infoHotspots[hotspotIndex].title;
    // p.textContent = infoHotspots[hotspotIndex].desc;

    const hotspotIndex = Number(this.slot.split("-")[1]) - 1; // Extract hotspot index
    const selected = document.querySelector(`#hotspot-${hotspotIndex + 1}`);

    const titleElement = selected.querySelector("h2");
    const descElement = selected.querySelector("p");
    const imgElement = selected.querySelector(".hotspot-image");

    const infoHotspot = infoHotspots[hotspotIndex]; // Get the hotspot info

    titleElement.textContent = infoHotspot.title;
    descElement.textContent = infoHotspot.desc;

    imgElement.src = imagePaths[hotspotIndex];

    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo(e) {
    //console.log(e.currentTarget.slot);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  function loadInfo() {
    infoHotspots.forEach((infoHotspot, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);
      // console.log(selected);
      // console.log(infoHotspot.title);
      // console.log(infoHotspot.desc);
    });
  }

  loadInfo();

  //event listeners

  model.addEventListener("load", loaded);

  hotSpots.forEach((hotSpot) => {
    hotSpot.addEventListener("mouseover", showInfo);
    hotSpot.addEventListener("mouseout", hideInfo);
  });
})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.

(() => {
  const colors = ["#a9d9ea", "#f8f8f8", "#383838", "#b2e6c5"];

  colors.forEach((color, index) => {
    document.documentElement.style.setProperty(`--color-${index + 1}`, color);
  });
})();
