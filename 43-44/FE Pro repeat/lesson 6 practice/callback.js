
// Callback (функция обратного вызова) - функция, переданная в другую функцию в качестве аргумента
// Функция высшего порядка - функуия, которая принимает другую функцию в качестве аргумента

// function doubleTwo(){
//     return 2 * 2
//   }
  
//   function doubleThree() {
//     return 3 * 2
//   }
  
//   function doubleFour(){
//     return 4 * 2
//   }
  
//   function doubleNum(a){
//     return a * 2
//   }
  
//   const a = doubleNum(10); // 20
  
//   console.log(a); 
// если функция возвращает, это означает , что ею можно дальше пользоваться




// Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums умноженные на 2

// const nums = [1, 2, 3, 4, 5];

// const nums2 = []

// for (let i=0; i<nums.length; i++){
//     nums2.push(nums[i]*2)
// }
// console.log(nums2);

//через функцию
 
// function doubleNums () {
//     for (let i=0; i<nums.length; i++){
//         nums2.push(nums[i]*2)
//     }

    
// }
// doubleNums()
// console.log(nums2);


// Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums деленные на 2

// const divided_nums = [];
// function doubleNums(){
//   for(let i = 0; i < nums.length; i++){
//     divided_nums.push(nums[i] / 2)
//   }
// }

// Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums возведенные в степень 2

// const powered_nums = [];
// function doubleNums(){
//   for(let i = 0; i < nums.length; i++){
//     powered_nums.push(nums[i] ** 2)
//   }
// }

const nums = [1, 2, 3, 4, 5];
function change_nums (arr, callback) {
    for (let i = 0; i < nums.length; i++){
        arr.push(callback(nums[i]))
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


change_nums(div_nums, divNums)
console.log(div_nums);