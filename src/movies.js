// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){
    let directorsOnlyArray = arr.map((eachMovie)=>{
    return eachMovie.director;
    })
    return directorsOnlyArray;
  }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    let spielbergMovies = arr.filter((eachDirector)=>{
      return eachDirector.director === "Steven Spielberg"
    })
    let spielbergDramas = spielbergMovies.filter((eachMovie)=>{
      return eachMovie.genre.includes("Drama")
    })  
  return spielbergDramas.length;
  }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    let sumOfRatings = arr.reduce((currentRunningCalculation, eachRating)=>{
      return currentRunningCalculation += (eachRating.rate || 0)
    },0)
    return Math.round(sumOfRatings / arr.length * 100)/100 || 0
  };
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    let movieDramas = arr.filter((eachMovie)=>{
      return eachMovie.genre.includes("Drama") || 0
    })
    let sumOfDramaRatings = movieDramas.reduce((currentRunningCalculation, eachRating)=>{
      return currentRunningCalculation += eachRating.rate
    },0)
    return Math.round(sumOfDramaRatings / movieDramas.length * 100)/100 || 0
  };
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    let unsortedArray = arr;
    unsortedArray.sort((a,b)=>{
      if(a.year < b.year){
        return -1
      } else if(b.year < a.year){
        return 1
      } else if(b.year === a.year){
          if(a.title < b.title){
            return -1
          } else {
            return 1
          } 
      } else {
        return 0;
      }
    })
    return unsortedArray 
  };
 
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    let movieTitles = arr.map((eachMovie)=>{
    return eachMovie.title;
    })  
    return movieTitles.sort().slice(0,20)
  };
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
