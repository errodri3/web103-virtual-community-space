const getAllEvents = async () => {
  const response = await fetch('/api/events')
  if (!response.ok) throw new Error('Failed to fetch events')
  return response.json()
}

const getEventById = async (id) => {
  const response = await fetch(`/api/events/${id}`)
  if (!response.ok) throw new Error('Failed to fetch event')
  return response.json()
}

const getEventsByLocationId = async (locationId) => {
  const response = await fetch(`/api/locations/${locationId}/events`)
  if (!response.ok) throw new Error('Failed to fetch events for location')
  return response.json()
}

export default { getAllEvents, getEventById, getEventsByLocationId }