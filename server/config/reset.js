import { pool } from './database.js'

const locations = [
  { name: 'Echo Lounge & Music Hall', address: '1323 N Stemmons Fwy', city: 'Dallas', state: 'TX', zip: '75207', image: 'https://picsum.photos/seed/echo/800/500' },
  { name: 'House of Blues', address: '2200 N Lamar St', city: 'Dallas', state: 'TX', zip: '75202', image: 'https://picsum.photos/seed/blues/800/500' },
  { name: 'The Pavilion at Toyota Music Factory', address: '300 W Las Colinas Blvd', city: 'Irving', state: 'TX', zip: '75039', image: 'https://picsum.photos/seed/pavilion/800/500' },
  { name: 'American Airlines Center', address: '2500 Victory Ave', city: 'Dallas', state: 'TX', zip: '75219', image: 'https://picsum.photos/seed/aac/800/500' }
]

const events = [
  { title: 'Neon Static Live', starts_at: '2026-09-12T20:00:00-05:00', location_id: 1, image: 'https://picsum.photos/seed/e1/600/400' },
  { title: 'Open Mic Night', starts_at: '2026-10-20T19:00:00-05:00', location_id: 1, image: 'https://picsum.photos/seed/e2/600/400' },
  { title: 'Velvet Harbor Tour', starts_at: '2026-11-08T21:00:00-06:00', location_id: 1, image: 'https://picsum.photos/seed/e3/600/400' },
  { title: 'Blues Brunch', starts_at: '2026-09-27T11:00:00-05:00', location_id: 2, image: 'https://picsum.photos/seed/e4/600/400' },
  { title: 'The Midnight Cartographers', starts_at: '2026-10-31T20:30:00-05:00', location_id: 2, image: 'https://picsum.photos/seed/e5/600/400' },
  { title: 'Summer Send-Off Fest', starts_at: '2026-09-05T17:00:00-05:00', location_id: 3, image: 'https://picsum.photos/seed/e6/600/400' },
  { title: 'Golden Hour Sessions', starts_at: '2026-10-24T18:00:00-05:00', location_id: 3, image: 'https://picsum.photos/seed/e7/600/400' },
  { title: 'Paper Satellites Arena Tour', starts_at: '2026-10-15T19:30:00-05:00', location_id: 4, image: 'https://picsum.photos/seed/e8/600/400' },
  { title: 'Holiday Lights Concert', starts_at: '2026-12-12T19:00:00-06:00', location_id: 4, image: 'https://picsum.photos/seed/e9/600/400' }
]

const createTables = async () => {
  await pool.query(`
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS locations;

    CREATE TABLE locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      city VARCHAR(100) NOT NULL,
      state VARCHAR(2) NOT NULL,
      zip VARCHAR(10) NOT NULL,
      image TEXT
    );

    CREATE TABLE events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      starts_at TIMESTAMPTZ NOT NULL,
      image TEXT,
      location_id INTEGER NOT NULL REFERENCES locations(id) ON DELETE CASCADE
    );
  `)
  console.log('✅ tables created')
}

const seedTables = async () => {
  for (const loc of locations) {
    await pool.query(
      'INSERT INTO locations (name, address, city, state, zip, image) VALUES ($1, $2, $3, $4, $5, $6)',
      [loc.name, loc.address, loc.city, loc.state, loc.zip, loc.image]
    )
  }
  console.log('✅ locations seeded')

  for (const ev of events) {
    await pool.query(
      'INSERT INTO events (title, starts_at, image, location_id) VALUES ($1, $2, $3, $4)',
      [ev.title, ev.starts_at, ev.image, ev.location_id]
    )
  }
  console.log('✅ events seeded')
}

const reset = async () => {
  try {
    await createTables()
    await seedTables()
  } catch (err) {
    console.error('❌ reset failed:', err)
  } finally {
    await pool.end()
  }
}

reset()