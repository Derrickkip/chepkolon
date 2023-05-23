import React from "react";

import Image from 'next/image';
import Link from 'next/link';

import classNames from 'classnames';

import styles from './Welcome.module.css'

import ImageSlider from "../../components/imageSlider";

import Carousel from 'react-multi-carousel';

import WelcomeCarousel from "../../components/Welcome/carousel";

import NewsComponent from "../../components/News";

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

const eventItems = {
    isEvent: true,
    title: {
        h2: 'Upcoming',
        h3: 'Events'
    },
    items: [
        {
            link: "storylink/",
            src: require("../../assets/gate.jpg"),
            alt: "alternative text",
            storyType: "News",
            storyTitle: "Green Highlands Visiting Day",
            time: "09:00 - 16:00",
            day: '05',
            month: 'June'
        },
        {
            link: "storylink/",
            src: require("../../assets/assembly2.jpg"),
            alt: "alternative text",
            storyType: "News",
            storyTitle: "Green Highlands Academic Day",
            time: "10:00 - 15:00",
            day: '23',
            month: 'June'
        },
        {
            link: "storylink/",
            src: require("../../assets/class.jpg"),
            alt: "alternative text",
            storyType: "News",
            storyTitle: "Green Highlands Parents Day",
            time: "10:00 - 14:00",
            day: '06',
            month: 'July'
        }
    ]
}

const newsItems = {
    title: {
        h2: 'Chepkolon',
        h3: 'News'
    },
    items: [
        {
            link: "storylink/",
            src: require("../../assets/gate.jpg"),
            alt: "alternative text",
            storyType: "News",
            storyTitle: "Green Highlands Visiting Day",
            time: "05 | 06 | 2023",
            day: '05',
            month: 'June'
        },
        {
            link: "storylink/",
            src: require("../../assets/assembly2.jpg"),
            alt: "alternative text",
            storyType: "News",
            storyTitle: "Green Highlands Academic Day",
            time: "23 | 06 | 2023",
            day: '23',
            month: 'June'
        },
        {
            link: "storylink/",
            src: require("../../assets/class.jpg"),
            alt: "alternative text",
            storyType: "News",
            storyTitle: "Green Highlands Parents Day",
            time: "06 | 06 | 2023",
            day: '06',
            month: 'July'
        }
    ]
}

export default function GreenHighlands() {
    const [openTab, setOpenTab] = React.useState(1);

    const items = [
    {
        link: "storylink/",
        src: require("../../assets/assembly.jpg"),
        alt: "Somewhere",
        caption: "We believe that academic stretch should be available to every pupil, whatever his interests and enthusiasms.",
        itemNo: 1,
        strong: 'Pursuit of Academic Excellence',
        span: 'Education for Tomorrows world'
    },
    {
        link: "storylink/",
        src: require("../../assets/assembly2.jpg"),
        alt: "Somewhere else",
        caption: "We believe in the all round well being of our students and therefore incorporate religion in our daily activities.",
        itemNo: 2,
        strong: 'Strong Christian Education',
        span: 'Education founded on religious values'
    },
    {
        link: "storylink/",
        src: require("../../assets/class.jpg"),
        alt: "Here it is",
        caption: "Chepkolon offers a distinctive education in so many ways, but none more so than in our commitment to providing an amazing boarding experience.",
        itemNo: 3,
        strong: 'Excellent Boarding Facilities',
        span: 'Community of care and opportunity'
    },
    {
        link: "storylink/",
        src: require("../../assets/class2.jpg"),
        alt: "Here it is",
        caption: "Chepkolon lies in the beautiful Kericho countryside, but is very easily accessible from Nairobi and other major cities.",
        itemNo: 4,
        strong: 'Unique Location',
        span: 'The green environs of Kericho Town'
    }
    ];
    return (
        <>
        <section className={styles.Carousel}>
            <div className="">
                <WelcomeCarousel />
            </div>
        </section>
        <section className={styles.Welcome}>
            <div className={styles.WelcomeInner}>
                <article className={styles.WelcomePrimary}>
                    <header className={styles.GptHeader}>
                        <h2>Welcome to</h2>
                        <h3>Chepkolon Green Highlands</h3>
                    </header>
                    <p>Welcome to Chepkolon Green Highlands - where our pupils are encouraged to seize every opportunity before them.</p>
                    <blockquote>
                        <p>We focus on providing a magical childhood experience. 
                        Our Christian Values are a perfect guide that enable our children to become kind,
                         thoughtful, courageous and intuitive young people well prepared to... </p>
                    </blockquote>
                </article>
                <div className={styles.WelcomeSecondary}>
                    <div className={styles.WelcomeVideo}>
                        {/* <p style={'display':'none'}></p> */}
                        <div className={classNames(styles.VideoControlHolder, styles.WelcomeRatioPicture, styles.WelcomeVideoInner)}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <NewsComponent newsItems={newsItems}/>
        <section className={styles.WhyChepkolon}>
            <div className={styles.WhyChepkolonContainer}>
                <header className={styles.GptHeader}>
                    <h2>Why</h2>
                    <h3>Chepkolon Green Highlands ?</h3>
                </header>
                { items.map((item, index) => {
                    return (
                        <div className={classNames(styles.PictureWrapper, openTab==`${item.itemNo}` ? 'block' : 'hidden')} key={index}>
                            <div className={styles.Image}>
                                <a href={item.link} className={styles.Link}></a>
                                <div className={styles.ImgHolder}>
                                    <Image src={item.src} alt="director" />
                                </div>
                                <p className={styles.Description}>
                                    <span className={styles.FirstCharacter}>
                                       {item.caption[0]}
                                    </span>
                                    <span>{item.caption.substring(1)}</span>
                                </p>
                            </div>
                        </div>
                    )
                })}
                <ul className={styles.ItemsDesktop}>
                    {items.map((item, index) => {
                        return (
                            <li className={classNames(styles.WhyChepkolonItem, openTab==`${item.itemNo}` ? styles.IsSelected : '')} key={index}>
                                <a
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(`${item.itemNo}`);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    <span className={classNames(styles.ItemNo)}>{`${item.itemNo}`}</span>
                                    <h2>
                                        <strong>{item.strong}</strong>
                                        <span>{item.span}</span>
                                    </h2>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className={styles.MobileWrapper}>
                    <div>
                        {/* <ImageSlider images={items} /> */}
                        <Carousel
                            swipeable={true}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={5000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            // customButtonGroup={<ButtonGroup />}
                            arrows={true}
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={[]}
                            // deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {items.map((item, index) => {
                            return (
                            <figure className={styles.WsMobile} key={index}>
                                <Link href={item.link}>
                                    <a className={styles.WsMobileLink}></a>
                                </Link>
                                <div className={styles.WsMobileImgWrapper}>
                                    <div className={styles.WsMobileImgHolder}>
                                        <Image
                                        src={item.src || ''}
                                        alt={item.alt}
                                        />
                                    </div>
                                    <div className={styles.WsMobileShortDesc}>
                                        <span className={styles.ItemNo}>
                                            {item.itemNo}
                                        </span>
                                        <h2>
                                            <strong>{item.strong}</strong><span>{item.span}</span>
                                        </h2>
                                    </div>
                                </div>
                                <figcaption>
                                    {item.caption}
                                </figcaption>
                            </figure>
                            );
                        })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
        <NewsComponent newsItems={eventItems}/>
        </>
    )
}
