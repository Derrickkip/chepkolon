import React from 'react'

import { Button } from "../Button";
import PromoCard from "../PromoCard";

import styles from './Footer.module.css'
import classNames from 'classnames';
import Image from 'next/image';

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
        <div className={classNames(styles.Footer)}>
            <h2>Contact</h2>
            <div className={styles.FMap}>
                <div className={styles.FMapInner}></div>
            </div>
            <div className={styles.FMapMobile}>

            </div>
            <div className={styles.Addresses}>
                <div className={styles.AddressItem}>
                    <Image className={styles.FIcon} src={require("../../assets/icons/boarding.png")} alt="placeholder"/>
                    <h4>Address</h4>
                    <h3>Chepkolon Green Highlands Academy,
                        <span></span>
                        Kericho,
                        <span></span>
                        Chepkolon
                    </h3>
                    <h4>Telephone</h4>
                    <a className={styles.Tel} href="tel: 0718003567" title="0718003567">0718003567</a>
                    <a className={styles.Email} href="tel: 0718003567" title="0718003567">Contact</a>
                </div>
                <div className={styles.AddressItem}>
                    <Image className={styles.FIcon} src={require("../../assets/icons/boarding.png")} alt="placeholder"/>
                    <h4>Address</h4>
                    <h3>Chepkolon Junior School,
                        <span></span>
                        Kericho,
                        <span></span>
                        Chepkolon
                    </h3>
                    <h4>Telephone</h4>
                    <a className={styles.Tel} href="tel: 0718003567" title="0718003567">0718003567</a>
                    <a className={styles.Email} href="tel: 0718003567" title="0718003567">Contact</a>
                </div>
                <div className={styles.AddressItem}>
                    <Image className={styles.FIcon} src={require("../../assets/icons/boarding.png")} alt="placeholder"/>
                    <h4>Address</h4>
                    <h3>Chepkolon Premier School,
                        <span></span>
                        Kericho
                        <span></span>
                        Town
                    </h3>
                    <h4>Telephone</h4>
                    <a className={styles.Tel} href="tel: 0718003567" title="0718003567">0724555699</a>
                    <a className={styles.Email} href="tel: 0718003567" title="0718003567">Contact</a>
                </div>
            </div>
            <div className={styles.BottomCredits}>
                <div className={styles.ButtonTop}></div>
                <div className={styles.Right}>
                    <h5 className="">{new Date().getFullYear()} &copy; chepkolon schools - All rights reserved</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;