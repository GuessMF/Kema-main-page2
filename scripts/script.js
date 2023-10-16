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
    const moleculesImg = document.querySelector(".molecules-img");
    gsap.fromTo(
      moleculesImg,
      {
        scale: 1,
      },
      {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        onComplete: function () {
          moleculesImg.style.transform = "";
          moleculesImg.style.transition = "transform 0.3s ease-in-out";
        },
      }
    );
  }, 2500);

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
  setTimeout(() => {
    const onlineZalImg = document.querySelector(".online-zal-img");
    gsap.fromTo(
      onlineZalImg,
      {
        scale: 1,
      },
      {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        onComplete: function () {
          onlineZalImg.style.transform = "";
          onlineZalImg.style.transition = "transform 0.3s ease-in-out";
        },
      }
    );
  }, 4500);
});

const spans = document.querySelectorAll(".fourth-section__span");

spans.forEach((span) => {
  gsap.to(spans, {
    x: () => gsap.utils.random(-15, 15),
    y: () => gsap.utils.random(-15, 15),
    duration: 1,
    repeat: -1,
    yoyo: true,
  });
});

function getRandomSpan() {
  const randomIndex = Math.floor(Math.random() * spans.length);
  const randomSpan = spans[randomIndex];
  gsap.to(randomSpan, {
    opacity: 1,
    color: "#ffffff",
    textShadow: "0px 0px 5px rgba(249, 249, 249, 1)",
    duration: 0.3,
    onComplete: function () {
      setTimeout(() => {
        gsap.to(randomSpan, {
          opacity: 0.2,
          color: "#000000",
          textShadow: "none",
          duration: 0.3,
        });
      }, Math.random() * 1000);
    },
  });
}

setInterval(getRandomSpan, 1000);
