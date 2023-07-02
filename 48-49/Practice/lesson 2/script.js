// const names = ['Sergey', 'Anton', 'Hanna', 'Olha']

// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//       const element = array[i];
//       callback(element);
//     }
//   }
  
//   myForEach(names, (item) => {
//     console.log(item.toUpperCase());
//   });
  



//   function myMap(array, callback){
//     const newArr = []
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         newArr.push(callback(element))
//     }
//     return newArr
//   }


//   const newA = myMap(names, (item) => {
//    return item.toUpperCase();
//   })

//   console.log(newA);




//   function myfind(array, callback) {
//     const newArr = []
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (callback(array[i] === true)) {
//            newArr.push(callback(element))
//         }
//     } return newArr
//   }

// //   const newFunction = myfind(names, (item) => {
// //     if (item[0] === 'S') {
// //         return item
// //     }
// //     return undefined
// //   });

// //   console.log(newFunction);





// //   const names2 = ["Sergey", "Andery", "Sasha"];

// // const foundedNameByFind = names.find((item) => {
// //   return item === 'Sasha'
// // })

// // console.log('find', foundedNameByFind);

// // find
// // function myFind(array, callback) {
// //   for (let i = 0; i < array.length; i++) {
// //     const element = array[i];
// //     if (callback(element)) {
// //       return element
// //     }
// //   }
// // }

// // const foudedNameByMyFind = myFind(names, (item) => {
// //   return item === 'Sasha'; 
// // })

// // console.log('myFind', foudedNameByMyFind);






// function myFindIndex (array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (callback(element) === true ){
//             return i
//         }
//     }
// }

// const myIndex = myFindIndex(names, (item) => {
//     return item === names[2]
// })


// console.log(myIndex);














// function myForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//       callback(arr[i])
//     }
// }

// myForEach(array, console.log)


const array = [1, 5, 98, 50, -96, -50]

function square(number) {
  return number * number;
}


function myMap(arr, callback) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]))
    
  }
  return newArr
}

console.log(myMap(array, square ))



function myFilter(array, callback) {

  const newArray = [];

  for (let i = 0; i < array.length; i++) {
      const element = array[i];
      const result = callback(element)
      
      if (result === true) {
          newArray.push(element)
      } 
  }
return newArray
}























