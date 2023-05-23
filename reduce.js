const movies = require('./data')
// Array.reduce()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const sum = numbers.reduce((acc, number) => (acc += number), 0)

// console.log(sum)

// {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3,
//   },

// Media de todos os scores de todos os filmes

// soma de todos scores dividido pela quantidade de filmes

const numberOfMovies = movies.length

const sumOfMoviesScore = movies.reduce(
  (acc, movie, indice, arrayOriginal) => (acc += movie.score),
  0
)
// console.log(sumOfMoviesScore)

console.log(`A media de Score é de ${sumOfMoviesScore / numberOfMovies}`)
