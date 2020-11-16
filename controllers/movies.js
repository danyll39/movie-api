const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByDirectorOrTitle = (request, response) => {
  const { search } = request.params
  const foundMovie = movies.filter((movie) => {
    if (movie.directors.some((director) => director.toLowerCase().includes(search.toLowerCase()))) {
      return movies
    } else {
      return movie.title.toLowerCase().includes(search.toLowerCase())
    }
  })

  return response.send(foundMovie)
}

const saveNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('The following fields are required: title, directors, releaseDate, rating, runTime, genres')
  }

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)


  return response.status(201).send(newMovie)
}



module.exports = { getAllMovies, getMovieByDirectorOrTitle, saveNewMovie }
