import React from 'react'

import NewsCard from '../NewsCard'

const NewsComponent = () => {
  return (
    <div className='homepage-section'>
        <p className='homepage-title-section'>The Latest Chepkolon News</p>
        <div style={{display: 'flex'}}>
            <NewsCard />
            <NewsCard />
        </div>
    </div>
  )
}

export default NewsComponent