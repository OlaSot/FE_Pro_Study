//создать функцию, которая получает в качестве аргумента id товара и выводит данные о нем в 
//консоль


// function getProduct (id, callback) {

//     const link = `https://fakestoreapi.com/products/${id}`
//     fetch(link) // отправляем запрос

//         .then(function(res){
//             return res.json()
//         })
//         .then(function(data){
//             callback(data); 

//         })

//         }


// getProduct (5, console.log)
// getProduct (6, function(data) {
//     console.log(data.title) 
// });




// реализовать передачу в getProduct callback функции и вызывать ее с данными, которые 
// пришли с сервера

// function handler () {
//     console.log('handler works!');
// }

// handler ()

// const a = handler;
// a () // функция присвоена к переменной 

// function calculation (a, b, callback) {
//     return callback ( a, b)
// }

// const result = calculation (12, 4, function(a, b){
//     return a * b
// })

// console.log(result);




// function calculation (a, b) {    
//     function callback ( a, b) {
//         return a  + b
//     }
//     return callback (a, b)
// }

// calculation (12, 4)



// создать функцию forEach, которая получает в качестве аргументов массив и функцию, которая 
// должна быть вызвана для каждого элемента данного массива


// function forEach (array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback (array[i]);
//     }
// }




// const array2 = [1, 2, 5, 6, 7]


// forEach(array2, console.log)
// forEach(array2, function(elem){
//     console.log(elem**2);
// })


// создать функцию map, которая получает в качестве аргументов массив и функцию, которая должна быть вызвана для каждого элемента массива. То, что возвращает callback функция должно добавляться в массив. 

// функция map должна вернуть массив с результатами работы callback функции

// function map (array2, callback) {
//     const result = []
//     for (let i = 0; i < array2.length; i++) {
//         const item = callback(array2[i])
//         result.push(item)
//     }
//     return result
    
// }

// const newArr = map(array2, function(elem){
//     return elem ** 2
// })

// console.log(newArr);


// создать функцию filter 
// она получает два аргумента (массив и callback функцию)
// и возвращает новый массив, который состоит только из тех элементов, с которыми 
// callback функция вернула true

// const array2 = [1, 20, 2, 5, 6, 7, 35, 46, 50]

// function filter (array2, callback) {
//     const result = []
//     for (let i = 0; i < array2.length; i++) {
    
        
//      if (callback(array2[i])) {
//         result.push(array2[i])
//      }   

//     }
//     return result

// }

// const newArr = filter(array2, function(elem){
//     return elem > 10
// })

// console.log(newArr);

// // создать функцию find, которая получает массив и callback функцию
// // функция find должна вернуть первый элемент, который соответствует условию из функции

// const array = [1, 20, 2, 5, 6, 7, 35, 46, 50]

// function find(array, callback) {

//     for (let i = 0; i < array.length; i++) {
    
        
//      if (callback(array[i])) {
//         return(array[i])
//      }   

//     }
    

// }

// const newarr = find (array, function(elem){
    
//     return elem > 40
// })

// console.log(newarr);

// создать функцию, которая получает в качестве аргумента id товара и выводит данные о нем в 
// консоль


function getProduct (id, callback) {

    const link = `https://fakestoreapi.com/products/${id}`
    fetch(link) // отправляем запрос

        .then(function(res){
            return res.json()
        })
        .then(function(data){
            callback(data); 

        })

        }


getProduct (5, console.log)
getProduct (6, function(data) {
    console.log(data.title) 
});

// создать функцию, которая получает в качестве аргумента объект с данными продукта 
// и формирует карточку товара 
//<div>
//    <p>наименование</p>
//    <p>цена</p>
//</div>

// созданную карточку необходимо добавить в #root

// передать эту функцию как callback в getProduct

const root = document.querySelector('#root')

function cardsRender (product){
        root.innerText = ''
        const cardElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const priceElem = document.createElement('p')
        const rateElem = document.createElement('p')
        
        rateElem.innerText = product.rating.rate
        nameElem.innerText = product.title
        priceElem.innerText = product.price

        cardElem.append(nameElem, priceElem, rateElem);
        root.append(cardElem);

       
        cardElem.classList.add('item')
      }
    

getProduct (8, cardsRender)
getProduct (1, cardsRender)
getProduct (7, cardsRender)
