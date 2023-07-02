


// const arr = [12, 5, -43, 1, 54, -32, 23];

// for (let i = 0; i < arr.length; i++) {
    
    
//     if (arr[i] >= 0) {

//         console.log(arr[i]);

//     }
      
//   }


  //фунциии можно присваивать в переменную

//   function func(){
//     console.log("Hello");
//   }

//   function handler (callback) {
//     for (let i = 0; i <10; i++){
//         callback();
//     }
//   }

//   handler(func)


//   setInterval(func, 100);  // 100 милисекунд



//   let a = func;
//   a();




// создайте функцию, которая получает в качестве первого аргумента массив
// а в качестве второго функцию, которую нужно вызвать с каждым элементом массива

// const arr = [12, 5, -43, 1, 54, -32, 23];

// function handler (arr, func){
//     for (let i = 0; i < arr.length; i++){
//     func(arr[i]);
//     }
// }


// function power (arg) {
//     console.log(arg ** 2);
// }

// handler (arr, console.log)


// function func (a, b){                               // расписываем, что такое второй параметр, и что он должен делать
//     for (let i = 0; i < arr.length; i++){
//         b(a[i]);
//     }
// }


// handler (arr, power)


// arr.forEach(console.log);
// arr.forEach(power);


// используя метод forEach вывести в консоль только положительные числа

// function plus () {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > 0 ) {
//             console.log(arr[i]);
//         }
//         }
// }


// function plus (arg) {    //function declaration
// if  (arg > 0 ) {
//         console.log(arg);
//         }
//     }

// arr.forEach(plus)

//_________________________безыянные функции



// const handler = function   // function expression


// const arr = [12, 5, -43, 1, 54, -32, 23];

// arr.forEach(function(arg){
//     if (arg >= 0) {
//         console.log(arg);
//     }
// })


// вывести в консоль все числа из массива
// если число отрицательное, нужно вывести положительный эквивалент этого числа (-5 -> 5)

// arr.forEach ( function(arg){
//     if (arg < 0 ){
//         let a = arg * (-1)
//         console.log(a);
//     }
//     else {
//         console.log(arg);
//     }
// })


// arr.forEach ( function(arg){
//     if (arg < 0 ){
//         console.log(-arg);
//     }
//     else {
//         console.log(arg);
//     }
// })


// function mult (a,b) {
//     console.log(a * b);
// }

// mult (12, 4)





// arr.forEach(function (arg){
//     console.log(arg);
// })

// function handler(arr, func){
//     for (let i = 0; i < arr.length; i++){
//         func(arr[i]);
//     }
// }
// handler(arr, console.log);


// const products = [
//     {id: 1, title: 'велосипед', price: 1200},
//     {id: 2, title: 'ролики', price: 300},
//     {id: 3, title: 'самокат', price: 450},
//     {id: 4, title: 'лыжи', price: 1100}
// ];

// используя обычный цикл вывести только наименования товаров
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i].title);
// }



// products.forEach(function(arg){
//     console.log(arg.title);
// })


// products.forEach(function(item){
//     if (item.price > 1000) {
//         console.log(item.price);
//     }
// })


//__________________________________________________________________________

// map формирует новый массив, из того, что возвращает фукнция

// const result = products.map(function (item){
//     return item.title
// })


// console.log(result)




// используя map на основе массива с товарами сформировать массив из объектов
// которые состоят из свойств title, price

// const result = products.map(function (item){
  
//     return {
//         title: item.title,
//         price: item.price
//     }
// })
// console.log(result);



// const obj = {
//     a: 12,
//     b: 43,
//     c: 76
// };

// const a = obj.a
// const b = obj.b
// const c = obj.c

// const {a, b, c } = obj;   //деструктуризация

// console.log(a, b, c);








// function func({a, b, c}){   // мы уже привязаны к свойствам объекта
//     console.log(a + b + c);
// }

// func (obj);


// const products = [
//     {id: 1, title: 'велосипед', price: 1200},
//     {id: 2, title: 'ролики', price: 300},
//     {id: 3, title: 'самокат', price: 450},
//     {id: 4, title: 'лыжи', price: 1100}
// ];

// const result = products.map(function (item){
  
