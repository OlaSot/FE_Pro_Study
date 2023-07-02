// Дан массив

const products = ['apple', 'orange', 'pineapple', 'lemon', 'lime', 'kiwi'];

// 1. Сформировать новый массив с продуктами, название которых длиннее 5 символов

// const result = products.filter(function(el){
//     return el.length >= 5
// })

// console.log(result);

// const long_products = products.filter(el => el.length >= 5); 

// 2. Сформировать новый массив с продуктами, название которых начинается на букву l

// const result2 = products.filter(function(el){
//     return el[0] === "l"
// })

// console.log(result2);

// 3. Сформировать новый массив с продуктами, названия продуктов должны быть написаны в верхнем регистре
// если требуется ИЗМЕНИТЬ массив, а не отобрать используется map()

// const result3 = products.map(function(el){
//     return el.toUpperCase()
// })

// console.log(result3);

// 4. Сформировать новый массив с продуктами, названия продуктов должны начинаться с большой буквы

// const products_up = products.map(function(el){
//     return el[0].toUpperCase() + el.slice(1) //удаляет одну первую букву, если 2 то, удаляет 2 буквы
// })

// console.log(products_up);

// Дан массив с пользователями

// const users = [
//     {
//       id: 1,
//       name: 'Anton',
//       age: 44,
//       country: 'Germany'
//     },
//     {
//       id: 2,
//       name: 'Irina',
//       age: 23,
//       country: 'Spain'
//     },
//     {
//       id: 3,
//       name: 'Olga',
//       age: 14,
//       country: 'Poland'
//     },
//     {
//       id: 4,
//       name: 'oleg',
//       age: 23,
//       country: 'France'
//     }
//   ]
  
  // 5. Сформировать новый массив с пользователями, чье имя начинается на букву O (регистр может быть любым)

//   const o_users = users.filter(function(el){
//     if (el.name[0] === "o" || el.name[0] === "O"){
//         return el
//     }
//   })


//   console.log(o_users);

//   const o_users = users.filter(function({name}){
//     if (name[0] === "o" || name[0] === "O"){
//         return name
//     } 
//   })


//   console.log(o_users);

// 6. Сформировать новый массив с информацией о пользователях в формате: 'ИМЯ, ВОЗРАСТ (СТРАНА)'
// ['Anton, 44 (Germany)', 'Irina, 23 (Spain)', ...]

// const new_users = users.map(function(el){
//     return `${el.name}, ${el.age}, ${el.country}`
// })
// console.log(new_users);


// //если надо вернуть массив с новыми объектами
// const new_users2 = users.map(function(el){
//     return {
//         name: el.name,
//         age: el.age,
//         country: el.country
//     }
// })
// console.log(new_users2);


// 7. Сформировать новый массив с информацией о совершеннолетних пользователях в формате: 'ИМЯ, ВОЗРАСТ (СТРАНА)'
// ['Anton, 44 (Germany)', 'Irina, 23 (Spain)', ...]

// const adult_users = 
// users
// .filter(function(el){
//   return el.age > 18    
// })
// .map(function(el){
//     return `${el.name}, ${el.age}, ${el.country}`
// })

// console.log(adult_users);

const users = [
  {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
  },

  {
    first_name: 'Olga',
    last_name: 'Petrova',
    age: 12,
    salary: 250
  },

  {
    first_name: 'Irina',
    last_name: 'Alexandrova',
    age: 46,
    salary: 1500
  },

  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 30,
    salary: 760
  }
];


//1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль
// users.forEach((elem) => console.log(elem));

// users.forEach((elem) => console.log(elem))


//2. Получите из всех объектов значения last_name и сформируйте из этих имен массив.

// const newArr = users.map(({last_name}) => last_name)
// console.log(newArr);
// 3. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной.


// const olga = users.filter(({first_name}) => 
// first_name[0] === "O"
// )
// .map(({first_name}) =>
// first_name)
// console.log(olga);
// метод фильтр всегда вохвращает массив  

//можно решить через метод find , он возвращает один элемент(ОБЪЕКТ), который подходит условию 

// const olga1 = users.find(({first_name}) => 
// first_name === "Olga"
// )
// console.log(olga1);

// 4. Сформируйте новый массив без объекта, где first_name == "Irina"

const withoutIrina = users.filter(({first_name}) =>
first_name !== 'Irina'
)




// 5. Добавьте в конец нового массива объект со значениями:
// {
//   first_name: 'Anton',
//   last_name: 'Gribov',
//   age: 36,
//   salary: 1760
// }

withoutIrina.push(
  {
    first_name: 'Anton',
    last_name: 'Gribov',
    age: 36,
    salary: 1760
  }
)
console.log(withoutIrina);




// 6. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']


const adult_users = users.filter(function(el){
  return el.age >= 18
}).map(function({ first_name, last_name, age, salary }){
  return `${first_name} ${last_name} (${age}): ${salary}`
});
