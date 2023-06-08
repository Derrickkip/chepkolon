import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import classNames from 'classnames'

import Pillar from '../../components/Pillar'

import styles from './Welcome.module.css'
import Footer from './footer'

function Index() {
  return (
    <><div className={styles.HeroImageArea}>
        <div className={styles.HeroImagesArea}>
            <div className={styles.HeroImagesAreaInner}>
                <div>
                    <Image src={require('../.././assets/class.jpg')} alt="director" style={{position: "absolute", top: '-34px', left: '0px', width: '1254px', height: '836px', opacity: '1'}}/>
                </div>
            </div>
        </div>
    </div>
    <div className={classNames(styles.SlContentArea, 'clearfix')}>
        <div className={styles.SlContentMainBg}>
            <div className={styles.SlBgBottom}>
                <div style={{}}></div>
            </div>
        </div>
        <div className={styles.PageTitle}>
            <div className={styles.SecondLvlCss}>
                <h1>Welcome To Chepkolon Junior Secondary School</h1>
            </div>
        </div>
        <div className={classNames(styles.SlContentMain, 'clearfix')}>
            <div className={classNames(styles.Welcome, 'clearfix')}>
                <div className={styles.Container}>
                    <div className={classNames(styles.ColumnInner, "clearfix")}>
                        <h2>Welcome from the Headmaster</h2>
                    </div>
                    <div className={styles.Row}>
                        <div className={classNames(styles.Column, styles.TextSection)}>
                            <div className={styles.SecondLvlCss}>
                                {/* <p className={styles.FeaturedParagraph}>
                                Welcome to The Chepkolon Schools. I hope that the information on our website will give you a flavour of life at our wonderful schools and an insight into what makes Chepkolon such a special place to be.
                                </p> */}
                                <p>
                                Our school is a warm and welcoming environment built on the strength of relationships between our children and staff. We provide a modern, forward-thinking approach to independent education based on traditional values. Here, our children are motivated to learn and encouraged to participate in a wide range of enrichment activities so that they develop academically and emerge as fully-rounded,
                                <br/>
                                thoughtful and caring individuals.
                                </p>
                                <p>
                                My aim is to provide every child with the experiences, knowledge and academic skills they need to become confident and ambitious adults. We want our young people to have every opportunity available to them so I am committed to encouraging them all to aim high and live their education.
                                </p>
                                <p>
                                We hope our website gives you and your child, or children, a real insight into the stimulating, exciting environment and the exceptional relationships that are a fundamental part of our community. Of course, to truly understand that Chepkolon experience, you need to visit us, so please do get in touch with our 
                                </p>
                                <p>
                                    <strong>
                                        Mr David Towett
                                        <br/>
                                        Director
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <div className={classNames(styles.Column, styles.ImageSection)}>
                            <div className={classNames(styles.ColumnInner, "clearfix")}>
                                <div className={styles.BoxWhiteShadow}>
                                    <Image src={require('../../assets/david-towett-director.png')} alt="director" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div className={classNames(styles.VisionSection, 'clearfix')}>
            <div className={styles.MyContainer}>
                <div className={styles.Row}>
                    <div className={styles.WidgetWrap}>
                        <div className={styles.Element}>
                            <Image src={require('../../assets/quotes-01.webp')} alt="quotes" />
                        </div>
                        <div className={styles.Element}>
                            <div className={styles.Divider}>
                                <span></span>
                            </div>
                        </div>
                        <div className={styles.Element}>
                            <div className={styles.WidgetContainer}>
                                <h5>Our Vision</h5>
                            </div>
                        </div>
                        <div className={styles.Element}>
                            <div className={styles.TextWidgetContainer}>
                                <h3>&quot;To educate and produce holistic individuals with good academic background founded on christian values and committed to selfless service to God and humanity.&quot;</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.Pillars}>
            <div className={styles.MyContainer}>
                <div className={styles.Row}>
                    <div className={styles.PillarColumn}>
                        <div className={styles.PillarTitle}>
                            <h2 className={styles.HeadingTitle}>Pillars</h2>
                        </div>
                        <div className={styles.PillarText}>
                            <p>The philosophy of Chepkolon Schools is founded on the strong christian traditions, whose principles are rooted in Seventh-Day Adventist Church values.&nbsp; This offers students the opportunity to study and grow in an environment that encourages Spiritual, intellectual, moral, social and physical development, emphasizing the importance of citizen participation, self-discipline, Fair Play and consideration for others. All this with a vision to educate for life.&nbsp; The profile of our pupils is developed through the following four pillars: Spiritual, Academic, Sports and Service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Pillar src={require('../../assets/class.jpg')}/>
    </div>
    <div className={classNames(styles.VisionSection, 'clearfix')}>
            <div className={styles.MyContainer}>
                <div className={styles.Row}>
                    <div className={styles.WidgetWrap}>
                        <div className={styles.Element}>
                            <Image src={require('../../assets/quotes-01.webp')} alt="quotes" />
                        </div>
                        <div className={styles.Element}>
                            <div className={styles.Divider}>
                                <span></span>
                            </div>
                        </div>
                        <div className={styles.Element}>
                            <div className={styles.WidgetContainer}>
                                <h5>Our Mission</h5>
                            </div>
                        </div>
                        <div className={styles.Element}>
                            <div className={styles.TextWidgetContainer}>
                                <h3>&quot;To educate and produce holistic individuals with good academic background founded on christian values and committed to selfless service to God and humanity.&quot;</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
    </>
  )
}

export default Index