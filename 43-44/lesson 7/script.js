// const numbers = [12, 435, 1, 32, 545, 21, 555];


// numbers.forEach (function(arg){
// if (arg < 100) {
//     console.log(arg);
// }
// })
// numbers.forEach (function(arg){
//     if (arg % 2 == 0) {
//         console.log(arg);
//     }
//     })




// используя метод map сформируйте новый массив на основе массива numbers 
// если число в массиве numbers меньше 100 то к ему нужно прибавить 100

// [112, 435, 101, 132, 545, 121, 555]




// const result = numbers.map (function(item){
//   if (item < 100) {
//            return item + 100;
//         }

//     }
// ) 
// console.log(result);

// const results = numbers.map (function(item){
//     if (item < 100) {
//              item += 100;
//           }
//           return item
//       }
//   ) 
//   console.log(results);



// let a = 12;
// // let a;
// a = 12 + 10;
// console.log(a);

// const users = [
//     {
//         id: 1,
//         name: 'Анатолий',
//         lastname: 'Ушанов',
//         age: 30
//     },
//     {
//         id: 2,
//         name: 'Максим',
//         lastname: 'Грибов',
//         age: 28
//     },
//     {
//         id: 3,
//         name: 'Антон',
//         lastname: 'Куликов',
//         age: 27
//     },
//     {
//         id: 4,
//         name: 'Юрий',
//         lastname: 'Митрофанов',
//         age: 45
//     }
// ];

//формируем так же объект
// const userName = users.map(function(arg){
//     return {
//         names: arg.name
//     }
// })
// console.log(userName);




//вытаскиваем из объектов

// const userNames = users.map(function(arg){
//     return arg.name
    
// })
// console.log(userNames);

// const result = users.map(function({name}){
//     return name
// })


// const numbers = [12, 435, 1, 32, 545, 21, 555];

// const result = numbers.filter(function(item){
//     if (item % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// })

// console.log(result);

// const results = numbers.filter(function(item){
//     return item % 2 === 0
// })

// console.log(results);


//сформировать массив, который состоит из объектов с данными пользователей, которые младше 30

// const users = [
//     {
//         id: 1,
//         name: 'Анатолий',
//         lastname: 'Ушанов',
//         age: 30
//     },
//     {
//         id: 2,
//         name: 'Максим',
//         lastname: 'Грибов',
//         age: 28
//     },
//     {
//         id: 3,
//         name: 'Антон',
//         lastname: 'Куликов',
//         age: 27
//     },
//     {
//         id: 4,
//         name: 'Юрий',
//         lastname: 'Митрофанов',
//         age: 45
//     }
// ];


// const youth = users.filter(function (item) {
//     if  (item.age < 30) {
//         return true
//     } else {
//         return false 
//     }
// })
// console.log(youth);

//_____________________________второй способ

// const youth2 = users.filter(function({age}){
//     return age < 30
// }) 


//поменять структуру, чтобы осталась только имя и фамилия

// const youth3 = youth2.map(function(item){
//     return {
//         name: item.name,
//         lastname: item.lastname
//     }
// })

// console.log(youth3);


//деструктуризация

// const youth4 = youth2.map(function({name, lastname}){
//     return { name, lastname}
// })

// console.log(youth4);


//способ сразу с двумя методами

// const youth5 = users
//     .filter(function({age}){
//     return age < 30
// }) 
//     .map(function({name, lastname}){
//     return {name, lastname}
// })

// console.log(youth5);



const numbers = [45, 2, 6, 3];
// const result = numbers.reduce(function(acc, item){
//     return acc + item
// }, 0)
// console.log(result);


// (0, 45) -> 45
// (45, 2) -> 47
// (0, 45) -> 45
// (0, 45) -> 45

// используя reduce найти наименьшее значение в массиве numbers
//функция может возвращать только одно значение

// const result = numbers.reduce(function(acc, item){
//     if (item < acc) {

//     return item }

//     else {
//         return acc 
//     }

