import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'

import { Transition } from '@headlessui/react'

// Data
import data from '../data/data.json';

const {resources} = data;

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
                    <button id="data-carousel-prev" type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={movePrev}>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="hidden">Previous</span>
                        </span>
                    </button>
                    <button id="data-carousel-next" type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={moveNext}>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="hidden">Next</span>
                        </span>
                    </button>
                </div>
                {resources.map((resource, index) => {
                    return (
                        // <> 
                            <Image 
                            src={require('../assets/assembly.jpg')}
                            key={index}
                            className = {
                                index === currentSlide
                                    ? "block w-full h-auto"
                                    : "hidden"
                            }
                            layout="fill"
                            alt="This is a carousel slide"
                            onMouseEnter={() => {
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
                <div className="absolute w-full flex justify-center bottom-0 mb-20">
                    {resources.map((element, index) => {
                        return (
                            <div
                                className={
                                index === currentSlide
                                    ? "h-2 w-6 bg-[#3A6B35] rounded-full mx-2 mb-2 cursor-pointer"
                                    : "h-2 w-6 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                                }
                                key={index}
                                onClick={() => {
                                setCurrentSlide(index);
                                }}
                            ></div>
                        );
                    })}
                </div>
                <div className="absolute w-full flex justify-center bottom-0 mb-6">
                    <button id="data-carousel-next" type="button" className="">
                            <span className="inline-flex items-center justify-center w-8 h-8 group-hover:w-10 group-hover:h-10 rounded-full sm:w-10 sm:h-10 bg-[#3A6B35] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8l7 7 7-7"></path></svg>
                                <span className="hidden">Next</span>
                            </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;