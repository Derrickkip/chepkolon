import Image from 'next/image';
import Link from 'next/link';
import {useState, createRef, useEffect} from 'react'

import styles from './AboutUs.module.css'

import classNames from 'classnames';

export default function About() {
    const [count, setCount] = useState(1);
    const myRef = createRef();
    
    const incCount = () => setCount(c => c + 1);

    const incRef = () => myRef.current++;

    useEffect(() => {
        console.log(myRef)
    })

    return (
        // <>
        // <div className='hero-image-area opacityOn'>
        //     <div className='hero-images-area'>
        //         <div className='hero-images-area-inner'>
        //             <div>
        //                 <Image src={require('../../../assets/david-towett-director2.png')} alt="director" style={{position: "absolute", top: '-34px', left: '0px', width: '1254px', height: '836px', opacity: '1'}}/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div className='sl-content-area clearfix'>
        //     <div className='sl-content-main-bg'>
        //         <div className='sl-bg-bottom'>
        //             <div style={{}}></div>
        //         </div>
        //     </div>
        //     <div className='page-title'>
        //         <div className='secondLvlCss'>
        //             <h1>Our Story</h1>
        //         </div>
        //     </div>
        //     <div className='sl-content-main clearfix'>
        //         <div className='sl-content-right'>
        //             <div className="breadcrumbs">
        //                 <Link  href="/">home</Link>
        //                 <span className='bdivider'></span>
        //                 <Link href="/about-us/welcome">About us</Link>
        //                 <span className='bdivider'></span>
        //                 <span className='bcurrentpage'>Our Story
        //                 </span>
        //             </div>
        //             <div className='secondLvlCss'>
        //                 <p className='featuredParagraph'>
        //                 Welcome to The Chepkolon Schools. I hope that the information on our website will give you a flavour of life at our wonderful schools and an insight into what makes Chepkolon such a special place to be.
        //                 </p>
        //                 <p>
        //                 Our school is a warm and welcoming environment built on the strength of relationships between our children and staff. We provide a modern, forward-thinking approach to independent education based on traditional values. Here, our children are motivated to learn and encouraged to participate in a wide range of enrichment activities so that they develop academically and emerge as fully-rounded,
        //                 <br/>
        //                 thoughtful and caring individuals.
        //                 </p>
        //                 <p>
        //                 My aim is to provide every child with the experiences, knowledge and academic skills they need to become confident and ambitious adults. We want our young people to have every opportunity available to them so I am committed to encouraging them all to aim high and live their education.
        //                 </p>
        //                 <p>
        //                     <Image src={require('../../../assets/david-towett-director.png')} alt="director" />
        //                 </p>
        //                 <p>
        //                 We hope our website gives you and your child, or children, a real insight into the stimulating, exciting environment and the exceptional relationships that are a fundamental part of our community. Of course, to truly understand that Chepkolon experience, you need to visit us, so please do get in touch with our 
        //                 </p>
        //                 <p>
        //                     <strong>
        //                         Mr David Towett
        //                         <br/>
        //                         Director
        //                     </strong>
        //                 </p>
        //             </div>
        //         </div>
        //         <div className='sl-content-left'>
        //             <div className='in-this-section'>
        //                 In About us
        //             </div>
        //             <ul className='mk-tree-menu'>
        //                 <li className='clearfix'><Link href="/about-us/welcome">Director&apos;s welcome</Link></li>
        //                 <li className='clearfix'><Link href="/about-us/what-we-stand-for">What we stand for</Link></li>
        //                 <li className='clearfix'><Link href="/about-us/our-story">Our Story</Link></li>
        //                 <li className='clearfix'><Link href="/">Results</Link></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        // </>
        <>
        <section className={styles.SlHero}>
            <div className={styles.SlHeroInner}>
                <div className={styles.SlHeroCarousel}>
                    <div className={styles.SlHeroItem}>
                        <div className={classNames(styles.BgImg, styles.OurStory)}>
                            {/* <Image src={require('../../../assets/david-towett-director.png')} alt="director" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.ContentArea}>
            <div className={styles.ContentAreaTopInfo}>
                <ul className={styles.Breadcrumbs}>
                    <li className={styles.BreadcrumbsItem}>
                        <a className={styles.BreadcrumbsLink} href='about-us/our-story'>
                            About Chepkolon
                        </a>
                    </li>
                    <li className={styles.BreadcrumbsItem}>
                        <a className={styles.BreadcrumbsLink} href='javascript:void(0)'>
                            Why Chepkolon
                        </a>
                    </li>
                </ul>
                <div className={styles.PageTitle}>
                    <h1>Why Chepkolon?</h1>
                </div>
            </div>
            <aside className={styles.Sidebar}>
                <div className={styles.SidebarInner}>
                    <header className={styles.SidebarHead}>
                        <h2>About Chepkolon</h2>
                    </header>
                    <ul className={styles.SubMenu}>
                        <li>
                            <Link href ="/cgha/about-us/why-chepkolon/">
                                <a >Why Chepkolon</a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/headmaster-welcome/">
                                <a >Headmaster&apos;s welcome</a>
                            </Link>
                        </li>
                        <li>
                            <a href ="vision/">Vision</a>
                        </li>
                        <li>
                            <a href ="history/">History</a>
                        </li>
                        <li>
                            <a href ="staff/">Staff</a>
                        </li>
                        <li>
                            <a href ="job-vacancies/">Job Vacancies</a>
                        </li>
                    </ul>
                    <div className={styles.SidebarPromos}>
                        <header className={styles.SidebarHead}>
                            <h2>Related Links</h2>
                        </header>
                        <div className={styles.SidebarPromosContent}>
                            <figure className={classNames(styles.Promo, 'promo')}>
                                <a href="admissions/welcome" className={styles.PromoLink} title="Admissions" aria-label="link to admissions" touch-info="0">&nbsp;</a>
                                <div className={styles.PromoImgWrapper}>
                                    <Image src={require("../../../assets/assembly.jpg")} alt="admissions"></Image>
                                </div>
                                <figcaption>
                                    <h2>Admissions</h2>
                                </figcaption>
                            </figure>
                            <figure className={classNames(styles.Promo, 'promo')}>
                                <a href="admissions/welcome" className={styles.PromoLink} title="Admissions" aria-label="link to admissions" touch-info="0">&nbsp;</a>
                                <div className={styles.PromoImgWrapper}>
                                    <Image src={require("../../../assets/assembly2.jpg")} alt="admissions"></Image>
                                </div>
                                <figcaption>
                                    <h2>Boarding</h2>
                                </figcaption>
                            </figure>
                            <figure className={classNames(styles.Promo, 'promo')}>
                                <a href="admissions/welcome" className={styles.PromoLink} title="Admissions" aria-label="link to admissions" touch-info="0">&nbsp;</a>
                                <div className={styles.PromoImgWrapper}>
                                    <Image src={require("../../../assets/class.jpg")} alt="admissions"></Image>
                                </div>
                                <figcaption>
                                    <h2>Pastoral</h2>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </aside>
            <div className={styles.MainContent}>
                <div className={styles.SecondLvlCss}>
                    <p className={styles.FeaturedParagraph}>
                        Mr David Towett
                        <span className={styles.HasImage}>
                            <Image src={require('../../../assets/david-towett-director2.png')} alt='director' />
                        </span>
                    </p>
                    <p>
                         Our school is a warm and welcoming environment built on the strength of relationships between our children and staff. We provide a modern, forward-thinking approach to independent education based on traditional values. Here, our children are motivated to learn and encouraged to participate in a wide range of enrichment activities so that they develop academically and emerge as fully-rounded,
                         <br/>
                         thoughtful and caring individuals.
                         </p>
                        <p>
                         My aim is to provide every child with the experiences, knowledge and academic skills they need to become confident and ambitious adults. We want our young people to have every opportunity available to them so I am committed to encouraging them all to aim high and live their education.
                         </p>
                         {/* <p>
                             <Image src={require('../../../assets/david-towett-director.png')} alt="director" />
                         </p> */}
                         <p>
                         We hope our website gives you and your child, or children, a real insight into the stimulating, exciting environment and the exceptional relationships that are a fundamental part of our community. Of course, to truly understand that Chepkolon experience, you need to visit us, so please do get in touch with our 
                         </p>
                </div>
                <div className={styles.MobileCloneFromSidebar}>
                    <div className={styles.SidebarPromos}>
                        <header className={styles.SidebarHead}>
                            <h2>Related Links</h2>
                        </header>
                        <div className={styles.SidebarPromosContent}>
                            <figure className={classNames(styles.Promo, 'promo')}>
                                <a href="admissions/welcome" className={styles.PromoLink} title="Admissions" aria-label="link to admissions" touch-info="0">&nbsp;</a>
                                <div className={styles.PromoImgWrapper}>
                                    <Image src={require("../../../assets/assembly.jpg")} alt="admissions"></Image>
                                </div>
                                <figcaption>
                                    <h2>Admissions</h2>
                                </figcaption>
                            </figure>
                            <figure className={classNames(styles.Promo, 'promo')}>
                                <a href="admissions/welcome" className={styles.PromoLink} title="Admissions" aria-label="link to admissions" touch-info="0">&nbsp;</a>
                                <div className={styles.PromoImgWrapper}>
                                    <Image src={require("../../../assets/assembly2.jpg")} alt="admissions"></Image>
                                </div>
                                <figcaption>
                                    <h2>Boarding</h2>
                                </figcaption>
                            </figure>
                            <figure className={classNames(styles.Promo, 'promo')}>
                                <a href="admissions/welcome" className={styles.PromoLink} title="Admissions" aria-label="link to admissions" touch-info="0">&nbsp;</a>
                                <div className={styles.PromoImgWrapper}>
                                    <Image src={require("../../../assets/class.jpg")} alt="admissions"></Image>
                                </div>
                                <figcaption>
                                    <h2>Pastoral</h2>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <header className={styles.SidebarHead}>
                        <h2>About Chepkolon</h2>
                    </header>
                    <ul className={styles.SubMenu}>
                        <li>
                            <Link href ="/cgha/about-us/why-chepkolon/">
                                <a >Why Chepkolon</a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/headmaster-welcome/">
                                <a >Headmaster&apos;s welcome</a>
                            </Link>
                        </li>
                        <li>
                            <a href ="vision/">Vision</a>
                        </li>
                        <li>
                            <a href ="history/">History</a>
                        </li>
                        <li>
                            <a href ="staff/">Staff</a>
                        </li>
                        <li>
                            <a href ="job-vacancies/">Job Vacancies</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}
