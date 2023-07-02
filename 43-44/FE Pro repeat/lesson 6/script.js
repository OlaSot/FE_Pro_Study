//цикл выводит числа от 0 до 10

// for (let i = 0; i <=10; i++ ) {
//     console.log(i);
// }


// цикл выводит только положительные числа
// const arr = [12, 5, -43, 54, 89, 65, 78]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0){
//         console.log(arr[i]);
//     }
// }

// с функцией одно работать как с обычным значением и передавать ее в переменную, а затем вызывать
// function func(){
//     console.log('hi');
// }

// let a = func

// a()

// колбэком мы назваем функцию которую передаем в другой фунции как аргумент
// function handler(callback) {
//     for (let i = 0; i < 10; i++) {
//         callback()
//     }
    
// }

// handler(func)

// setInterval(func, 100)

const arr = [12, 5, -43, 54, 89, 65, 78]

// создайте функцию, которая получает в качестве первого аргумента массив
// а в качестве второго функцию, еоторую нужно вызвать с каждым элементом массива

// function get(arr, func){
//     for (let i=0; i<arr.lenth; i++){
//         func(arr[i])
//     }
// }

// get(arr, console.log(arr)); 

//идея в том, что создана функция , которая в качестве аргумента получает ассив и то, что нужно сделать с каждыйм элементом этого массива

// function handler(arr, func){
//     for (let i=0; i<arr.length; i++){
//         func(arr[i])
//     }
// }


function power(arg){
    console.log(arg ** 2); //здесь функция уже выводит в консоль полученнное значение
}

// handler(arr, power); 

// Foreach метод

/*Когда мы используем метод forEach, мы передаем ему функцию, которая будет вызываться для каждого элемента массива. Внутри этой функции мы можем написать код, который будет выполняться для каждого элемента массива.*/

/*Метод forEach не создает новый массив, но может изменять исходный массив. Кроме того, он возвращает undefined, то есть никакого значения.*/

// arr.forEach(power)
 
// arr.forEach(function(num){ // это безымянная функция или anonymous function
//     console.log(num ** 2); // ** это возведение в степень
// })

// использую метод forEach вывести в консоль только положительные числа

// function positive(num) { //данный способ называется function declaration
//     if (num > 0){ //здесь идет проверка или число больше нуля или нет
//         console.log(num);
//     };    
// }

// arr.forEach(positive)

// const handler = function(arg){ //такой способ называется function expression когда функцию записываем в переменную
//     if (arg>=0){
//         console.log(arg);
//     }
// }

//вывести в консоль все числа из массива, если число отрицательное, нужно вывести его положительный эквивалент

// arr.forEach(function(arg){
//     if (arg < 0){
//       console.log(-arg);
//     }
//     else {
//         console.log(arg);
//     }
// })

// Унарный оператор - это оператор, который применяется к одному операнду (или выражению) и выполняет над ним определенное действие. Например, в JavaScript есть несколько унарных операторов:

// Оператор отрицания -, который меняет знак числа на противоположный. Например, -5 даст -5.

// Оператор инкремента ++, который увеличивает значение переменной на единицу. Например, если x равно 5, то x++ даст 6.

// Оператор декремента --, который уменьшает значение переменной на единицу. Например, если y равно 10, то y-- даст 9.

// Оператор логического отрицания !, который инвертирует логическое значение выражения. Например, !(2 > 1) даст false.

// Оператор типа typeof, который возвращает строку, указывающую тип операнда. Например, typeof "hello" даст "string".

// Оператор преобразования типов +, который пытается преобразовать операнд в числовой тип. Например, +"10" даст 10.

// Важно отметить, что унарные операторы имеют более высокий приоритет, чем бинарные операторы, то есть они выполняются первыми в выражении. Например, в выражении ++x + y, оператор инкремента ++ будет выполнен сначала, а затем будет выполнена операция сложения +.

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

// тоже самое только через етод foreach

// products.forEach(function(arg){
//     console.log(arg.title);
// })

// products.forEach((arg) => {
//     console.log(arg.title);
// });// через стрелочную функцию

//вывести наименование товаров, которые больше 1000

// products.forEach((arg => {
//     if (arg.price > 1000){
//         console.log(arg);
//     }
// }))

// ______________________________метод map 
// разница в то, что map формирует новый массив из того, что возвращает функция

// const result = products.map(function(item){
//     return item.title
// })

// console.log(result); //вернул новый массив, в котором находятся строки title
// когда функция ничего не возвращает , она возвращает undefined

// используя map на основе массива с товарами сформировать массив из объектов
// которые состоят из свойств title, price

const products = [
    {id: 1, title: 'велосипед', price: 1200},
    {id: 2, title: 'ролики', price: 300},
    {id: 3, title: 'самокат', price: 450},
    {id: 4, title: 'лыжи', price: 1100}
];

const res = products.map(function(item){
    return {
        title: item.title,  // чтобы сформировать объект, всегда должен быть ключ
        price: item.price
    }
})
// console.log(res);

//_____________________деструктуризация

// const obj = {
//     a: 12,
//     b: 43,
//     c: 76
// }
// const {a,b,c} = obj //мы их вытаскиваем, чтобы они стали отдельными переменными

// const a = obj.a
// const b = obj.b
// const c = obj.c

// function func({a, b, c}){   // мы уже привязаны к свойствам объекта
//     console.log(a + b + c);
// }

// func (obj);

// добавить процесс деструктуризации

// const res2 = products.map(function({title, price}){
//     return {
//         itstitle: title,
//         itsprice: price
//     }
// })
// console.log(res2);


// создание объекта

const a = 12
const b = 26

const object = {
    a: a,
    b: b
}
    


// const a = 12
// const b = 26

// const object = {a,b} // создание объекста через короткий синтаксис
// console.log(object);

//использовать сокращенный синтаксис для формирования объекта

const res3 = products.map(function({title, price}){
    return {title, price} //используется если ключ и значения рисвоенные к ним должны быть одинаковыми
})
console.log(res3);