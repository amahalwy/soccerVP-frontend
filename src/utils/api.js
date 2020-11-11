const API_HOST = process.env.NODE_ENV === 'production' ? 'https://soccervp-backend.herokuapp.com' : 'http://localhost:5000';

const makeUrl = (path) => `${API_HOST}${path}`;


// User apis
export const getUser = (key, id) => fetch(makeUrl(`/users/${id}`), {
  headers: {
    Authorization: '... get the localStorage JWT key ...',
  }
}).then(r => r.json())

export const postUser = (user) => fetch(makeUrl('/users'), {
  method: 'POST',
  body: user,
}).then(r => r.json())

export const patchUser = (user, id) => fetch(makeUrl(`/users/${id}`), {
  method: 'PATCH',
  headers: {
    Authorization: localStorage.jwtToken,
  },
  body: user,
}).then(r => r.json())

export const postSession = (router, request) => fetch(makeUrl('/sessions'), {
  method: 'POST',
  body: request
})
.then(r => r.json())
.then(data => {
  if (data.error) {
    alert(data.error);
  } else {
    localStorage.setItem('jwtToken', data.jwt);
    localStorage.setItem('currentUser', JSON.stringify(data.user));
    router.push('/profile')
  }
})

export const getProfile = (key, userId) => fetch(makeUrl(`/users/${userId}`), {
  headers: {
    Authorization: localStorage.jwtToken,
  }
}).then(r => r.json())


// Event apis
export const getEvent = (key, id) => fetch(makeUrl(`/events/${id}`), {
  headers: {
    Authorization: localStorage.jwtToken,
  }
}).then(r => r.json())

export const postEvent = (event) => fetch(makeUrl('/events'), {
  method: 'POST',
  headers: {
    Authorization: localStorage.jwtToken,
  },
  body: event
})
.then(r => r.json())
.then(data => {
  if (data.error) {
    alert(data.error);
  } 
})


// RSVP apis
export const postRsvp = (rsvp) => fetch(makeUrl('/rsvps'), {
  method: 'POST',
  body: rsvp,
}).then(r => r.json())