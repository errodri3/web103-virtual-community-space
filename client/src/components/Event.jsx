import React, { useState, useEffect } from 'react'
import { formatDate, formatTime, getTimeRemaining } from '../utils/dates'
import '../css/Event.css'

const Event = ({ title, startsAt, image, locationName }) => {
  const [remaining, setRemaining] = useState(getTimeRemaining(startsAt))

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(getTimeRemaining(startsAt))
    }, 1000)

    return () => clearInterval(timer)
  }, [startsAt])

  return (
    <article className={`event-information ${remaining.isPast ? 'past-event' : ''}`}>
      <img src={image} alt={title} />

      <span className={`event-badge ${remaining.isPast ? 'negative-time-remaining' : ''}`}>
        {remaining.text}
      </span>

      <div className='event-information-overlay'>
        <div className='text'>
          <h3>{title}</h3>
          {locationName && (
            <p><i className="fa-solid fa-location-dot"></i> {locationName}</p>
          )}
          <p>
            <i className="fa-regular fa-calendar"></i> {formatDate(startsAt)}
            <br />
            {formatTime(startsAt)}
          </p>
        </div>
      </div>
    </article>
  )
}

export default Event