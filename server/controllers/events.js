import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
  try {
    const results = await pool.query(`
      SELECT events.*, locations.name AS location_name
      FROM events
      JOIN locations ON events.location_id = locations.id
      ORDER BY starts_at ASC
    `)
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getEventById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('SELECT * FROM events WHERE id = $1', [id])

    if (results.rows.length === 0) {
      return res.status(404).json({ error: 'Event not found' })
    }

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getEventsByLocationId = async (req, res) => {
  try {
    const locationId = parseInt(req.params.id)
    const results = await pool.query(
      'SELECT * FROM events WHERE location_id = $1 ORDER BY starts_at ASC',
      [locationId]
    )
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default { getEvents, getEventById, getEventsByLocationId }