//1. Написать функцию, принимающую в качестве аргумента id (число), отправляющую fetch-запрос по ссылке https://dummyjson.com/users/{id} и выводящую полученные данные в консоль
//2. Написать функцию, принимающую полученный объект и отрисовывающую карточку пользователя (имя + фамилия, username,кликабельная почта и адрес)

// const get_user_form = document.querySelector('.get_user_form');
// const users_cards_container = document.querySelector('.users_cards_container');

// function getUser (id) {
//   fetch(`https://dummyjson.com/users/${id}`)
//     .then(function(res){
//       return res.json()
//     })
//     .then(function(json){
//       cards_render(json)
//     })
// }

// get_user_form.addEventListener('submit', function(event){
//   event.preventDefault();
//   const id_num = event.target.id.value;
//   getUser(id_num);
//   event.target.id.value = '';
// });

// function cards_render(data){
//   const userCard = document.createElement('div');
//   const nameElem = document.createElement('p');
//   const emailElem = document.createElement('a');

//   nameElem.innerText = data.firstName;
//   emailElem.innerText = data.email;

//   emailElem.href = `mailto:${data.email}`;

//   userCard.append(nameElem, emailElem);
//   users_cards_container.append(userCard);
// }

const arr = [1, 65, 98, -6, -96, 50]

function myMap (arr, callback) {
    const newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i]))
    }
    return newArr
}

const NewArr = myMap(arr, function(el){
    return el * el
})
console.log(NewArr);