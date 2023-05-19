

import styles from './Welcome.module.css';

import Image from 'next/image';

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
        src: require("../../assets/class2.jpg"),
        alt: "Somewhere",
        caption: "Somewhere"
      },
      {
        src: require("../../assets/class.jpg"),
        alt: "Here it is",
        caption: "Here it is"
      }
      // },
      // {
      //   src: require("../../assets/antoine-barres.jpg"),
      //   alt: "Somewhere else",
      //   caption: "Somewhere else"
      // },
      // {
      //   src: require("../../assets/bruno-abatti.jpg"),
      //   alt: "Here it is",
      //   caption: "Here it is"
      // }
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
        <div className='carousel-full'>
          <Carousel
            swipeable={true}
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
            arrows={true}
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
                  <Image
                    src={item.src || ''}
                    alt={item.alt}
                    className="w-full aspect-square hidden h-full"
                  />
              </div>
            );
          })}
          </Carousel>
          <article className={styles.HeroText}>
            <div>
              <h1>
                <small>this is</small>
                <strong>Chepkolon</strong>
              </h1>
            </div>
          </article>
          <h2 className={styles.HeroSmallText}>Chepkolon Green Highlands Academy is a mixed gender day and boarding Primary School in Kericho.</h2>
          <button className='scrollDownButton'>
            <i></i>
          </button>
        </div>
      )
}

export default WelcomeCarousel;

