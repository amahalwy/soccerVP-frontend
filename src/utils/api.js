const API_HOST = process.env.NODE_ENV === 'production' ? 'https://soccer-vp-backend.vercel.app' : 'http://localhost:5000';

const makeUrl = (path) => `${API_HOST}${path}`;

export const getEvent = (key, id) => fetch(makeUrl(`/events/${id}`), {
  mode: {
    Authorization: '... get the localStorage JWT key ...',
    "Access-Control-Allow-Origin": '*',
    "Host": 'https://soccer-vp-backend.vercel.app',
    "Origin": 'https://soccer-vp-frontend.vercel.app'
  }
}).then(r => r.json())

export const getUser = (key, id) => fetch(makeUrl(`/users/${id}`), {
  headers: {
    Authorization: '... get the localStorage JWT key ...',
  }
}).then(r => r.json())

export const postUser = (user) => fetch(makeUrl('/users'), {
  method: 'POST',
  body: user,
  headers: {
    // Authorization: '... get the localStorage JWT key ...',
    "Access-Control-Allow-Origin": '*',
    "Host": 'https://soccer-vp-backend.vercel.app',
    "Origin": 'https://soccer-vp-frontend.vercel.app'
  },
  mode: no-cors
}).then(r => r.json())

// export const getCurrentUser = (key, token) => fetch(makeUrl(`/current_user`), {
//   headers: {
//     Authorization: {token}
//   }
// }).then(r => r.json())

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
    router.push(`/users/${data.user.id}`)
  }
})