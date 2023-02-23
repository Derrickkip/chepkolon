import Image from 'next/image';
import React from 'react'

const Calendar = () => {
  return (
    <div className='sticky-calendar-wrapper'>
        <div className='design-triangle-large'></div>
        <div className='design-triangle-small'></div>
        <a href="/calendar" title="Calendar">
            <Image src={require('../assets/icons/calendar.png')} alt="calendar"/>
            <span>Calendar</span>
        </a>
    </div>
  )
}

export default Calendar;