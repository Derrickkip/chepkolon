import Image from 'next/image'
import React from 'react'

import styles from './Difference.module.css'
import classNames from 'classnames'

import PromoCard from '../PromoCard'

const items = [
  {
    src: require("../../assets/icons/bible.png"),
    alt: "christian faith",
    title: "Christian Faith",
    description: "Education founded on religious values"
  },
  {
    src: require("../../assets/icons/grades.png"),
    alt: "Outdoor education",
    title: "Outdoor education",
    description: "Over 80% of students get over 400 marks"
  },
  {
    src: require("../../assets/icons/technology.png"),
    alt: "christian faith",
    title: "Technology",
    description: "up-to-date and innovative use of technology"
  },
  {
    src: require("../../assets/icons/teacher.png"),
    alt: "christian faith",
    title: "Environment education",
    description: "1:12 Teacher student ratio"
  },
  {
    src: require("../../assets/icons/boarding.png"),
    alt: "christian faith",
    title: "Christian Faith",
    description: "Excellent boarding facilities"
  },
  {
    src: require("../../assets/icons/bus.png"),
    alt: "christian faith",
    title: "Christian Faith",
    description: "Transport available for day scholars"
  },
]

function Difference() {
  return (
    <section className={classNames(styles.PromosWrapper, 'homepage-section')}>
      <div className={styles.PromosWrapperInner}>
        {
          items.map((item, i) => {
            return (
              <PromoCard key={i} src={item.src} alt={item.alt} text={item.description} />
            )
          })
        }
      </div>  
    </section>
  )
}

export default Difference