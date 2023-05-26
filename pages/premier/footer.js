import React from 'react'

import classNames from 'classnames'

import styles from './Footer.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.Footer}>
        <div className={styles.FooterMain}>
            <div className={styles.FooterCol}>
                <h2 className={classNames(styles.FooterBigHeader, styles.IsSmaller)}>key links</h2>
                <ul className={styles.HpPromos}>
                  <li>
                    <Link href="/cgha/admissions">
                      <a className={styles.HpPromosLink}>Admissions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cgha/admissions">
                      <a className={styles.HpPromosLink}>School Calendar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cgha/admissions">
                      <a className={styles.HpPromosLink}>Latest News</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/cgha/admissions">
                      <a className={styles.HpPromosLink}>Boarding</a>
                    </Link>
                  </li> */}
                </ul>
            </div>
            <div className={styles.FooterCol}>
              <span className={styles.FooterWaterMark}></span>
              <h2 className={styles.FooterBigHeader}>contact</h2> 
              <div className={styles.FooterAddressWrapper}>
                <address>
                  <h3 className={styles.FooterHeading}>address</h3>
                  <p>Chepkolon Premier School - Mjini&nbsp;</p>
                  <p>Kericho Town</p>
                </address>
                <a className={styles.FooterDirections} title="see chepkolon green highlands directions" aria-label="see chepkolon green highlands directions" target='_blank'>
                  <i></i>
                  <span className={styles.GhLeftLine}>directions</span>
                </a>
                <div className={styles.FooterPhoneWrapper}>
                  <h3 className={styles.FooterHeading}>telephone</h3>
                  <p>
                    <a className={styles.GhLeftLine} href="tel:0718003567" title="call" aria-label="phone-number">
                      0724555699
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.FooterCol}>
                <article className={styles.Connect}>
                  <div className={styles.ConnectInner}>
                    <h2 className={styles.ConnectFullText}>
                      <span>follow the</span>
                      <strong>@chepkolon</strong>
                      story
                    </h2>
                    <ul>
                      <li className={styles.ConnectIcon}>
                        <Link href="#">
                          <a>
                            <i className='fa fa-twitter'></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </article>
            </div>
        </div>
        <div className={styles.BottomCredits}>
          <div className={styles.ButtonTop}></div>
          <div className={styles.Right}>
              <h5 className="">{new Date().getFullYear()} &copy; chepkolon schools - All rights reserved</h5>
          </div>
        </div>
    </footer>
  )
}

export default Footer