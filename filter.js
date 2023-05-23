const movies = require('./data')

// {
//     title: 'Schindler"s List',
//     year: 1993,
//     director: 'Steven Spielberg',
//     duration: '3h 15min',
//     genre: ['Biography', 'Drama', 'History'],
//     score: 8.9,
//   },
// Array.filter()

// Todos os filmes do Steven Spilberg que possuem o genero Drama:

const stevenDramaMovies = movies.filter((movie) => {
  if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
    // for (genre of movie.genre) {
    //   if (genre === 'Drama') {
    //     return true
    //   }
    return true
    // }
  }
  return false
})

const stevenDramaMovies2 = movies.filter(
  (movie, indice, arrayOriginal) =>
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
)

console.log(stevenDramaMovies2)
