/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import Card from '../Card'
import styles from './Schools.module.css'


const Schools = () => {
    return (
        <section className={classNames(styles.Links)}>
                <div className={styles.Link}>
                    <div className={styles.ImageBox}>
                        <Image src={require('../../assets/assembly2.jpg')} className="w-full" alt="school"/>
                    </div>
                    <div className={styles.LinkInfo}>
                        <div>CHEPKOLON</div>
                        <div>GREEN HIGHLANDS</div>
                        <div>ACADEMY</div>
                    </div>  
                    <a href='cgha/welcome'></a>
                </div>
                <div className={styles.Link}>
                    <div className={styles.ImageBox}>
                        <Image src={require('../../assets/assembly2.jpg')} className="w-full" alt="school"/>
                    </div>
                    <div className={styles.LinkInfo}>
                        <div>CHEPKOLON</div>
                        <div>JUNIOUR</div>
                        <div>HIGH SCHOOL</div>
                    </div>
                    <a href='premier/welcome'></a>
                </div>
                <div className={styles.Link}>
                    <div className={styles.ImageBox}>
                        <Image src={require('../../assets/assembly2.jpg')} className="w-full" alt="school"/>
                    </div>
                    <div className={styles.LinkInfo}>
                        <div>CHEPKOLON</div>
                        <div>PREMIER SCHOOL</div>
                        <div>MJINI</div>
                    </div>  
                    <a href='premier/welcome'></a>
                </div>
          </section>
    )
}

export default Schools