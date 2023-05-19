import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from './AboutUs.module.css'

import classNames from 'classnames';

export default function About() {
    const {pathname} = useRouter();
    return (
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
                            Vision
                        </a>
                    </li>
                </ul>
                <div className={styles.PageTitle}>
                    <h1>Vision</h1>
                </div>
            </div>
            <aside className={styles.Sidebar}>
                <div className={styles.SidebarInner}>
                    <header className={styles.SidebarHead}>
                        <h2>About Chepkolon</h2>
                    </header>
                    <ul className={styles.SubMenu}>
                        <li>
                            <Link href ="/cgha/about-us/why-chepkolon">
                                <a className={pathname == "/cgha/about-us/why-chepkolon" ? styles.IsActive : ''}>Why Chepkolon </a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/headmaster-welcome">
                                <a className={pathname == "/cgha/about-us/headmaster-welcome" ? styles.IsActive : ''}>Headmaster&apos;s welcome</a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/vision">
                                <a className={pathname == "/cgha/about-us/vision" ? styles.IsActive : ''}>Vision</a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/history">
                                <a className={pathname == "/cgha/about-us/history" ? styles.IsActive : ''}>History</a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/staff">
                                <a className={pathname == "/cgha/about-us/staff" ? styles.IsActive : ''}>Staff</a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/job-vacancies">
                                <a className={pathname == "/cgha/about-us/job-vacancies" ? styles.IsActive : ''}>Job Vacancies</a>
                            </Link>
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
                        To be a leading centre for excellent christian education.
                        </p>
                        <h2>Our Mission</h2>
                        <p>
                        To educate and produce holistic individuals with good academic background founded on christian values and committed to selfless service to God and humanity.
                        </p>
                        <h2>Our Values</h2>
                        <p>
                            To achieve our vision, we seek to encourage, challenge and nurture our children so that they:
                        </p>
                        <ul>
                            <li>Develop curiosity, creativity, determination and resilience;</li>
                            <li>Grow morally, spiritually and socially and in physical and emotional health;</li>
                            <li>Become independent and confident young people who possess the independence and resourcefulness to thrive in the modern world;</li>
                            <li>Respect the needs of others, recognising the importance of kindness, empathy, co-operation and collaboration;</li>
                            <li>Discover, explore and extend their passions, skills and personal qualities through an education that extends well beyond the classroom and offers wide ranging opportunities to participate and to excel.</li>
                        </ul>
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
                            <Link href ="/cgha/about-us/why-chepkolon">
                                <a className={pathname == "/cgha/about-us/why-chepkolon" ? styles.IsActive : ''}>Why Chepkolon </a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/headmaster-welcome">
                                <a className={pathname == "/cgha/about-us/headmaster-welcome" ? styles.IsActive : ''}>Headmaster&apos;s welcome</a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/vision">
                                <a className={pathname == "/cgha/about-us/vision" ? styles.IsActive : ''}>Vision</a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/history">
                                <a className={pathname == "/cgha/about-us/history" ? styles.IsActive : ''}>History</a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/staff">
                                <a className={pathname == "/cgha/about-us/staff" ? styles.IsActive : ''}>Staff</a>
                            </Link>
                        </li>
                        <li>
                            <Link href ="/cgha/about-us/job-vacancies">
                                <a className={pathname == "/cgha/about-us/job-vacancies" ? styles.IsActive : ''}>Job Vacancies</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}
