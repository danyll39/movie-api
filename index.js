const express = require('express')
const { getAllMovies, getMovieByDirectorOrTitle, saveNewMovie } = require('./controllers/movies')

const app = express()
const bodyParser = require('body-parser')

app.get('/movies', getAllMovies)

app.get('/movies/:search', getMovieByDirectorOrTitle)
app.post('/movies', bodyParser.json(), saveNewMovie)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 1337..')
})
