// Array.map()

// Função Declarativa
function qqcoisa(parm1, parm2) {}

// Função Expressiva (function Expression)

const qqcoisa2 = function (parm1, parm2) {} // função anonima

const qqcoisa3 = (param1, param2) => {} // arrow function

// Array.map(function () {})
// Array.map(() => {})

// () => {return 1} === () => 1

const movies = require('./data')

// {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3,
//   },

// Map - não altera o array original
// Retorna sempre um novo array de mesma dimensão do original

// const directors = movies.map(function (movie) {
//   return movie.director
// })

// const directors = movies.map((movie) => {
//   return movie.director
// })

// const directors = movies.map(movie => movie.director)

const directors = movies.map((movie, indice, arrayOriginal) => movie.director)

console.log(directors)

const noDuplicateDiretors = new Set(directors)
console.log(noDuplicateDiretors)
// forEach - não retorna nada

// const test = movies.forEach((movie) => movie.director)

// console.log(test)
