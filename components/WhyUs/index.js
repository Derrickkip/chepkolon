import Image from 'next/image'
import React from 'react'

import styles from './WhyUs.module.css'
import classNames from 'classnames'

const WhyChepkolon = () => {
  return (
    <section className={classNames(styles.WhyChepkolon, 'homepage-section')}>
      <div className='homepage-title-section'>
        Why Chepkolon?
      </div>
      <div className={classNames(styles.LivingTheEducationInner, 'clearfix')}>
        <div className='d-table'>
          <div className={styles.FlexTableCell}>
            <div className='d-table-cell-left'>
              <div className={styles.IframeEmbedded}>
                <Image src={require('../../assets/assembly2.jpg')} alt="student" style={{width: '459px', position: 'absolute', left: '-76.5px', top: '0px', height: '306px', opacity: '1'}}/>
              </div>
            </div>
            <div className='d-table-cell-right' style={{display: 'flex'}}>
              <div className={styles.LivingTheEducationDetails}>
                <div><Image src={require('../../assets/icons/people.png')} alt="people"/> Why Chepkolon?</div>
                <p>Our young people live their education; fully embracing it and feeling immersed in school life through every aspect of it, inside and outside the classroom. We aim to help our young people prepare for life after school, , not just academically but as respectful and confident adults.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChepkolon