import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'

import { Transition } from '@headlessui/react'

// Data
import data from '../data/data.json';

// const Carousel = () => {
//   const maxScrollWidth = useRef(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carousel = useRef(null);

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

  // const isDisabled = (direction) => {
  //   if (direction === 'prev') {
  //     return currentIndex <= 0;
  //   }

  //   if (direction === 'next' && carousel.current !== null) {
  //     return (
  //       carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
  //     );
  //   }

  //   return false;
  // };

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
//     <div className="carousel">
//       {/* <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
//         Our epic carousel
//       </h2> */}
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
//           className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 w-full h-full"
//         >
//           {/* {data.resources.map((resource, index) => {
//             return ( */}
//               <div
//                 key={0}
//                 className={currentIndex === 0 ?"carousel-item text-center relative w-full h-full snap-start float-left":"hidden"}
//               >
//                 {/* {index === currentIndex ? console.log('Iam here') : console.log('nothing to see')}
//                 {console.log(index)}
//                 {console.log(currentIndex)} */}
//                 <a
//                   href={'#'}
//                   className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
//                   style={{ backgroundImage: require('../assets/truck.jpeg') }}
//                 >
//                   <Image
//                     src={require('../assets/bike.jpeg')}
//                     alt={'Sema'}
//                     className="w-full aspect-square h-full object-cover"
//                   />
//                 </a>
                // <a
                //   href={'#'}
                //   className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                // >
                //   <h3 className="text-white py-6 px-3 mx-auto text-xl">
                //     {'Sema'}
                //   </h3>
                // </a>
//               </div>
//               <div
//                 key={2}
//                 className={currentIndex  === 1 ? "carousel-item text-center relative w-full h-full snap-start float-left":"hidden"}
//               >
//                 {/* {index === currentIndex ? console.log('Iam here') : console.log('nothing to see')}
//                 {console.log(index)}
//                 {console.log(currentIndex)} */}
//                 <a
//                   href={'#'}
//                   className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
//                   style={{ backgroundImage: require('../assets/truck.jpeg') }}
//                 >
//                   <Image
//                     src={require('../assets/assembly.jpg')}
//                     alt={'Sema'}
//                     className="w-full aspect-square h-full object-cover"
//                   />
//                 </a>
//                 <a
//                   href={'#'}
//                   className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
//                 >
//                   <h3 className="text-white py-6 px-3 mx-auto text-xl">
//                     {'Sema'}
//                   </h3>
//                 </a>
//               </div>
//               <div
//                 key={3}
//                 className={currentIndex === 2 ? "carousel-item text-center relative w-full h-full snap-start float-left":"hidden"}
//               >
//                 {/* {index === currentIndex ? console.log('Iam here') : console.log('nothing to see')}
//                 {console.log(index)}
//                 {console.log(currentIndex)} */}
//                 <a
//                   href={'#'}
//                   className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
//                   style={{ backgroundImage: require('../assets/truck.jpeg') }}
//                 >
//                   <Image
//                     src={require('../assets/truck.jpeg')}
//                     alt={'Sema'}
//                     className="w-full aspect-square h-full object-cover"
//                   />
//                 </a>
//                 <a
//                   href={'#'}
//                   className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
//                 >
//                   <h3 className="text-white py-6 px-3 mx-auto text-xl">
//                     {'Sema'}
//                   </h3>
//                 </a>
//               </div>
//             {/* );
//           })} */}
//         </div>
//       </div>
//     </div>
//   );
// };

const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [paused, setPaused] = useState(false);

    // useEffect(() => {
    //     setInterval(() => {
    //         if (paused === false) {
    //             let newSlide = 
    //                 currentSlide === data.resources.length - 1
    //                 ? 0
    //                 : currentSlide + 1;
    
    //             setCurrentSlide(newSlide);
    //         }
    //     }, 3000);
    // }, [currentSlide, paused]);

    const movePrev = () => {
        let newSlide = 
            currentSlide === 0 
            ? data.resources.length - 1 
            : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    const moveNext = () => {
        let newSlide = 
            currentSlide === data.resources.length - 1 
            ? 0 
            : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentSlide <= 0;
        }
        return false;
    };

    return (
        <div className="">
            <div className="w-full flex overflow-hidden relative h-screen">
                <div className="flex justify-between absolute top left w-full h-full">
                    <button
                    onClick={movePrev}
                    className="hover:bg-green-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
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
                    onClick={moveNext}
                    className="hover:bg-green-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
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
                </div>
                {data.resources.map((resource, index) => {
                    return (
                        // <> 
                            <Image 
                            src={resource.imageUrl}
                            key={index}
                            className = {
                                index === currentSlide
                                    ? "block w-full h-auto object-cover"
                                    : "hidden"
                            }
                            layout="fill"
                            alt="This is a carousel slide"
                            onMouseEnter={() => {
                                console.log('Mouse enter')
                                setPaused(true);

                            }}
                            onMouseLeave={() => {
                                setPaused(false);
                            }}
                            />
                             /* <a href={'#'}
                            className="h-full w-full aspect-square block absolute bottom-0 left-0 transition-opacity duration-300 opacity-50 bg-green-800/75 z-1"
                            >
                                <h3 className="text-white py-10 px-10 mx-auto text-xl">
                                    {'Sema'}
                                </h3>
                            </a> */
                        // </> 
                    )
                })}
                <div className="absolute w-full flex justify-center bottom-0">
                    {data.resources.map((element, index) => {
                        return (
                            <div
                                className={
                                index === currentSlide
                                    ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                                    : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                                }
                                key={index}
                                onClick={() => {
                                setCurrentSlide(index);
                                }}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carousel;