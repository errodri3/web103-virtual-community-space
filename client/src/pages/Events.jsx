import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import '../css/Events.css'

const Events = () => {
  const [events, setEvents] = useState([])
  const [locations, setLocations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [sortOrder, setSortOrder] = useState('soonest')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsData, locationsData] = await Promise.all([
          EventsAPI.getAllEvents(),
          LocationsAPI.getAllLocations()
        ])
        setEvents(eventsData)
        setLocations(locationsData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const visibleEvents = events
    .filter((event) =>
      selectedLocation === 'all' || event.location_id === Number(selectedLocation)
    )
    .sort((a, b) =>
      sortOrder === 'soonest'
        ? new Date(a.starts_at) - new Date(b.starts_at)
        : new Date(b.starts_at) - new Date(a.starts_at)
    )

  return (
    <div className='all-events'>
      <div className='events-controls'>
        <label>
          Location
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value='all'>All locations</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Sort by date
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value='soonest'>Soonest first</option>
            <option value='latest'>Latest first</option>
          </select>
        </label>
      </div>

      <div className='events-list'>
        {visibleEvents.length > 0 ? (
          visibleEvents.map((event) => (
            <Event
              key={event.id}
              title={event.title}
              startsAt={event.starts_at}
              image={event.image}
              locationName={event.location_name}
            />
          ))
        ) : (
          <h2><i className="fa-regular fa-calendar-xmark"></i> No events found</h2>
        )}
      </div>
    </div>
  )
}

export default Events