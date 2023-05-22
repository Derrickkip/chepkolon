import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from './Navbar.module.css'
import classNames from 'classnames'

function IndexNavbar() {
    const [navbar, setNavbar] = React.useState("notScrolled");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const {pathname} = useRouter();

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 249 ||
        document.body.scrollTop > 249
      ) {
        setNavbar("");
      } else if (
        document.documentElement.scrollTop < 250 ||
        document.body.scrollTop < 250
      ) {
        setNavbar("notScrolled");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <header className={classNames(styles.Header, navbar=='notScrolled' ? '' : styles.IsSticky)}>
      <div className={classNames(styles.HeaderTopNav, 'header-top', pathname === '/' ? 'hidden' : '')}>
        <button className={classNames(styles.Burger, navbarCollapse ? styles.isActive : '')} onClick={toggleNavbarCollapse}>
        <span className={classNames(styles.BurgerLine, styles.Default)}>
            <i></i>
          </span>
          <span className={classNames(styles.BurgerLine, styles.Cross)}>
            <i></i>
            <i></i>
          </span>
          <em>menu</em>
        </button>
        <button className={classNames(styles.Burger, styles.ForSticky, navbarCollapse ? styles.isActive : '')} onClick={toggleNavbarCollapse}>
          <span className={classNames(styles.BurgerLine, styles.Default)}>
            <i></i>
          </span>
          <span className={classNames(styles.BurgerLine, styles.Cross)}>
            <i></i>
            <i></i>
          </span>
          <em>menu</em>
        </button>
        <div className={styles.TopLinksContainer}>
          <div className={styles.BtnWithDropDown}>
            <div className={classNames(styles.BtnWithDropDownHead, 'btnWithDropDownHead')} touch-info="0">
              <a href="contact">contact&nbsp;</a>
              <i></i>
            </div>
          </div>
        </div>
        <a href="home/" className={classNames(styles.HeaderStickyLogo)} title="chepkolon green highlands academy">
          <Image src={require('../../assets/banner2.png')} alt="banner" />
        </a>
      </div>
      <div className={classNames(styles.DesktopLogo,  pathname === '/' ? 'hidden' : '')}>
        <Image src={require('../../assets/logo.jpg')} alt="logo"/>
      </div>
      <div className={classNames(styles.IntSchMenu, navbarCollapse ? styles.IsOpened : '')}>
        <div className={styles.IntSchMenuOverflowArea}>
          <div className={styles.IntSchMenuOverflowAreaInner}>
            <div className={styles.IntSchMenuMenusWrapper}>
              <div className={styles.FirstLevelNavigation}>
                <div className={classNames(styles.IntSchMenuBtnsClone, styles.ForFirstLevel)}>
                  <button className={classNames(styles.Burger, navbarCollapse ? styles.isActive : '')} onClick={toggleNavbarCollapse}>
                    <span className={classNames(styles.BurgerLine, styles.Default)}>
                      <i></i>
                    </span>
                    <span className={classNames(styles.BurgerLine, styles.Cross)}>
                      <i></i>
                      <i></i>
                    </span>
                    <span className={styles.BurgerLine}></span>
                    <em>Close</em>
                  </button>
                  <div className={styles.TopLinksContainer}>
                    <div className={styles.BtnWithDropDown}>
                      <div className={classNames(styles.BtnWithDropDownHead, 'btnWithDropDownHead')} touch-info="0">
                        <a href="contact">contact&nbsp;</a>
                        <i></i>
                      </div>
                    </div>
                    <a href="home/" className={classNames(styles.HomeBtn, 'homeBtn')} title="go to homepage" label="go to homepage"></a>
                    <a href="contact/" className='mobileContact' title="go to contact page" label="go to contact page"></a>
                  </div>
                </div>
                <div className={styles.TemplateMainMenuLinks}>
                  <div className={styles.TemplateMainMenuLinksInner}>
                    <ul>
                      <li>
                        <Link href='/cgha/welcome'>
                          <a onClick={toggleNavbarCollapse} className={pathname == '/cgha/welcome' ? styles.IsActive : ''}>
                            <span>Home</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href='about-us/why-chepkolon'>
                          <a onClick={toggleNavbarCollapse}>
                            About Chepkolon
                          </a>
                        </Link>
                        <div className={styles.MenuDisplayTable}>
                          <div className={styles.MenuDisplayTableCell}>
                            <div className={styles.MenuNavigateBack}>
                              Back
                            </div>
                            <div className={styles.MenuNavigateBackWrapper}>
                              <div className={styles.MenuCurrentSectionTitle}>
                                <a href="about-us/">About Chepkolon</a>
                              </div>
                            </div>
                            <ul>
                              <li><a href="why-chepkolon/">Why Chepkolon?</a></li>
                              <li><a href="headmasters-welcome/">Head Master&apos;s Welcome</a></li>
                              <li><a href="vision/">Vision</a></li>
                              <li><a href="history/">History</a></li>
                              <li><a href="staff/">Staff</a></li>
                              <li><a href="job-vacancies/">Job Vacancies</a></li>
                            </ul>
                          </div>
                        </div>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Admissions</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Academic</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Boarding</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Pastoral</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Co-Curricular</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>News and Events</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={classNames(styles.SecondLevelNavigation, 'second-level-navigation')}>
                
              </div>
              <div className={styles.ThirdLevelNavigation}>
                
              </div>
            </div>
            <div className={classNames(styles.IntSchMenuExtraContent, 'extra-content')}>
              <article className={styles.MenuPromos}>
                <h2>Key Links</h2>
                <div className={styles.MenuPromosContent}>
                  <figure className={classNames(styles.Promo, 'promo')}>
                    <a href="admissions/welcome" className={styles.PromoLink} title="Admissions" aria-label="link to admissions" touch-info="0">&nbsp;</a>
                    <div className={styles.PromoImgWrapper}>
                      <Image src={require("../../assets/assembly.jpg")} alt="admissions"></Image>
                    </div>
                    <figcaption>
                      <h2>Admissions</h2>
                    </figcaption>
                  </figure>
                  <figure className={classNames(styles.Promo, 'promo')}>
                    <a href="boarding/welcome" className={styles.PromoLink} title="Boarding" aria-label="link to boarding" touch-info="0">&nbsp;</a>
                    <div className={styles.PromoImgWrapper}>
                      <Image src={require("../../assets/assembly2.jpg")} alt="boarding"></Image>
                    </div>
                    <figcaption>
                      <h2>Boarding at Chepkolon</h2>
                    </figcaption>
                  </figure>
                  <figure className={classNames(styles.Promo, 'promo')}>
                    <a href="academics/welcome" className={styles.PromoLink} title="Academics" aria-label="link to academics" touch-info="0">&nbsp;</a>
                    <div className={styles.PromoImgWrapper}>
                      <Image src={require("../../assets/antoine-barres.jpg")} alt="admissions"></Image>
                    </div>
                    <figcaption>
                      <h2>Academic Aims</h2>
                    </figcaption>
                  </figure>
                </div>
              </article>
              <article className={styles.Connect}>

              </article>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default IndexNavbar