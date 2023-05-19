import React from "react";

import Image from 'next/image';
import Link from 'next/link';

import classNames from 'classnames';

import styles from './Welcome.module.css'

import ImageSlider from "../../components/imageSlider";

import SectionCarousel from "../../components/carousel";

import WelcomeCarousel from "../../components/Welcome/carousel";

import NewsComponent from "../../components/News";

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
        src: require("../../assets/assembly.jpg"),
        alt: "Somewhere",
        caption: "Somewhere"
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
                <div className={classNames(styles.PictureWrapper, openTab==1 ? 'block' : 'hidden')}>
                    <div className={styles.Image}>
                        <a href="cgha/welcome" className={styles.Link}></a>
                        <div className={styles.ImgHolder}>
                            <Image src={require('../../assets/assembly2.jpg')} alt="director" />
                        </div>
                        <p className={styles.Description}>
                            <span className={styles.FirstCharacter}>
                                W
                            </span>
                            <span>e have an excellent record of academic success, with an average of 40 per cent of our Year 8s gaining a range of scholarships to a variety of high-quality senior schools.</span>
                        </p>
                    </div>
                </div>
                <div className={classNames(styles.PictureWrapper, openTab==2 ? 'block' : 'hidden')}>
                    <div className={styles.Image}>
                        <a href="cgha/welcome" className={styles.Link}></a>
                        <div className={styles.ImgHolder}>
                            <Image src={require('../../assets/assembly.jpg')} alt="director" />
                        </div>
                        <p className={styles.Description}>
                            <span className={styles.FirstCharacter}>
                                W
                            </span>
                            <span>e believe this makes us unique in significant ways that will benefit your child. In short we offer a very different kind of single-sex education.</span>
                        </p>
                    </div>
                </div>
                <div className={classNames(styles.PictureWrapper, openTab==3 ? 'block' : 'hidden')}>
                    <div className={styles.Image}>
                        <a href="cgha/welcome" className={styles.Link}></a>
                        <div className={styles.ImgHolder}>
                            <Image src={require('../../assets/assembly2.jpg')} alt="director" />
                        </div>
                        <p className={styles.Description}>
                            <span className={styles.FirstCharacter}>
                                C
                            </span>
                            <span>hepkolon offers a distinctive education in so many ways, but none more so than in our commitment to providing an all-boys, full-boarding experience.</span>
                        </p>
                    </div>
                </div>
                <div className={classNames(styles.PictureWrapper, openTab==4 ? 'block' : 'hidden')}>
                    <div className={styles.Image}>
                        <a href="cgha/welcome" className={styles.Link}></a>
                        <div className={styles.ImgHolder}>
                            <Image src={require('../../assets/antoine-barres.jpg')} alt="director" />
                        </div>
                        <p className={styles.Description}>
                            <span className={styles.FirstCharacter}>
                                C
                            </span>
                            <span>hepkolon lies in the beautiful Kericho countryside, but is very easily accessible from Nairobi and other major cities.</span>
                        </p>
                    </div>
                </div>
                <ul className={styles.ItemsDesktop}>
                    <li className={classNames(styles.WhyChepkolonItem, openTab==1 ? styles.IsSelected : '')}>
                    <a
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        <span className={classNames(styles.ItemNo)}>1</span>
                        <h2>
                            <strong>Pursuit of Academic Excellence</strong>
                            <span>Education for Tomorrows world</span>
                        </h2>
                    </a>
                    </li>
                    <li className={classNames(styles.WhyChepkolonItem, openTab==2 ? styles.IsSelected : '')}>
                        <a
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            <span className={styles.ItemNo}>2</span>
                            <h2>
                                <strong>Strong Christian Education</strong>
                                <span>Education founded on religious values</span>
                            </h2>
                        </a>
                    </li>
                    <li className={classNames(styles.WhyChepkolonItem, openTab==3 ? styles.IsSelected : '')}>
                        <a
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            <span className={styles.ItemNo}>3</span>
                            <h2>
                                <strong>Excellent Boarding Facilities</strong>
                                <span>Community of care and opportunity</span>
                            </h2>
                        </a>
                    </li>
                    <li className={classNames(styles.WhyChepkolonItem, openTab==4 ? styles.IsSelected : '')}>
                        <a
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(4);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            <span className={styles.ItemNo}>4</span>
                            <h2>
                                <strong>Unique Location</strong>
                                <span>The green environs of Kericho Town</span>
                            </h2>
                        </a>
                    </li>
                </ul>
                <div className={styles.MobileWrapper}>
                    <div>
                        <ImageSlider images={items} />
                    </div>
                </div>
            </div>
        </section>
        <NewsComponent newsItems={eventItems}/>
        </>
    )
}
