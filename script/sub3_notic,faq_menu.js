console.clear();

const liContainer = document.querySelector("nav");
const liEls = [...document.querySelectorAll("nav a")];
const slideEl = document.querySelector(".focus-el");

let liContainerRect = liContainer.getBoundingClientRect();

let degreesToRotate = 25;
let animationDuration = 0.75;
let activeIndex = 0;

let tl = gsap.timeline();

liEls.forEach((li, index) => {
  let liRect = li.getBoundingClientRect();
  li.addEventListener("mousedown", () => {
    if (index == activeIndex) {
      return;
    }

    let x = index == 0 ? -1 : 1;

    activeIndex = index;

    tl.to(liContainer, animationDuration - 0.3, {
      rotateY: `${x * degreesToRotate}deg`,
    });

    tl.to(
      slideEl,
      animationDuration,
      {
        left: `${liRect.left - liContainerRect.left}px`,
        ease: "bounce.out",
      },
      `-=${animationDuration - 0.3}`
    );

    tl.to(
      liContainer,
      animationDuration - 0.3,
      {
        rotateY: `0deg`,
      },
      "-=0.3"
    );
  });
});