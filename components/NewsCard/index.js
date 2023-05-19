import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import styles from './NewsCard.module.css'

import { Card, Row, Col } from 'reactstrap'
import Link from 'next/link'

const NewsCard = (props) => {
    const item = props.NewsItem
    const isEvent = props.isEvent
    return (
        <article className={classNames(styles.Story, styles.HpStories, isEvent ? styles.isEvents : styles.isStories)}>
            <div className={styles.StoryInner}>
                <a href="about-us/" className={styles.StoryLink}></a>
                <div className={styles.StoryImageWrapper}>
                    <Image src={item.src} alt="item.alt"/>
                </div>
                <div className={styles.ImageOverlay}></div>
                { isEvent ? 
                    (
                    <a href="calendar/" className={classNames(styles.StoryType, 'story__type')}>
                        <Image src={require('../../assets/icons/calendar.png')} alt="calendar"/>
                        <span>event</span>
                    </a>
                    ) 
                    : 
                    (
                        <a href="calendar/" className={classNames(styles.StoryType, 'story__type')}>
                        <Image src={require('../../assets/icons/icons8-rss-96.png')} alt="calendar"/>
                        {/* <i className={styles.IconRss}></i> */}
                        <span>news</span>
                        </a>
                    )
                }
                <div className={styles.StoryBottomInfo}>
                    <p className={styles.StoryTitle}>
                        <span className={styles.StoryFirstChar}>G</span>
                        <span>{item.storyTitle}</span>
                    </p>
                    { isEvent && (
                    <p className={styles.StoryTitleEvent}>
                        <span className={styles.StoryFirstChar}>
                            <i>{item.day}</i>
                            <i>{item.month}</i>
                        </span>
                        <span>
                            {item.storyTitle}
                        </span>
                        <span>{item.time}</span>
                    </p>
                    )}
                    <div className={styles.StoryBottomRow}>
                        <time>{item.time}</time>
                        <a href="comingsoon/" className={classNames(styles.StoryHoverLink, styles.StoryViewLink)}>read</a>
                        <a href="comingsoon/" className={classNames(styles.StoryHoverLink, styles.StoryViewCategory)}>view more</a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default NewsCard