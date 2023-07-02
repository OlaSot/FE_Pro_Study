


const numbers = [12, 4, 32, 5, 4, 2, 65]



// const newArray = numbers.map(function(elem){
//     if (elem < 10) {
//         return elem + 10
//     } else {
//         return elem
//     }
// })
// console.log(newArray);

// используя метод filter сформировать массив из четных чисел

// const evenNums = numbers.filter(function (item) {
//     if (item % 2 == 0) {
//         return item
//     } 
// })

// console.log(evenNums);

//второе решение. метод фильтр форирует новый ассив 

// const result = numbers.filter(function (item) {
 
//     return item % 2 === 0
// })

// console.log(result);


// используя reduce найти сумму всех четных чисел acc это то, что  ()

// const resultSum = numbers.reduce(function(acc, item) {
//     if (item % 2 === 0){ 
//     acc += item
//     }
//         return acc
// },0);

// console.log(resultSum);

// const result2 = numbers.reduce(function(acc, item){
// return acc + (item % 2 === 0 ? item : 0)
// },0);



// console.log(result2);



const products = [
    {id: 1, title: 'велосипед', price: 5000, discount: 12},
    {id: 2, title: 'ролики', price: 1000, discount: 0},
    {id: 3, title: 'самокат', price: 900, discount: 5},
    {id: 4, title: 'лыжи', price: 1200, discount: 0},
    {id: 5, title: 'сноуборд', price: 1500, discount: 10}
]


// const newArr = products.map(function(elem){
//     return elem.title
// })

// console.log(newArr);

//деструктуризация

const newArr2 = products.map(function({title}){
    return title
})


// доработать метод map таким образом, чтобы в итоговом массиве были наименования товаров
// и цена с учетом скидки

// const result = products.map(function(item){
//     return `${item.title}, ${item.price % item.discount }`
// })
// console.log(result);

// const result = products.map(function(item){
//     return {
//         title: item.title,
//         price: item.price - item.price * item.discount / 100
//     }
// })
// console.log(result);


// const result2 = products.map(function({title, price, discount}){
//     return {
//         title,
//         price: price - price * discount / 100
//     }
// })
// console.log(result2);

// доработать script таким образом, чтобы в итоговом массиве были даннные про продукты, которые 
// дешевле 1200 (без скидки)

// const smallPrice = products
//     .filter(function(elem){
//         return elem.price < 1200
//     })


    // .filter(function({price}){
    //     return price < 1200
    // })

//     .map(function({title, price}){
//         return {
//                     title,
//                     price: price 
//                 }
//     })
// console.log(smallPrice);

//_______________________________________LOCAL STORAGE


// localStorage.setItem('testKey', 'testValue');

// const result = localStorage.getItem('counter');

// console.log(result);

// написать скрипт, который увеличивает число 
// на единицу при нажатии накнопку 
// и получившееся значение записывает как значение кнопки




const button = document.querySelector('.btn')
let count = +localStorage.getItem('counter') ?? 0; // если 

// let count = localStorage.getItem('counter');
// if (count === null){
//     count = 0
// }



// count = count === null ?? 0 : count   // синтаксис: условие ? значение при true : значение при false

button.innerText = count; //


button.addEventListener('click', function(){
   count = count + 5;
   button.innerText = count; //меняет содержимое внутри кнопки
   localStorage.setItem('counter', count)
})

// в локал сторэйдж данные всегда в виде строки

//_____________________оператор нулевого слияния
// let count = localStorage.getItem('counter') ?? 0; // если левый апперанд нал или андефайнд (отрабатывает только если )
//применим только к сравнению значения с null; undefined;

// изменить скрипт таким образом, чтобы при нажатии на кнопку число увеличивалось на 5

