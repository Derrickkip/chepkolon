import Image from 'next/image'
import React from 'react'

import classNames from 'classnames'

import styles from './Welcome.module.css'

function Index() {
  return (
    <>
      <div className={styles.SlHero}>
        <div className={styles.HeroImagesArea}>
          <div className={styles.SlHeroInner}>
            <div>
              <Image src={require('../../assets/class2.jpg')} alt="class"></Image>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(styles.SlContentArea, styles.Clearfix)}>
        <div className={styles.SlContentMainBg}>
          <div className={styles.SlBgBottom}>
            <div></div>
          </div>
        </div>
        <div className={styles.PageTitle}>
          <div className={styles.SecondLvlCss}>
            <h1>Welcome to Chepkolon Junior High School</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index