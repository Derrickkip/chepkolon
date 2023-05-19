import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classNames from 'classnames';

import styles from './News.module.css'

import NewsCard from '../NewsCard'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
    // partialVisibilityGutter: 30 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
    // partialVisibilityGutter: 30 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    // partialVisibilityGutter: 50 // optional, default to 1.
  }
};


const NewsComponent = (newsItems) => {
    
    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)

    const title = newsItems.newsItems.title

    const Items = newsItems.newsItems.items

    const isEvent = newsItems.newsItems.isEvent

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    React.useEffect(() => {

      handleWindowResize();

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  return (
    <section className={classNames(styles.Stories, styles.HpStories, styles.JustEvents)}>
        <header className={classNames(styles.GhpHeader, styles.MaskLine)}>
          <h2>{title.h2}</h2>
          <h3>{title.h3}</h3>
        </header>
        <div>
            <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            arrows={true}
            transitionDuration={5000}
            containerClass="carousel-container"
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            // partialVisible={true}
            centerMode={width < 580 ? false : true}
          >
             {
              Items.map((item, index) => {
                return (
                <NewsCard NewsItem={item} key={index} isEvent={isEvent}/>
              )}
              )}
          </Carousel>
        </div>
    </section>
  )
}

export default NewsComponent