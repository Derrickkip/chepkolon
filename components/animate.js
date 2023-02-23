import gsap from "gsap"

// import { ScrollTrigger } from "gsap/ScrollTrigger";
//Animate text 

export const showImage = elem => {
  gsap.to(elem, {
    // xPercent: 20,
    opacity: 1,
    stagger: 0.2,
    duration: 0.75,
    scale: 1,
    ease: "power3.inOut",
  });
};

// export const showImage = elem => {
//   // gsap.from(elem, {
//   //   display: "hidden",
//   //   duration: 4,
//   //   ease: "power2",
//   // })
//   gsap.getProperty(elem, "x")
// }
