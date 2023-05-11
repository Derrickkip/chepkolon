import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import styles from './NewsCard.module.css'

import { Card, Row, Col } from 'reactstrap'
import Link from 'next/link'

const NewsCard = () => {
    return (
        // <a
        //     href='/'
        //     className=''
        //     target={'_blank'}
        //     rel={'noreferrer'}
        // >
        //     <div className=''>
        //         <Image src={require('../../assets/antoine-barres.jpg')} alt="" />
        //     </div>
        //     <div className=''>
        //         <div className=''>
        //             lorem ipsum lorem ipsum
        //         </div>
        //         <div className=''>
        //             lorem ipsum lorem ipsum
        //         </div>
        //     </div>
        // </a>
        <div className={classNames(styles.Wrapper)}>
            <div className={classNames(styles.NewsCard)}>
                <div className={classNames(styles.Project)}>
                    <Link href='/' className={classNames(styles.BlogLink)}>
                        <Image src={require('../../assets/antoine-barres.jpg')} alt=""  className={styles.Image}/>
                    </Link>
                    <dl>
                        <dt>
                            <span>
                                <a href="/" className={classNames(styles.DtLink)}>2023 is the best year</a>
                            </span>
                        </dt>
                        <dd className={styles.Description}>
                        Hannah and her team 
                        chose to produce a play in response to the worsening violence against 
                        women in Australia and around the world
                        </dd>
                    </dl>
                    <div className={styles.MoreLink}>
                        <a href="/" className={styles.BtnBlack}>Read More +</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewsCard