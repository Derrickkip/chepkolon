import Image from 'next/image'
import styles from './Welcome.module.css'

import { Button } from '../Button';
import classNames from 'classnames';

const Welcome = () => {

    return (
        <section className={styles.Welcome}>
            <div className={styles.WelcomeInner}>
                <article className={styles.WelcomePrimary}>
                    <header className={styles.GhpHeader}>
                        <h2>Welcome <span>to</span></h2>
                        <h3>Chepkolon</h3>
                    </header>
                    <p>
                    Welcome to The Chepkolon Schools. I hope that the information on our website will give you a flavour of life at our wonderful schools and an insight into what makes Chepkolon such a special place to be.
                    </p>
                    <br></br>
                    <p>
                    Our school is a warm and welcoming environment built on the strength of relationships between our children and staff. We provide a modern, forward-thinking approach to independent education based on traditional values. 
                    <br/><br/>
                    Here, our children are motivated to learn and encouraged to participate in a wide range of enrichment activities so that they develop academically and emerge as fully-rounded,thoughtful and caring individuals.
                    <br/><br/>
                    Our aim is to provide every child with the experiences, knowledge and academic skills they need to become confident and ambitious adults.
                    <br/><br/>
                     We want our young people to have every opportunity available to them so I am committed to encouraging them all to aim high and live their education.
                    <br/><br/>
                    We hope our website gives you and your child, or children, a real insight into the stimulating, exciting environment and the exceptional relationships that are a fundamental part of our community. 
                    <br/><br/>
                    Of course, to truly understand that Chepkolon experience, you need to visit us, so please do get in touch with us.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Welcome;