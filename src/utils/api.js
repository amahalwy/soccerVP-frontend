import { sendData } from "next/dist/next-server/server/api-utils";

const API_HOST = process.env.NODE_ENV === 'production' ? 'production_url' : 'http://localhost:5000';

const makeUrl = (path) => `${API_HOST}${path}`;

export const getEvent = (key, id) => fetch(makeUrl(`/events/${id}`), {
  headers: {
    Authorization: '... get the localStorage JWT key ...',
  }
}).then(r => r.json())

export const getUser = (key, id) => fetch(makeUrl(`/users/${id}`), {
  headers: {
    Authorization: '... get the localStorage JWT key ...',
  }
}).then(r => r.json())

export const postUser = (key, user) => fetch(makeUrl('/users'), {
  method: 'POST',
  headers: {
    Authorization: '... get the localStorage JWT key ...',
  },
  body: user
}).then(r => r.json())


export const getCurrentUser = (key, token) => fetch(makeUrl(`/users/current_user`), {
  headers: {
    Authorization: {token}
  }
}).then(r => r.json())

