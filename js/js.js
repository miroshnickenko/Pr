
'use strict';

let numberOfFilms;

function start (){

    numberOfFilms = +prompt('сколько фильмов Вы уже посмотрели?', '');

    while ( numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null ){
        numberOfFilms = +prompt('сколько фильмов Вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?'),
//       b = +prompt('Какая его оценка?'),
//       c = prompt('Один из последних просмотренных фильмов?'),
//       d = +prompt('Какая его оценка?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function writeFilms (){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?'),
              b = prompt('Оцените этот фильм?');
        
    
        if ( a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done!');
        } else {
            console.log ('Требуется ввести еще раз');
            i--;
        }
    }
}

// writeFilms();


function showCommentByFilms (){
    if ( personalMovieDB.count < 10){
        console.log ('Вы смотрите мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log ('Вы классический зритель');
    } else if (personalMovieDB.count >= 30 && personalMovieDB.count <= 100){
        console.log ('Да Вы киноман!');
    } else {
        console.log ('Error');
    }
}

// showCommentByFilms ();


function showMyDB (hidden){

    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <=3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} ?`);
    }
}

writeYourGenres ();


const options = {
    name: 'test',

};

// delete options.name;

console.log(options);


let arr = [1, 2, 344, 44, 442, 4224];

// arr.forEach(function(item, i, arr){
//     console.log(`индекс ${i} содержит значение ${item} в массиве ${arr}`);

// });

arr.filter();


const object = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    
};


console.log(object); 

// for ( let key in object) {
//     console.log(`Это ключ ${key}`);
// }

// for ( let key in object) {
//     console.log(`Это значение ключа ${object[key]}`);
// }

for ( let key in object ) {
    if (typeof(object[key]) === 'object'){
        for ( let i in object[key]){
            console.log(`Свойство ${i} имеет значение ${object[key][i]}`); 
        }
    } else{
        console.log(`Свойство ${key} имеет значение ${object[key]}`);
    }
}

// for ( let key in object ) {
//     if (typeof(object[key]) !== 'object') {
//         console.log(`Свойство ${key} имеет значение ${object[key]}`);
        
//     } else{
//         for ( let i in object[key]){
//             console.log(`Свойство ${i} имеет значение ${object[key][i]}`); 
//         }
//     }
// }