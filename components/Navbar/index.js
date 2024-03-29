import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from './Navbar.module.css'
import classNames from 'classnames'

function IndexNavbar() {
    const [navbar, setNavbar] = React.useState("notScrolled");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [isOpen, setSubMenu] = React.useState(false);
  const [subMenuLinks, setLinks] = React.useState('')

  const {pathname} = useRouter();

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
    document.body.classList.toggle("nav-open");
  };


  const toggleSubMenu = (event, linkItems) => {
    setLinks(linkItems)
    setSubMenu(!isOpen);
  }

  const navigateToSubMenu = () => {
    setTimeout(() => {
    setSubMenu(!isOpen);
    setNavbarCollapse(!navbarCollapse);
    document.body.classList.toggle("nav-open");
  }, 800)
  }

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
        <Image src={require(pathname.includes('cgha') ? '../../assets/logo.jpg' : '../../assets/mjini_logo.jpg')} alt="logo"/>
      </div>
      { pathname.includes('cgha') ? (
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
                        <Link href='/cgha/about-us/why-chepkolon'>
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
                                <Link href='about-us/why-chepkolon'>
                                  <a>About Chepkolon</a>
                                </Link>
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
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu" onClick={(event) => toggleSubMenu(event,{
                          title: "About Chepkolon",
                          link: "/cgha/about-us/why-chepkolon",
                          smallLinks: [
                            {
                              title: "Why Chepkolon?",
                              link: "/cgha/about-us/why-chepkolon",
                            },
                            {
                              title: "Head Master's Welcome",
                              link: "/cgha/about-us/headmaster-welcome/",
                            },
                            {
                              title: "Vision",
                              link: "/cgha/about-us/vision/",
                            },
                            {
                              title: "History",
                              link: "/cgha/about-us/history/",
                            },
                            {
                              title: "Staff",
                              link: "/cgha/about-us/staff/",
                            },
                            {
                              title: "Job Vacancies",
                              link: "/cgha/about-us/job-vacancies/",
                            }
                          ]
                        })}>
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Admissions</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu" onClick={(event) => toggleSubMenu(event,{
                          title: "Boarding",
                          link: "/cgha/about-us/why-chepkolon",
                          smallLinks: [
                            {
                              title: "Boarding At Chepkolon",
                              link: "/cgha/about-us/why-chepkolon",
                            },
                            {
                              title: "Boys Boarding",
                              link: "/cgha/about-us/headmaster-welcome/",
                            },
                            {
                              title: "Girls Boarding",
                              link: "/cgha/about-us/vision/",
                            },
                            {
                              title: "Weekends",
                              link: "/cgha/about-us/history/",
                            },
                            {
                              title: "Food At Chepkolon",
                              link: "/cgha/about-us/staff/",
                            }
                          ]
                        })}>
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      {/* <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Academic</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li> */}
                      <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Boarding</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu" onClick={(event) => toggleSubMenu(event,{
                          title: "Boarding",
                          link: "/cgha/boarding",
                          smallLinks: [
                            {
                              title: "Boarding At Chepkolon",
                              link: "/cgha/boarding",
                            },
                            {
                              title: "Boys Boarding",
                              link: "/cgha/about-us/headmaster-welcome/",
                            },
                            {
                              title: "Girls Boarding",
                              link: "/cgha/about-us/vision/",
                            },
                            {
                              title: "Weekends",
                              link: "/cgha/about-us/history/",
                            },
                            {
                              title: "Food At Chepkolon",
                              link: "/cgha/about-us/staff/",
                            }
                          ]
                        })}>
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      {/* <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Pastoral</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li> */}
                      <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Co-Curricular</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu" onClick={(event) => toggleSubMenu(event,{
                          title: "Co-Curricular",
                          link: "/cgha/about-us/why-chepkolon",
                          smallLinks: [
                            {
                              title: "Co-Curricular Aims",
                              link: "/cgha/about-us/why-chepkolon",
                            },
                            {
                              title: "Music",
                              link: "/cgha/about-us/headmaster-welcome/",
                            },
                            {
                              title: "Sport",
                              link: "/cgha/about-us/vision/",
                            },
                            {
                              title: "Trips",
                              link: "/cgha/about-us/history/",
                            }
                          ]
                        })}>
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      {/* <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>News and Events</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={classNames(styles.SecondLevelNavigation, isOpen ? styles.IsOpen : '', 'second-level-navigation')}>
                <button className={styles.IntSchMenuCloseSLPanel} title="close submenu" onClick={toggleSubMenu}></button>
                <div className={styles.MenuDisplayTable}>
                  <div className={styles.MenuDisplayTableCell}>
                    <div className={styles.MenuNavigateBack}>
                      Back
                    </div>
                    <div className={styles.MenuNavigateBackWrapper}>
                      <div className={styles.MenuCurrentSectionTitle}>
                        <Link href='/cgha/about-us/why-chepkolon'>
                          <a onClick={toggleNavbarCollapse}>{subMenuLinks && subMenuLinks.title}</a>
                        </Link>
                      </div>
                    </div>
                    <ul>
                      {
                        subMenuLinks && subMenuLinks.smallLinks.map((link, index) => {
                          return (
                            <li key={index}><Link href={link.link}><a onClick={navigateToSubMenu}>{link.title}</a></Link></li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
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
      </div>) : 
      (
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
                        <Link href='/premier/welcome'>
                          <a onClick={toggleNavbarCollapse} className={pathname == '/premier/welcome' ? styles.IsActive : ''}>
                            <span>Home</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/premier/about-us/why-chepkolon'>
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
                                <Link href='about-us/why-chepkolon'>
                                  <a>About Chepkolon</a>
                                </Link>
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
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu" onClick={(event) => toggleSubMenu(event,{
                          title: "About Chepkolon",
                          link: "/premier/about-us/why-chepkolon",
                          smallLinks: [
                            {
                              title: "Why Chepkolon?",
                              link: "/premier/about-us/why-chepkolon",
                            },
                            {
                              title: "Head Master's Welcome",
                              link: "/premier/about-us/headmaster-welcome/",
                            },
                            {
                              title: "Vision",
                              link: "/premier/about-us/vision/",
                            },
                            {
                              title: "History",
                              link: "/premier/about-us/history/",
                            },
                            {
                              title: "Staff",
                              link: "/premier/about-us/staff/",
                            },
                            {
                              title: "Job Vacancies",
                              link: "/premier/about-us/job-vacancies/",
                            }
                          ]
                        })}>
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Admissions</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu" onClick={(event) => toggleSubMenu(event,{
                          title: "Boarding",
                          link: "/cgha/about-us/why-chepkolon",
                          smallLinks: [
                            {
                              title: "Boarding At Chepkolon",
                              link: "/cgha/about-us/why-chepkolon",
                            },
                            {
                              title: "Boys Boarding",
                              link: "/cgha/about-us/headmaster-welcome/",
                            },
                            {
                              title: "Girls Boarding",
                              link: "/cgha/about-us/vision/",
                            },
                            {
                              title: "Weekends",
                              link: "/cgha/about-us/history/",
                            },
                            {
                              title: "Food At Chepkolon",
                              link: "/cgha/about-us/staff/",
                            }
                          ]
                        })}>
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      {/* <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Academic</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li> */}
                      {/* <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Boarding</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu" onClick={(event) => toggleSubMenu(event,{
                          title: "Boarding",
                          link: "/cgha/boarding",
                          smallLinks: [
                            {
                              title: "Boarding At Chepkolon",
                              link: "/cgha/boarding",
                            },
                            {
                              title: "Boys Boarding",
                              link: "/cgha/about-us/headmaster-welcome/",
                            },
                            {
                              title: "Girls Boarding",
                              link: "/cgha/about-us/vision/",
                            },
                            {
                              title: "Weekends",
                              link: "/cgha/about-us/history/",
                            },
                            {
                              title: "Food At Chepkolon",
                              link: "/cgha/about-us/staff/",
                            }
                          ]
                        })}>
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li> */}
                      {/* <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Pastoral</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li> */}
                      <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>Co-Curricular</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu" onClick={(event) => toggleSubMenu(event,{
                          title: "Co-Curricular",
                          link: "/cgha/about-us/why-chepkolon",
                          smallLinks: [
                            {
                              title: "Co-Curricular Aims",
                              link: "/cgha/about-us/why-chepkolon",
                            },
                            {
                              title: "Music",
                              link: "/cgha/about-us/headmaster-welcome/",
                            },
                            {
                              title: "Sport",
                              link: "/cgha/about-us/vision/",
                            },
                            {
                              title: "Trips",
                              link: "/cgha/about-us/history/",
                            }
                          ]
                        })}>
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li>
                      {/* <li>
                        <Link href='/cgha/welcome/'>
                          <a onClick={toggleNavbarCollapse}>
                            <span>News and Events</span>
                          </a>
                        </Link>
                        <button type="button" className={classNames(styles.MenuBtnArrow, 'JsShowPanel')} title="open submenu" aria-label="open submenu">
                          <Image src={require('../../assets/icons/icons8-down-arrow-50.png')} alt="arrow"/>
                        </button>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={classNames(styles.SecondLevelNavigation, isOpen ? styles.IsOpen : '', 'second-level-navigation')}>
                <button className={styles.IntSchMenuCloseSLPanel} title="close submenu" onClick={toggleSubMenu}></button>
                <div className={styles.MenuDisplayTable}>
                  <div className={styles.MenuDisplayTableCell}>
                    <div className={styles.MenuNavigateBack}>
                      Back
                    </div>
                    <div className={styles.MenuNavigateBackWrapper}>
                      <div className={styles.MenuCurrentSectionTitle}>
                        <Link href='/cgha/about-us/why-chepkolon'>
                          <a onClick={toggleNavbarCollapse}>{subMenuLinks && subMenuLinks.title}</a>
                        </Link>
                      </div>
                    </div>
                    <ul>
                      {
                        subMenuLinks && subMenuLinks.smallLinks.map((link, index) => {
                          return (
                            <li key={index}><Link href={link.link}><a onClick={navigateToSubMenu}>{link.title}</a></Link></li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
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
                  {/* <figure className={classNames(styles.Promo, 'promo')}>
                    <a href="boarding/welcome" className={styles.PromoLink} title="Boarding" aria-label="link to boarding" touch-info="0">&nbsp;</a>
                    <div className={styles.PromoImgWrapper}>
                      <Image src={require("../../assets/assembly2.jpg")} alt="boarding"></Image>
                    </div>
                    <figcaption>
                      <h2>Boarding at Chepkolon</h2>
                    </figcaption>
                  </figure> */}
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
      )}
    </header>
  )
}

export default IndexNavbar