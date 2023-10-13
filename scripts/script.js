window.addEventListener("load", function () {
  setTimeout(function () {
    const rightProjector = document.querySelector(".right-projector");
    const leftProjector = document.querySelector(".left-projector");

    gsap.to(rightProjector, {
      rotation: 0,
      top: 0,
      right: "25%",
      height: "100%",
      duration: 2,
      ease: "power2.out",
    });
    gsap.to(leftProjector, {
      rotation: 0,
      top: 0,
      left: "10%",
      height: "100%",
      duration: 2,
      ease: "power2.out",
    });
  }, 1000);
  setTimeout(() => {
    const firstBtn = document.querySelector(".first-section__molecules");
    gsap.to(firstBtn, {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });
  }, 2000);
  setTimeout(() => {
    const title = document.querySelector(".first-section__title");
    gsap.to(title, {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });
  }, 3000);
  setTimeout(() => {
    const secondBtn = document.querySelector(".first-section__online-zal");
    gsap.to(secondBtn, {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });
  }, 4000);
});

const moleculesImg = document.querySelector(".molecules-img");
const onlineZalImg = document.querySelector(".online-zal-img");
function animateMolecules() {
  gsap.to(moleculesImg, {
    scale: 1.1,
    // rotationX: 30,
    duration: 1,
    yoyo: true,
    repeat: 1,
    onComplete: function () {
      animateMolecules();
    },
  });
}

function animateZal() {
  gsap.to(onlineZalImg, {
    scale: 1.1,
    // rotationX: 30,
    duration: 1.1,
    yoyo: true,
    repeat: 1,
    onComplete: function () {
      animateZal();
    },
  });
}
animateMolecules();
animateZal();
