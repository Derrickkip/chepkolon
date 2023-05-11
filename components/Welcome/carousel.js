/* eslint-disable @next/next/no-img-element */
// import React from "react";

// import Image from "next/image";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import styles from './Welcome.module.css';


// const items = [
//   {
//     src: require("../../assets/assembly.jpg"),
//     alt: "Somewhere",
//     caption: "Somewhere"
//   },
//   {
//     src: require("../../assets/assembly.jpg"),
//     alt: "Somewhere else",
//     caption: "Somewhere else"
//   },
//   {
//     src: require("../../assets/assembly.jpg"),
//     alt: "Here it is",
//     caption: "Here it is"
//   }
// ];

// const settings = {
// 	infinite: true,
// 	dots: true,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	lazyLoad: true,
// 	autoplay: true,
//     autoplaySpeed: 5000,

// };

// function WelcomeCarousel() {
//       return (
//         <div className={styles.Carousel}>
//           <Slider {...settings}>
//                 {items.map((item) => (
//                     <div key={item.id}>
//                         <Image src={item.src} alt={item.alt} />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//       )
// }

// export default WelcomeCarousel;

import Image from 'next/image';
// import { useState, useRef, useEffect } from 'react';

// // Data
// // import data from './data.json';

// const WelcomeCarousel = () => {
//   const maxScrollWidth = useRef(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carousel = useRef(null);

//   const items = [
//       {
//         src: require("../../assets/assembly.jpg"),
//         alt: "Here it is",
//         caption: "Here it is"
//       },
//       {
//         src: require("../../assets/assembly.jpg"),
//         alt: "Somewhere",
//         caption: "Somewhere"
//       },
//       {
//         src: require("../../assets/assembly.jpg"),
//         alt: "Here it is",
//         caption: "Here it is"
//       },
//       {
//         src: require("../../assets/assembly.jpg"),
//         alt: "Somewhere else",
//         caption: "Somewhere else"
//       },
//       {
//         src: require("../../assets/assembly.jpg"),
//         alt: "Here it is",
//         caption: "Here it is"
//       }
//     ];

//   const movePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevState) => prevState - 1);
//     }
//   };

//   const moveNext = () => {
//     if (
//       carousel.current !== null &&
//       carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
//     ) {
//       setCurrentIndex((prevState) => prevState + 1);
//     }
//   };

//   const isDisabled = (direction) => {
//     if (direction === 'prev') {
//       return currentIndex <= 0;
//     }

//     if (direction === 'next' && carousel.current !== null) {
//       return (
//         carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
//       );
//     }

//     return false;
//   };

//   useEffect(() => {
//     if (carousel !== null && carousel.current !== null) {
//       carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
//     }
//   }, [currentIndex]);

//   useEffect(() => {
//     maxScrollWidth.current = carousel.current
//       ? carousel.current.scrollWidth - carousel.current.offsetWidth
//       : 0;
//   }, []);

//   return (
//     <div className="carousel my-12 mx-auto">
//       <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
//         Our epic carousel
//       </h2>
//       <div className="relative overflow-hidden">
//         <div className="flex justify-between absolute top left w-full h-full">
//           <button
//             onClick={movePrev}
//             className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('prev')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="sr-only">Prev</span>
//           </button>
//           <button
//             onClick={moveNext}
//             className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('next')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </button>
//         </div>
//         <div
//           ref={carousel}
//           className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
//         >
//           {items.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className="carousel-item text-center relative w-full h-full snap-start"
//               >
//                 <a
//                   href='be/me'
//                   className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
//                   style={{ backgroundImage: `url(${item.src || ''})` }}
//                 >
//                   <Image
//                     src={item.src || ''}
//                     alt={item.alt}
//                     className="w-full aspect-square hidden"
//                     style={{display: 'none'}}
//                     width={1000}
//                     height={1000}
//                   />
//                 </a>
//                 <a
//                   href='be/me'
//                   className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
//                 >
//                   <h3 className="text-white py-6 px-3 mx-auto text-xl">
//                     {item.caption}
//                   </h3>
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomeCarousel;

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classNames from 'classnames';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

  const items = [
      {
        src: require("../../assets/assembly.jpg"),
        alt: "Here it is",
        caption: "Here it is"
      },
      {
        src: require("../../assets/assembly2.jpg"),
        alt: "Somewhere",
        caption: "Somewhere"
      },
      {
        src: require("../../assets/assembly.jpg"),
        alt: "Here it is",
        caption: "Here it is"
      },
      {
        src: require("../../assets/assembly.jpg"),
        alt: "Somewhere else",
        caption: "Somewhere else"
      },
      {
        src: require("../../assets/assembly.jpg"),
        alt: "Here it is",
        caption: "Here it is"
      }
    ];

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
      const { carouselState: { currentSlide } } = rest;
      return (
        <div className="carousel-button-group">
          <button
            onClick={() => previous()}
            className={classNames("hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300", currentSlide === 0 ? 'disable' : '')}
            // disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={() => next()}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            // disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
          {/* <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
          <ButtonTwo onClick={() => next()} />
          <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
        </div>
      );
    };

function WelcomeCarousel() {
      return (
        <div className=''>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            customButtonGroup={<ButtonGroup />}
            arrows={false}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {items.map((item, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-full h-full snap-start"
              >
                <a
                  href='be/me'
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${item.src || ''})` }}
                >
                  <Image
                    src={item.src || ''}
                    alt={item.alt}
                    className="w-full aspect-square hidden h-full"
                  />
                </a>
                {/* <a
                  href='be/me'
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {item.caption}
                  </h3>
                </a> */}
              </div>
            );
          })}
          </Carousel>;
        </div>
      )
}

export default WelcomeCarousel;