// }, )
// console.log(result);

// (45, 6) -> 6
// (6, 3) -> 3
// (3, 2) -> 2


// используя reduce найти произведение всех значений массива

// const result = numbers.reduce(function(acc, item){

//     return item * acc 

// })
// console.log(result);



// найти сумму amount



// const data = [
//     {id: 1, amount: 12000},
//     {id: 2, amount: 13000},
//     {id: 3, amount: 14000},
//     {id: 4, amount: 15000},
//     {id: 5, amount: 16000}
// ];


// const result = data.reduce(function(acc,item){
//         return acc + item.amount
// }, 0);

// console.log(result);

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



//потому что должна быть одинаковая струтура
// (0,  {id: 1, amount: 12000}) -> 12000
// (12000,  {id: 1, amount: 13000}) -> 25000

 // сформировать новый массив с продуктами , название оторых длиннее 5 символов 
//  const products = [
//     'Apple', 
//     'Banana', 
//     'lime', 
//      'lemon', 
//      'Pear', 
//      'Pineapple',
//     ];
    
    // const filteredProducts = products.filter(function(arg) {
     
    //     return arg.length >= 5
      
    // });
    
    // console.log(filteredProducts);

    // const youth = users.filter(function (item) {
//     if  (item.age < 30) {
//         return true
//     } else {
//         return false 
//     }
// })
// console.log(youth);


// const filteredProducts = products.filter(function(arg) {

//      if (arg[0] === "l") {
//     return arg 
//      }
  
// });

// console.log(filteredProducts);

// const products = [
//     'Apple', 
//     'Banana', 
//     'lime', 
//      'lemon', 
//      'Pear', 
//      'Pineapple',
//     ];

// const filteredProducts = products.map(function(arg) {


//    return arg.toUpperCase() 
    
 
// });

// console.log(filteredProducts);

// 4. Сформировать новый массив с продуктами, названия продуктов должны начинаться с большой буквы

// const products_up = products.map(function(el) {
//     return el[0].toUpperCase() 
//   });




//   console.log(products_up);




  // const users = [
//     {
//         id: 1,
//         name: 'Анатолий',
//         lastname: 'Ушанов',
//         age: 30
//     },
//     {
//         id: 2,
//         name: 'Максим',
//         lastname: 'Грибов',
//         age: 28
//     },
//     {
//         id: 3,
//         name: 'Антон',
//         lastname: 'Куликов',
//         age: 27
//     },
//     {
//         id: 4,
//         name: 'Юрий',
//         lastname: 'Митрофанов',
//         age: 45
//     }
// ];



//вытаскиваем из объектов

// const userNames = users.map(function(arg){
//     return arg.name
    
// })
// console.log(userNames);

// const result = users.map(function({name}){
//     return name
// })


// const numbers = [12, 435, 1, 32, 545, 21, 555];

// const result = numbers.filter(function(item){
//     if (item % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// })

// console.log(result);

// const results = numbers.filter(function(item){
//     return item % 2 === 0
// })

// console.log(results);


//сформировать массив, который состоит из объектов с данными пользователей, которые младше 30

// const users = [
//     {
//         id: 1,
//         name: 'Анатолий',
//         lastname: 'Ушанов',
//         age: 30
//     },
//     {
//         id: 2,
//         name: 'Максим',
//         lastname: 'Грибов',
//         age: 28
//     },
//     {
//         id: 3,
//         name: 'Антон',
//         lastname: 'Куликов',
//         age: 27
//     },
//     {
//         id: 4,
//         name: 'Юрий',
//         lastname: 'Митрофанов',
//         age: 45
//     }
// ];


// const youth = users.filter(function (item) {
//     if  (item.age < 30) {
//         return true
//     } else {
//         return false 
//     }
// })
// console.log(youth);

//_____________________________второй способ

// const youth2 = users.filter(function({age}){
//     return age < 30
// }) 


//поменять структуру, чтобы осталась только имя и фамилия

