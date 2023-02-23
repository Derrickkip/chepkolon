import classNames from 'classnames';

import Card from '../Card'
import styles from './Schools.module.css'


const Schools = () => {
    return (
        <section className={classNames(styles.Schools, 'homepage-section')}>
            <p className='homepage-title-section'>The Chepkolon Community</p>
              <div className={styles.SchoolGrid}>
                  <Card name="Chepkolon Green Highlands Academy" index={1} src={require('../../assets/assembly.jpg')} description="A mixed day and boarding primary school located in Kericho" path="cgha/welcome"/>
                  <Card name="Chepkolon Premier School Mjini" index={1} src={require('../../assets/assembly2.jpg')} description="Day school located next to Kericho town" path="premier/welcome"/>
                </div>
          </section>
    )
}

export default Schools