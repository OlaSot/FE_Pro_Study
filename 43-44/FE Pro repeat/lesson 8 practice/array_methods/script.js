// Дан массив

const people = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      city: 'Moscow',
      country: 'Russia'
    },
  
    {
      first_name: 'Petr',
      last_name: 'Petrov',
      age: 12,
      city: 'Berlin',
      country: 'Germany'
    },
  
    {
      first_name: 'irina',
      last_name: 'Alexandrova',
      age: 46,
      city: 'Paris',
      country: 'France'
    },
  
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      city: 'Rome',
      country: 'Italy'
    }
  ];
  
  // 1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]

  
const arr1 = people.map(function({first_name, last_name, city, country }){
    return `${first_name} ${last_name} (${city}, ${country})`
})
console.log(arr1);


// 2. Сформируйте массив из людей (объектов), чьи имена начинаются на 'I' (регистр буквы может быть и нижним)

const arr2 = people.filter(function({first_name}){
    // return first_name[0] === 'I' || first_name[0] === 'i'
return first_name[0].toUpperCase() === 'I'

})

console.log(arr2);



// 3. Сформируйте массив из имен и фамилий людей ('Имя Фамилия'), проживающих в Германии и Франции

const arr3 = people.filter(({country}) =>
    country === "Germany" || country === "France" //логические операторы ставятся между двумя условиями, НЕ МЕЖДУ ДВУМЯ ЗНАЧЕНИЯМИ 
)
.map(({first_name, last_name}) =>
`${first_name} ${last_name}`
)

console.log(arr3);