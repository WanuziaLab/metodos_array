const movies = require('./data')
// Array.sort()
// ordenar todos os filmes por ano de lançamento

// {
//     title: 'Schindler"s List',
//     year: 1993,
//     director: 'Steven Spielberg',
//     duration: '3h 15min',
//     genre: ['Biography', 'Drama', 'History'],
//     score: 8.9,
//   },

// O Metodo sort é inplace, ou seja ele altera o array original, caso não queremos alterar o original podemos criar um copia do array

// copia de array
// const copyArray = movies // não copia o array apenas aponta a variavel para o mesmo lugar da atribuida

const copyArray = movies.map((movie) => movie) // copia com .map
const copyArray2 = [...movies]

const moviesOrderByYear = [...movies].sort((a, b) => b.year - a.year)

console.log(moviesOrderByYear)

// Ordenar os filmes por ordem alfabetica
const moviesOrderByName = [...movies].sort((a, b) => {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1
  }
  return 0
})

// Ternary operator
// codição ? retorno se true : retorno se false
const moviesOrderByName2 = [...movies].sort((a, b) =>
  a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
)

console.log(moviesOrderByName2)
