const numbers = [12, 4, 32, 5, 4, 2, 65]

//используя map сформировать массив, в котором все числа меньше 10 долэны быть увеличены на 10

// const newnumbers = numbers.map(function(el){
//     //В условном операторе if не требуется использовать оператор return, потому что это не функция, а управляющая конструкция. Условный оператор if выполняет определенный блок кода только тогда, когда заданное условие истинно (true). В данном примере кода, блок кода, который будет выполнен, это увеличение значения переменной el на 10, только если она меньше 10. После выполнения оператора if, программа продолжит выполнение функции и вернет значение el, используя оператор return.

//     if (el < 10) { //
//         el += 10
//     }
//     return el
// })

// console.log(newnumbers);


// используя метод filter сформировать массив из четных чисел

// const evenNummers = numbers.filter(function(el){
//     return el % 2 === 0
    
// })

// console.log(evenNummers);


//используя reduce найти сумму всех четных чисел 

// const sum = numbers.reduce(function(acc, el){
//     if (el % 2 === 0){
//       return acc + el //acc += el
//     } else {
//         return acc
//     }
// },0)

// console.log(sum);



//____________________________________________________________________________________
// тернарный оператор используют тогда, когда нам надо поставить то или иное значение в зависимости от условий

// const sum = numbers.reduce(function(acc, el){
//     return acc + (el % 2 === 0 ? el : 0)  // если el четный, то возвращаем элемент, иначе возвращаем 0
//     },0)

// const products = [
//     {id: 1, title: 'велосипед', price: 5000, discount: 12},
//     {id: 2, title: 'ролики', price: 1000, discount: 0},
//     {id: 3, title: 'самокат', price: 900, discount: 5},
//     {id: 4, title: 'лыжи', price: 1200, discount: 0},
//     {id: 5, title: 'сноуборд', price: 1500, discount: 10}
// ]

// const nameProducts = products.map(function(el){
//     return el.title
// })

// console.log(nameProducts);


//_________________________________destruction
// const nameProducts = products.map(function({title}){
//     return title
// })

// console.log(nameProducts);


// доработать метод map таким образом, чтобы в итоговом массиве были наименования товаров
// и цена с учетом скидки


// const discountProducts = products.map(function(el){
//     const priceDiscount = el.price * (el.discount / 100)
//     return {
//         title: el.title,
//         price: el.price - priceDiscount}
// })

// console.log(discountProducts);


//______________________________destruction
// const discountProducts = products.map(function({title, price, discount}){

//     return {
//         title: title,
//         price: price - price*discount / 100}
// })

// console.log(discountProducts);


// доработать script таким образом, чтобы в итоговом массиве были даннные про продукты, которые 
// дешевле 1200 (без скидки)

// const newPoducts = products
// .filter(function({ price}){
//     return  price <= 1200
    
// })
// .map(function({title, price}){
//     return {title, price}
// })
// console.log(newPoducts);






//_________________________________________LOCAL STORAGE

// localStorage.setItem('testKey', 'testValue') //setItem это метод, который позволяет задать значение в локалстор

// const result = localStorage.getItem('testKey') //для того, чтобы считать значение из lS

// console.log(result);


// написать скрипт, который увеличивает число на единицу при нажатии накнопку и получившееся значение записывает как значение кнопки

// const btn = document.querySelector('button')
// let count = 0

// нужно создать переменную , в которой будет храниться значения и которая будет изменяться
// затем вешаем слушатель, создаем коллбэк функцию
// прописываем, что надо сделать с count
// с помощью иннертекст присваимваем, значение, чтобы вместо текста при клике отображалось полученное значение

// btn.addEventListener('click', function(){
//     count++;
//     btn.innerText = count
//     //запись в lS

//     localStorage.setItem('counter',count) //даем название и переменную , которую хотим хранить
// })

//унарный опертор + преобразует значение в число

const btn = document.querySelector('button')
let count = +localStorage.getItem('counter') ?? 0 //считывае значение из counter чтобы отображалось сохраненное значение
//оператор нулевого слияния проверяет на значение null и undefined , если null или undefined, то возвращает значение справа
//унарный опертор + преобразует значение в число
 // в lS данные всегда хранятся в виде строки




// if (count === null){ // добавили дефолтное значение
//     count = 0
// }

btn.innerText = count //добавили для того, чтобы изначально было число , а не текст


// if (count === null){ // добавили дефолтное значение
//     count = 0
//     btn.innerText = 'Click'
// } else {
//     btn.innerText = count
// }

//через тернарный оператор

// count === null ? 0 : count



btn.addEventListener('click', function(){
    count+=5; //будет ппроисходить конкантенация
    // в lS данные всегда хранятся в виде строки

    
    btn.innerText = count
    //запись в lS

    localStorage.setItem('counter', count) //даем название и переменную , которую хотим хранить
})

//оператор нудевого слияние проверяет на значение null и undefined 