//     return {
//         title: item.title,
//         price: item.price
//     }
// })
// console.log(result);



// const obj = {
//     title: products.title,
//     price: products.price
// }

// function func({title, price}) {
//     console.log();
// }



// const result = products.map(function({title, price}){
//     return {
//         title: title,
//         price: price
//     }
// })

// console.log(result);


//формируем объект

// const a = 12;

// const b = 22;

// const obj = {
//     a: a,
//     b: b
// }

//использовать сокращенный синтаксис для формирования объекта

// const result = products.map(function({title, price}){
//     return {
//         title: title,
//         price: price
//     }
// })


// const result3 = products.map(function({title, price}){
//     return {
//         title, price}
//     })

//     console.log(result3);






// const c = 12;

// const d = 22;



// const obj1 = {
//     a: a,
//     b: b 
// }

// const obj2 = {
//     a: a,
//     b: b 
// }

// const obj3 = {a,b};

// Простые методы массивов:
  // - мутируют исходный массив
  // - не принимают колбэк-функцию

//   const numbers = [1, 2, 3, 4, 5, 6];




//ПРАКТИКА_______________________________________________________________________________________________


//   numbers.push(7); // добавляет в конец массива переданное значение
//   numbers.unshift(0); // добавляет в начало массива переданное значение
//   numbers.pop(); // удаляет последний элемент из массива
//   numbers.shift(); // удаляет первый элемент из массива
  
//   console.log(numbers);


  // Сложные методы:
    // - принимают колбэк в качестве аргумента
    // - не мутируют исходный массив (кроме sort())

//     const numbers2 = [23, 11, -9, 57, -3, 64];
// // Сформировать новый массив, в который попадут числа больше 0

// const positive_numbers = [];
// numbers2.forEach(function (el) {
//     if(el > 0){
//         positive_numbers.push (el)
//     }
// });

// // console.log(numbers2);
// console.log(positive_numbers);



// arr.forEach(function (arg){
//     console.log(arg);
// })




// const positive_numbers2 = [];
// numbers2.forEach(el => {
//     if(el > 0){
//         positive_numbers2.push (el)
//     }
// });

// // console.log(numbers2);
// console.log(positive_numbers2);

// Callback (функция обратного вызова) - функция, переданная в другую функцию в качестве аргумента    (методы это функции)
// Функция высшего порядка - функуия, которая принимает другую функцию в качестве аргумента

// Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums умноженные на 2

const nums = [1, 2, 3, 4, 5];

const double_nums = [];

function double(){
for (let i = 0; i < nums.length; i++){
    double_nums.push(nums[i] * 2)
    
}}
console.log(double_nums);
double();
console.log(double_nums);


// Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums умноженные на 2

const doubled_nums = [];
function doubleNums(){
  for(let i = 0; i < nums.length; i++){
    doubled_nums.push(nums[i] * 2)
  }
}

// Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums деленные на 2

const divided_nums = [];
function doubleNums(){
  for(let i = 0; i < nums.length; i++){
    divided_nums.push(nums[i] / 2)
  }
}

// Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums возведенные в степень 2

const powered_nums = [];
function doubleNums(){
  for(let i = 0; i < nums.length; i++){
    powered_nums.push(nums[i] ** 2)
  }
}




// Универсальная функция, принимающая колбэк
function change_nums(array, callback) {
    for(let i = 0; i < nums.length; i++){
      array.push(callback(nums[i]))
    }
  }
  
  const div_nums = [];
  const pow_nums = [];
  
  function divNums(num){
    return num / 2
  }
  
  function powNums(num){
    return num ** 2
  }
  
  change_nums(div_nums, divNums);
  change_nums(pow_nums, powNums);
  
  console.log(div_nums);
  console.log(pow_nums);




  const users = [
  {
    id: 1,
    name: "Halyna",
    age: 12
  }, 
  {
    id: 1,
    name: "Anton",
    age: 62
  },
  {
    id: 1,
    name: "Olha",
    age: 42
  },
  ]


  // const result3 = products.map(function({title, price}){
//     return {
//         title, price}
//     })

//     console.log(result3);



 // сформировать новый массив с продуктами , название оторых длиннее 5 символов 
