import React from 'react'
import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className='hero-image-area opacityOn'>
        <div className='hero-images-area'>
            <div className='hero-images-area-inner'>
                    <Image src={require('../assets/assembly.jpg')} alt="director"/>
            </div>
        </div>
        <article className='hero__text'>
          <div>
            <h1>
              <strong>Chepkolon</strong>
              <small>A School with God at it&apos;s heart</small>
            </h1>
          </div>
        </article>
        <button className='scrollDownButton' title="scroll down" aria-label="scroll down to next section">
          <i></i>
        </button>
    </div>
  )
}

export default HeroImage