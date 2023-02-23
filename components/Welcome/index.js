import Image from 'next/image'
import style from './Welcome.module.css'

import { Button } from '../Button';
import classNames from 'classnames';

const Welcome = () => {

    return (
        <section className={classNames(style.WelcomeSection, 'homepage-section')}>
            <p className='homepage-title-section'>Welcome</p>
            <div className={classNames('clearfix', style.WelcomeSectionInner)}>
                <div className={style.WelcomeSectionImage}>
                    <Image src={require('../../assets/david-towett-director.png')} alt="director" />
                </div>
                <div className={style.WelcomeSectionQuote}>
                    <div className='d-table'>
                        <div className='d-table-cell'>
                            <p>Welcome to Chepkolon Schools. Our aim is to provide every child with the experiences, knowledge and academic skills they need to become confident and ambitious adults.</p>
                            <div style={{textAlign:'center'}}>
                                Mr&nbsp;David Towett&nbsp;-&nbsp;
                                <span>Director</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.WelcomeText}>
                    <p>From baby class to class 8, whether in lessons, through the enormous number of enrichment activities or our impressive pastoral support, we create a stimulating, unique educational experience which leads to outstanding academic results.</p>
                    <Button text="Read more" href="/about-us/welcome"/>
            </div>
        </section>
    )
}

export default Welcome;