// const youth3 = youth2.map(function(item){
//     return {
//         name: item.name,
//         lastname: item.lastname
//     }
// })

// console.log(youth3);


//деструктуризация

// const youth4 = youth2.map(function({name, lastname}){
//     return { name, lastname}
// })

// console.log(youth4);

  // Дан массив с пользователями

  const users = [
    {
      id: 1,
      name: 'Anton',
      age: 44,
      country: 'Germany'
    },
    {
      id: 2,
      name: 'Irina',
      age: 23,
      country: 'Spain'
    },
    {
      id: 3,
      name: 'Olga',
      age: 14,
      country: 'Poland'
    },
    {
      id: 4,
      name: 'oleg',
      age: 23,
      country: 'France'
    }
  ]

  
// 5. Сформировать новый массив с пользователями, чье имя начинается на букву O (регистр может быть любым)

// const o_users = users.filter(function(el){
//     return el.name[0] === 'O' || el.name[0] === 'o'
//   });
  
//   const o_users1 = users.filter(function(el){
//     return el.name[0].toUpperCase() === 'O'
//   });


// 6. Сформировать новый массив с информацией о пользователях в формате: 'ИМЯ, ВОЗРАСТ (СТРАНА)'

// const newArr = users.map(function(el){
//     return `${el.name}, ${el.age}, ${el.country}`
// })
// console.log(newArr);




const newArr2 = users

    .filter(function(el){
        return el.age > 18
    })
    .map(function(el){
  
    return `${el.name}, ${el.age}, ${el.country}`
})

    
console.log(newArr2);


  // 7. Сформировать новый массив с информацией о совершеннолетних пользователях в формате: 'ИМЯ, ВОЗРАСТ (СТРАНА)'
// ['Anton, 44 (Germany)', 'Irina, 23 (Spain)', ...]




// const tutors_container = document.querySelector('.tutors_container');

// tutors.forEach(function({ id, fullname, photo, position }) {
//     const cardElem = document.createElement('div');
//     const avatarElem = document.createElement('div');
//     const nameElem = document.createElement('p');
//     const positionElem = document.createElement('p');
//     const btnElem = document.createElement('button');

//     const { title } = position;

//     nameElem.innerText = fullname;
//     positionElem.innerText = title;
//     btnElem.innerText = 'Биография';

//     avatarElem.style.backgroundImage = `url(${photo})`;

//     // if(fullname[0] === 'И'){
//     //   cardElem.style.backgroundColor = 'red';
//     // }

//     cardElem.append(avatarElem, nameElem, positionElem, btnElem);
//     tutors_container.append(cardElem);
// })
// // Если человек входит в управляющее звено, сделать ему цвет заднего фона зеленый, а если нет - то светло-розовый
// if(status === 'Manager'){
//   cardElem.style.backgroundColor = 'lightgreen'
// } else {
//   cardElem.style.backgroundColor = 'lightpink'
// }
// cardElem.style.backgroundColor = status === 'Manager' ? 'lightgreen' : 'lightpink';

// tutors.forEach(function({ id, fullname, photo, position }) {
//   const cardElem = document.createElement('div');
//   const avatarElem = document.createElement('div');
//   const nameElem = document.createElement('p');
//   const positionElem = document.createElement('p');
//   const btnElem = document.createElement('button');

//   const { title, status } = position;

//   nameElem.innerText = fullname;
//   positionElem.innerText = title;
//   btnElem.innerText = 'Биография';

//   avatarElem.style.backgroundImage = `url(${photo})`;

//   // if(status === 'Manager'){
//   //   cardElem.style.backgroundColor = 'lightgreen'
//   // } else {
//   //   cardElem.style.backgroundColor = 'lightpink'
//   // }

//   cardElem.style.backgroundColor = status === 'Manager' ? 'lightgreen' : 'lightpink';

//   cardElem.append(avatarElem, nameElem, positionElem, btnElem);
//   tutors_container.append(cardElem);
// });