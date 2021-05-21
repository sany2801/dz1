// let str = 'hello';
// str.slice(0, 2);

// let obj = new Object();
// let object = {

// };

// const obj = {
//     color: 'red',
//     width: 20,
//     'current height': 30
// };

// obj.color //red
// obj['current height'] //30
// delete obj.width

// const obj = 's'
// const obj = { [size]: '1'};
// const obj = {
//     color: 'red',
//     wi
// }
// console.log()
// console.log('lol' in ob);

// let object = {
//     color: 'red',
//     width: 20,
//     height: 30
// };
// for (let key in object) {
//     console.log(key);
    // console.log(object[key]);

// const student = {
//   firstname: 'Polina',
//   lastname: 'Ivanova',
//   group: 'FE-57',
// };
// const { firstname: last, lastname, group } = student;
// console.log(last) // Polina 
// console.log(lastname) // Ivanova 
// console.log(group) //FE-57


// let array = new Array();
// let art = [1, 20, 35, 48, { name: 1, age: 2 }, 'str', true];
// console.log(art[4, ]);
// let arr = Array.of(2);

// const numers = [1, 2, 33];
// for (let i = 0; i < numers.length; i++) {
//   console.log(numers[i]);
// }
// for (let number of numers) {
//   console.log(number);
// }
const stay = [1, 2, 5, 6];
stay.forEach(function(number) {
  console.log(number);
});
const stay1 = [5, 2, 5, 6];
let result = stay1.map(function(number) {
  console.log(number ** 2 + '!');
  return (result)
})
// }

// let user = {
//     name: 'Andrew',
//     age: 20,
//     email: 'emaile@xmpl'
// };
// for (let key in user) {
//     console.log((key) +': '+ (user[key]));
// }

let user = {
    name : 'john'
}
let admin = user;
admin.name = 'Andrew';
console.log(user.name)

let cat = {
    name: 'Vwefds',
    getVoice: function(){
        console.log('mmymymym mymymy')
    }
}
cat.getVoice()


// let cat = {
//     name = 'FVSVSD'
// getName:() {
//     console.log(`My name is....' ${this.name}`);
// }
// }
// cat.getVoice()
