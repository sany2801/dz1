// const mumber0Films = +prompt('Сколько фильмов вы уже посмотрели', '');
// const personalMoviEDB = {
//     count: mumber0Films,
//     movies: {},
//     actors: {},
//     general: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++){
//     const a = prompt('Один из посдедних просмотренных филбмов', ''),
//           b = prompt('На сколько его оцените', '');
//     if (a != null && b != null && a != '' && b !== '' && a.length < 50){
//         personalMoviEDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('ERROR');
//         i--;
//     }
// }
if (personalMoviEDB.count < 10){
    console.log('Мало фильмов');
}   else if (personalMoviEDB.count >= 10 && personalMoviEDB.count < 30) {
    console.log('клисический');
}   else if (personalMoviEDB.count >= 30){
        console.log('вЫ КИНОМАН')
    } else {
        console.log('Ошибка');
}
// console.log(personalMoviEDB);
// *****************************************************
                            // ФУНКЦИИ

// function showFirstMessege() {
//     console.log('Helo word');
// }
// showFirstMessege();

function showFirstMessege(text) {
    console.log(text);
    let num = 20;
}
showFirstMessege('Hello Word!');
