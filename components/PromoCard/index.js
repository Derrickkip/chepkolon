import React from 'react'
import Image from 'next/image';

import styles from './PromoCard.module.css'

const PromoCard = (props) => {
    return (
        <div className={styles.PromoCard}>
            <a href={props.href} aria-label="Chepkolon School"></a>
            <div className='d-table'>
                <div className='d-table-cell'>
                    <div className={styles.PromoCardImg}>
                        <Image src={props.src} alt={props.alt} />
                    </div>
                    <p className={styles.Description}>{props.text}</p>
                </div>
            </div>
        </div>
      )
}

export default PromoCard;