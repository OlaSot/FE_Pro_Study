// Метод push() и pop() являются методами массивов в JavaScript и относятся к методам изменения (mutation methods), так как они изменяют исходный массив и они не принимаюи колбэк функцию

// Сложные методы:
  // - принимают колбэк в качестве аргумента
  // - не мутируют исходный массив (кроме sort())

  const numbers = [1, 2, 3, 4, 5, 6];

numbers.push(7); // добавляет в конец массива переданное значение
numbers.unshift(0); // добавляет в начало массива переданное значение
numbers.pop(); // удаляет последний элемент из массива
numbers.shift(); // удаляет первый элемент из массива



// forEach() - ничего не возвращает (undefined), применяет указанную функцию к каждому элементу массива один раз , его нельзя сразу присвоить в переменную


const numbers2 = [23, 11, -9, 57, -3, 64];
// Сформировать новый массив, в который попадут числа больше 0

// const positivenumbers = []

// numbers2.forEach(el => {
//     if (el > 0){
//         positivenumbers.push(el)
//     }
// })

// console.log(positivenumbers);

// map() - возвращает новый массив, применяет указанную функцию к каждому элементу массива один раз и возвращает новый массив с измененными элементами. Длина исходного массива = длине нового массива. Можно сразу рисвоить в переменную

//map нужен для изменениея элементов, filter для фильтрации


// filter() - возвращает новый массив, в который попадут только те элементы из исходного массива, которые соответствуют переданному условию

const pos_numbers = numbers2.map(function(el){
  if(el > 0) {
    return el
  }
})

console.log(pos_numbers);

const filtered_nums = numbers2.filter(function(el){
  return el > 0 && el < 20
})

console.log(filtered_nums);

// Сформировать новый массив, в который попадут все числа из массива numbers2 умноженные на 3

const pow_nums = numbers2.map(function(el){
  return el * 3
})
console.log(pow_nums);


const users = [
  {
    id: 1,
    name: 'Anton',
    age: 27
  },
  {
    id: 2,
    name: 'Irina',
    age: 17
  },
  {
    id: 3,
    name: 'Olga',
    age: 55
  }
]


// Сформировать новый массив из имен пользователей

const newArr = users.map(function(el){
  const new_user = {
    name: el.name,
    age: el.age
  }
  return new_user
})

console.log(newArr);