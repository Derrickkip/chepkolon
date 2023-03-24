import React from 'react'

import { Button } from "../Button";
import PromoCard from "../PromoCard";

import styles from './Footer.module.css'
import classNames from 'classnames';

const items = [
    {
      src: require("../../assets/icons/education.png"),
      alt: "christian faith",
      title: "Christian Faith",
      description: "As a private Adventist school, Chepkolon's understanding of education is underpinned by Christian teaching.  "
    },
    {
      src: require("../../assets/icons/exam.png"),
      alt: "Outdoor education",
      title: "Outdoor education",
      description: "Through bushwalking, camping, high and low ropes courses, rock climbing, canoeing, mountain biking and navigating, Chepkolon students are taught responsibility and the value of working within a challenge by choice environment. "
    },
    {
      src: require("../../assets/icons/graduated.png"),
      alt: "christian faith",
      title: "Technology",
      description: "At Chepkolon, we recognise the importance of up-to-date and innovative technology, both in terms of its use as a learning tool and as a means of efficient communication with families."
    },
    {
      src: require("../../assets/icons/teacher.png"),
      alt: "christian faith",
      title: "Environment education",
      description: "As a private Adventist school, Chepkolon's understanding of education is underpinned by Christian teaching.  "
    },
    {
      src: require("../../assets/assembly.jpg"),
      alt: "christian faith",
      title: "Christian Faith",
      description: "As a private Adventist school, Chepkolon's understanding of education is underpinned by Christian teaching.  "
    },
  ]

const Footer = () => {
    return (
        <div className={classNames(styles.Footer, 'clearfix')}>
            <div className={classNames(styles.Wrapper, 'clearfix')}>
                <div className={styles.LeftArea}>
                    <div className={styles.MapWrapper}>
                        <div className={styles.Map}>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.RightArea}>
                    <div className="footer-carousel-promos-wrapper">
                        <div className="ftr-carousel-title">Find out more</div>
                        <div className="footer-carousel-promos-inner">
                            <div className="prev-nav-triangle" style={{display: 'block'}}>
                            </div>
                            <div className="next-nav-triangle" style={{display: 'block'}}>
                            </div>
                            <div className="footer-promo-c-carousel slick-initialized slick-slide">
                                <div aria-live="polite" className="slick-list draggable">
                                    <div className="slick-track" style={{opacity: '1', width: '35000px', transform: 'transform3d(-750px, 0px, 0px)'}}>
                                        {items.map((item, i) => {
                                            return (
                                                <PromoCard key={i}src={item.src} text={item.description} alt={item.alt}/>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ftr-address-area clearfix">
                            <div className="ftr-address-left">
                                <p>Chepkolon Green Highlands Academy</p>
                                <p>Kericho</p>
                                <p>Chepkolon</p>
                                <a href="tel:0727138659">0727138659</a>
                            </div>
                            <div className="ftr-address-left ftr-premier-school">
                                <p>Chepkolon Premier School</p>
                                <p>Kericho</p>
                                <p>Nyagacho</p>
                                <a href="tel: 0727138659">0727138659</a>
                            </div>
                            <div className="ftr-address-right">
                                <Button text='Enquire' />
                                <Button text='Visit Us' />
                                <Button text='Apply' />
                            </div>
                            <div className="ftr-address-left showOnlyMobile">
                                <p>CGHA</p>
                                <p>Kericho</p>
                                <p>Chepkolon</p>
                                <a href="tel:0727138659">0727138659</a>
                            </div>
                            <div className="ftr-address-left showOnlyMobile">
                                <p>Premier School</p>
                                <p>Kericho</p>
                                <p>Nyagacho</p>
                                <a href="tel: 0727138659">0727138659</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ftr-credits clearfix">
                    <div className="ftr-credits-right">
                        <h5 className="">{new Date().getFullYear()} &copy; chepkolon schools - All rights reserved</h5>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Footer;