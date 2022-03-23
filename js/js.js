
'use strict';

const numberOfFilms = +prompt('сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?'),
      b = +prompt('Какая его оценка?'),
      c = prompt('Один из последних просмотренных фильмов?'),
      d = +prompt('Какая его оценка?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);