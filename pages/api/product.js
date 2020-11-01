const pgp = require('pg-promise')({
  noWarnings: true
})

const db = pgp(`postgres://ahmedel:Password@localhost:5432/soccer_vp_test`)