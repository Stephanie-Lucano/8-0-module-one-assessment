/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  // if the inputted movies array is empty return []
  if (movies.length === 0) {
    return []
  }
  
  // otherwise
  let allMovies = []
  // loop through the array of objects using a for of loop
  for (const movie of movies) {
    // push the movie title in allMovies 
    allMovies.push(movie.title)
  }
  return allMovies
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  // if the inputted `movies` array is empty, return `0`
  if (movies.length === 0) {
    return 0
  }

  // otherwise return the highest metascore in movies [objects]
  let highestMetascore = 0
  // loop through the array of objects using a for of loop
  for (const movie of movies) {
    // compare number to a number
    if (Number(movie.metascore) > highestMetascore) {
      // reassign the variable with the highest score
      highestMetascore = Number(movie.metascore)
    }
  }
  return highestMetascore 
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  // if the inputted `movies` array is empty, return `0`
  if (movies.length === 0) {
    return 0
  }

  // otherwise get the average IMDB rating across all movies
  let averageIMBD = 0
  // loop through the array of objects using a for of loop
  for (const movie of movies) {
    // add a number to the averageIMBD 
    averageIMBD += Number(movie.imdbRating)
  }
  // divide by the length of movies
  return averageIMBD/movies.length
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  // If the inputted `movies` array is empty, return `{}`
  let moviesRated = {}

  // loop through array of object with for of loop
  for (const movie of movies) {
    // if the key movie rated is not in the movieRated object
    if (!moviesRated[movie.rated]) {
      // create a key value pair in movieRated where key: rated and value: 1
      moviesRated[movie.rated] = 1
      // otherwise  
    } else {
      // make the value of the key go up
      moviesRated[movie.rated]++
    }
  }
  return moviesRated
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */

function findById(movies, id) {
  // If the inputted `movies` array is empty return `null`.
  if (movies.length === 0) {
    return null
  } 

  // if the ID does not match any movie, return `null`
  let movieID = null
  // loop through array of objects using a for of loop
  for (const movie of movies) {
    // if the ID does match 
    if (movie.imdbID === id) {
      // reassign movieID to that partciular movie object
      movieID = movie
    }
  }
  return movieID
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function formatted (genre) {
  return genre[0].toUpperCase() + genre.slice(1).toLowerCase()
}

function filterByGenre(movies, genre) {
  // if the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`
  if (movies.length === 0) {
    return []
  }
  
  let movieGenre = []
  for (const movie of movies) {
    // lets standardize the format of genre to have the first char w/a capital letter + everything else lowercase cased w/a helper function
    // if the genre is included in movie.genre string
    if (movie.genre.includes(formatted(genre))) {
      movieGenre.push(movie)
    }
  }
  return movieGenre
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function formatYear (released) {
  const stringToArr = released.split(' ')
  // take the last string in the arr which is the year && turn the string to a number
  return Number(stringToArr[stringToArr.length -1])
}

function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let moviesReleasedBy = []

  for (const movie of movies) {
    //  compare only the year it was released and turn it into a number so I can compare it to other movies released with a helper funct
    if (formatYear(movie.released) <= year) {
      // push the movie object to `moviesReleasedBy`
      moviesReleasedBy.push(movie)
    }
  }

  return moviesReleasedBy
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function formatMoney (money) {
  let arrOfMoney = []
  for (let i = 1; i < money.length; i++) {
    if (money[i].includes(',')) {
      continue
    } else {
      arrOfMoney.push(money[i]);
    }
  }
  return Number(arrOfMoney.join(''))
}

formatMoney("$28,946,127"); //> 28946127

function getBiggestBoxOfficeMovie(movies) {
  if (movies.length === 0) {
    return null
  }

  // create helper function to help you get the movie that made the most money at the box office
  let mostMoney = 0
  let nameOfMovie = ''

  for (const movie of movies) {
    // compare a number to a number
    if (formatMoney(movie.boxOffice) > mostMoney) {
      mostMoney = formatMoney(movie.boxOffice)
      nameOfMovie = movie.title
    }
  }

  return nameOfMovie
}
getBiggestBoxOfficeMovie(exampleMovies)

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
