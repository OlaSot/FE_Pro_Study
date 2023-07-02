// let cars = ['BMW', 'Mercedes', 'Volvo', 'Audi']

// console.log(cars);

// for (let i = 0; i < cars.length; i++) {
//     const element = cars[i]; // 0, 1, 2, 3
    
//     console.log(element);
// }

// for (let i=0; i<3; i++) {
//     for (let j=0; j<3; j++) {
//         console.log(i, j);
//     }
// }

// let cars = ['BMW', 'Mercedes', 'Volvo', 'Audi']

// let new_cars = cars.map(el => el.toUpperCase())

// console.log(new_cars);

// function strToUpperCase(el) {
//     return el.toUpperCase()
// }

// function mapV2(cars, fnc) {
//     let modifiedCars = []

//     for (let i = 0; i < cars.length; i++) {
//         modifiedCars.push(fnc(cars[i]))
//     }

//     return modifiedCars

// }

// let modifiedCarsV2 = mapV2(cars, strToUpperCase)

// console.log(modifiedCarsV2);


// let modifiedCars = cars.map(strToUpperCase)

// const numbers = [2, 65, 4, 8, 9, 35, 5]
// let new_nums = numbers.map(el => el ** 2)
// console.log(new_nums);


// let cars = ['BMW', 'Mercedes', 'Volvo', 'Audi']

// let filteredCars = cars.filter(el => {
//     return item[0] === 'A'
// })

// console.log(filteredCars);



// function filterV2(array, fnc) {
//     let filteredElement = []   
//     for (let i = 0; i < array.length; i++) {
//         if(fnc(cars[i])) {
//             filteredElement.push(cars[i])
//         }
//     }
//     return filteredElement
// }


// const numbers = [2, 65, 4, 8, 9, 35, 5]

// let result = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         sum = sum + arr[i]
//     }
//     return sum
// }


// const car = {
//     name: 'BMW',
//     model: 'X6',
//     year: 2023,
//     'speed car': 360
// };


// console.log(car['model']);
// console.log(car.name);
// console.log(car['speed car']);

// car.name = 'Mercedes'
// car['model'] = 'GLS'


let data = {}

let inputs = document.querySelectorAll('.form__input')

inputs.forEach(input => {
    input.onkeyup = handlerChange
})


function handlerChange(event) {
    console.log(event.target);
}
