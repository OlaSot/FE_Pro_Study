// let a = 20

// setTimeout(function(){
//     a = 320
//     console.log(a);
// }, 2000)

// const promise = new Promise(function(res, rej) {
//     setTimeout(function(){
//         res(a = 320)
//     }, 2000)
// })

// promise.then(function(){
//     console.log(a);
// })


fetch('https://fakestoreapi.com/products/2') // отправляем запрос
  .then(function(res) {
    return res.json()
  })
  .then(function(json){
    console.log(json)
  })

// function render(json){
//   // 
// }

// console.log(products);