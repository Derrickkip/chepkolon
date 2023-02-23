import Image from 'next/image'
import styles from '../styles/Home.module.css'
import bg from '../assets/assembly.jpg'

import { Button } from 'reactstrap';
import { Container } from "reactstrap";
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const styling = {
  backgroundImage: `url(${bg.src})`
}

export default function IndexHome() {
  return (
    <>
      <div
        className={styles.pageHeader}
        style={styling}
      >
        <div className='filter' />
        <div className='content-center'>
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Chepkolon Schools</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              Wholisitic education
            </h2>
          </Container>
        </div>
      </div>
    </>
  )
}
