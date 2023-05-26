/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import Card from '../Card'
import styles from './Schools.module.css'
import NewsComponent from '../News';
import { flushSync } from 'react-dom';

const newsItems = {
        isEvent: true,
        title: {
            h2: 'Upcoming',
            h3: 'Events'
        },
        items: [
            {
                link: "storylink/",
                src: require("../../assets/assembly.jpg"),
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
                storyTitle: "Mjini Academic Day",
                time: "10:00 - 15:00",
                day: '23',
                month: 'June'
            },
            {
                link: "storylink/",
                src: require("../../assets/class.jpg"),
                alt: "alternative text",
                storyType: "News",
                storyTitle: "Junior School Parents Day",
                time: "10:00 - 14:00",
                day: '06',
                month: 'July'
            }
        ]
    }

const Schools = () => {
    return (
        <>
            <section className={classNames(styles.Links)}>
                    <div className={styles.Link}>
                        <div className={classNames(styles.ImageBox, styles.Green)}>
                            <Image src={require('../../assets/assembly2.jpg')} className="w-full" alt="school"/>
                        </div>
                        <div className={styles.LinkInfo}>
                            <div>CHEPKOLON</div>
                            <div>GREEN HIGHLANDS</div>
                            <div>ACADEMY</div>
                        </div>
                        <Link href='cgha/welcome'>
                            <a target='_blank'></a>
                        </Link>
                    </div>
                    <div className={styles.Link}>
                        <div className={classNames(styles.ImageBox, styles.Blue)}>
                            <Image src={require('../../assets/class.jpg')} className="w-full" alt="school"/>
                        </div>
                        <div className={styles.LinkInfo}>
                            <div>CHEPKOLON</div>
                            <div>JUNIOUR</div>
                            <div>HIGH SCHOOL</div>
                        </div>
                        <Link href='/comingsoon'>
                            <a target='_blank'></a>
                        </Link>
                    </div>
                    <div className={styles.Link}>
                        <div className={classNames(styles.ImageBox, styles.Red)}>
                            <Image src={require('../../assets/mjini1.jpg')} className="w-full" alt="school"/>
                        </div>
                        <div className={styles.LinkInfo}>
                            <div>CHEPKOLON</div>
                            <div>PREMIER SCHOOL</div>
                            <div>- MJINI</div>
                        </div>
                        <Link href='/premier/welcome'>
                            <a target='_blank'></a>
                        </Link>
                    </div>
            </section>
            <NewsComponent newsItems={newsItems}/>
        </>
    )
}

export default Schools