import Image from "next/image";
import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import ImageSlider from "./imageSlider";

// core components

const items = [
  {
    src: require("../assets/assembly.jpg"),
    alt: "Somewhere",
    caption: "Somewhere"
  },
  {
    src: require("../assets/assembly.jpg"),
    alt: "Somewhere else",
    caption: "Somewhere else"
  },
  {
    src: require("../assets/assembly.jpg"),
    alt: "Here it is",
    caption: "Here it is"
  }
];

function SectionCarousel() {
      return (
        <div>
          <ImageSlider images={items} />
        </div>
      )
}

export default SectionCarousel;

/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import Image from "next/image";
// import React from "react";

// // reactstrap components
// import {
//   Card,
//   Container,
//   Row,
//   Col,
//   Carousel,
//   CarouselItem,
//   CarouselIndicators,
//   CarouselCaption
// } from "reactstrap";

// // core components

// const items = [
//   {
//     src: require("../assets/assembly.jpg"),
//     alt: "Somewhere",
//     caption: "Somewhere"
//   },
//   {
//     src: require("../assets/assembly.jpg"),
//     alt: "Somewhere else",
//     caption: "Somewhere else"
//   },
//   {
//     src: require("../assets/assembly.jpg"),
//     alt: "Here it is",
//     caption: "Here it is"
//   }
// ];


// function SectionCarousel() {
//   const [activeIndex, setActiveIndex] = React.useState(0);
//   const [animating, setAnimating] = React.useState(false);
//   const onExiting = () => {
//     setAnimating(true);
//   };
//   const onExited = () => {
//     setAnimating(false);
//   };
//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };
//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };
//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };
//   return (
//       <div className="carousel flex w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <Image src={require("../assets/assembly.jpg")} className="w-full" alt="assembly"/>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//   <Image src={require("../assets/assembly.jpg")} className="w-full" alt="assembly"/>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//   <Image src={require("../assets/assembly.jpg")} className="w-full" alt="assembly"/>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide4" className="carousel-item relative w-full">
//   <Image src={require("../assets/assembly.jpg")} className="w-full" alt="assembly"/>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle">❮</a> 
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
//   );
// }

// export default SectionCarousel;
