import React from 'react'
import Image from 'next/image';

const Promo = (props) => {
  return (
    <div className='homepage-large-promo'>
        <a href={props.href} aria-label="The Grange School"></a>
        <div className='d-table'>
            <div className='d-table-cell'>
                <div className='promo-large-img'>
                    <Image src={props.src} alt={props.alt} />
                </div>
                <p>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Promo;