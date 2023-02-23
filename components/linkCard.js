import React from 'react'

export const LinkCard = (props) => {
  return (
    <a className="template-btn-corner" href={props.href}>
        <span className='cr-top'></span>
        <span className='cr-btm'></span>
        <p>{props.text}</p>
    </a>
  )
}
