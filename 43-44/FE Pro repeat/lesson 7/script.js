// const numbers = [12, 435, 1, 32, 545, 21, 555];
// const nums = []

// используя метож forEach вывести числа, кот. меньше 100

// numbers.forEach(function(el){
//    if (el < 100){
//     console.log(el);
//    }

// }
// )

//вывести тольо четные числа

// numbers.forEach(function(el){
//     if (el % 2 == 0){
//         console.log(el);
//     }
// })

// используя метод map сформируйте новый массив на основе массива numbers 
// если число в массиве numbers меньше 100 то к ему нужно прибавить 100

// const new_arr = numbers.map(function(el){
//     if (el < 100) {
//        return el + 100
//     }
//     else {
//         return el
//     }
// })

// console.log(new_arr);

// const new_arr2 = numbers.map(function(el){
//     if (el < 100) {
//         el += 100 // el = el + 100
//     }

//         return el

// })

// console.log(new_arr2);

// const new_arr3 = numbers.map(function(el) {
//     return el < 100 ? el + 100 : el; //если эл меньше 100, то эл прибавить 100 иначе просто эл
//   });
  
//   console.log(new_arr3);




  const users = [
    {
        id: 1,
        name: 'Анатолий',
        lastname: 'Ушанов',
        age: 30
    },
    {
        id: 2,
        name: 'Максим',
        lastname: 'Грибов',
        age: 28
    },
    {
        id: 3,
        name: 'Антон',
        lastname: 'Куликов',
        age: 27
    },
    {
        id: 4,
        name: 'Юрий',
        lastname: 'Митрофанов',
        age: 45
    }
];


//используя етод map сфорировать массив из имен пользователей

// const name_users = users.map(function(el){
//     return el.name
// })

// console.log(name_users);


// деструктуризация 
// const name_users = users.map(function({name}){
//     return name
// })

// console.log(name_users);

// const numbers = [12, 435, 1, 32, 545, 21, 555];

// const result = numbers.filter(function(item){
//     if (item % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// })

// console.log(result);

// const result = numbers.filter(function(item){
//    return item % 2 === 0 
   
// })

// console.log(result);

//сформировать массив, который состоит из объектов с данными пользователей, которые младше 30

// const age = users.filter(function({age}){
//     return age < 30
// })

// console.log(age);

// const result_1 = age.map(function(el){
//     return {
//         name: el.name,
//         lastname: el.lastname
//     }
// })


// console.log(result_1);

//поменять структуру, чтобы осталась только имя и фамилия

// const result_1 = age.map(function({name, lastname}){
//     return {
//         name,
//         lastname
//     }
// })


// console.log(result_1);

//способ сразу с двумя методами

// const youth5 = users
//     .filter(function({age}){
//     return age < 30
// }) 
//     .map(function({name, lastname}){
//     return {name, lastname}
// })

// console.log(youth5);

// const numbers = [45, 2, 6, 3, 435, 76, 58];

// const result2 = numbers.reduce(function(acc, item){
//     return acc + item
// }, 0)

// console.log(result2);

// (0, 45) -> 45
// (45, 2) -> 47
// (0, 45) -> 45
// (0, 45) -> 45

// используя reduce найти наименьшее значение в массиве numbers
//функция может возвращать только одно значение

// const result3 = numbers.reduce(function(acc, item){
//     if (item < acc) {
//         return item
//     } else {
//         return acc
//     }
// })
// console.log(result3);

// (0, 45) -> 45
// 45, 2 -> 2
// 2, 6 -> 2
// 2, 3 -> 2

// const result4 = numbers.reduce(function(acc, item){
//     return acc * item
// })

// console.log(result4);



//найти сумму amount

const data = [
    {id: 1, amount: 12000},
    {id: 2, amount: 13000},
    {id: 3, amount: 14000},
    {id: 4, amount: 15000},
    {id: 5, amount: 16000}
];

const num = data.reduce(function(acc, item){
    return acc + item.amount
},0)
console.log(num);


//потому что должна быть одинаковая струтура
// (0,  {id: 1, amount: 12000}) -> 12000
// (12000,  {id: 2, amount: 13000}) -> 25000
// (25000,  {id: 3, amount: 14000}) -> 25000


// const result = data.reduce(function(acc,item){
//     return acc.amount + item.amount
// });

// console.log(result);

// ________________без initial value
// ({id: 1, amount: 12000} , {id: 2, amount: 13000}) -> 25000
// (25000,  {id: 3, amount: 14000}) -> undefined + 14000 -> NaN