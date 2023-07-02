// const input = document.querySelector('.search')

// input.addEventListener('input', function(){
//     fetch ('https://dummyjson.com/users')
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         const value = input.value
//         const newData = data.users.filter(user => user.firstName.includes(value))
//         console.log(newData);
//     });
// })





// Задача 3 возможно))
// На каждый ввод буквы делать запрос на этот адрес и в консоль вывести всех пользователей



// Задача 4:
// Отфильтровать всех пользователей по имени на предмет наличия слова которое в инпуте в их имени
// И вывести в консоль отфильтрованный массив


// const array = ['Sergey', "Asad", 'Peter', 'Helena' ]

// // const myForEach(array, callback) {

// // for (let i = 0; i < array.length; i++){
// //     const result = callback(el)
// //     console.log();
// // }
// // }

// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++){
//         const result = callback(array[i]);
//         console.log(result);
//     }
// }

// myForEach(array)


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// const arr = [12, 64, -96, -50, 2, 6, 98]

// for (let i=0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         console.log(arr[i]);
//     }
// }

// function func() {
//     console.log('hi');
// }

// let a = func
// a()



// function func() {
//     console.log('hi');
// }

// function handler(callback){
//     callback()
// } 

// handler(func)

// setInterval(func, 100)




// создайте функцию, которая получает в качестве первого аргумента массив
// а в качестве второго функцию, которую нужно вызвать с каждым элементом массива

const arr = [12, 64, -96, -50, 2, 6, 98]

function each(array, callback){
  
    for (let i = 0; i < array.length; i++){
      const result = callback(array[i]){
        return array[i]
      }
        callback(arr[i])
        console.log()

    }
}

each(arr, console.log)