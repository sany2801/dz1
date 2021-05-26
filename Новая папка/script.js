// let arr = [1, 2, 4]
// arr.reduce(function(accum, currentValue){
//     console.log('accum', accum)
//     console.log('currentValue', currentValue)
//     return accum + currentValue

// }, )
//////Конструктор функций

// const Bill = {
//     name: 'Bill',
//     age: 20
// }
// const John = {
//     name: 'John',
//     age: 44
// }

// function Animal(name, voice){
//     this.name = name;
//     this.voice = voice;
//     this.getVoice = function(){
//         console.log(this.voice);
//     }
// }

// let cat = new Animal('Cleo', 'Meaw');
// let dog = new Animal('Sharif', 'Gav');

// cat.getVoice()


// function Card(from, to){
//     this.from = from;
//     this.to = to;
//     this.show = function(){
//         console.log('растояние 40 км')
//     }
// }
// let town = new Card('Минск', 'Гродно');
// town.show()

const factorialOf = integer => {
    let factorial = 1;
    for (let i = 1; i <= integer; i++) {
        factorial *= i;
    }
    return factorial;
}
factorialOf(5)