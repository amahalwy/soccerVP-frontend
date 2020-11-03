const API_HOST = process.env.NODE_ENV === 'production' ? 'production_url' : 'http://localhost:5000';

const makeUrl = (path) => `${API_HOST}${path}`;

export const getEvent = (key, id) => fetch(makeUrl(`/events/${id}`), {
  headers: {
    Authorization: '... get the localStorage JWT key ...',
  }
}).then(r => r.json())
