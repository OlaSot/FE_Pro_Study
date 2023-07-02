// 1. Написать fetch-запрос по ссылке https://reqres.in/api/users?page=1
// 2. Вывести данные в консоль
// 3. Сделать число в конце ссылки динамически изменяющимся
// 4. Отрендерить карточки, добавить их в users_container (имя + фотка)
// 5. Повесить на кнопки слушатели событий. При клике на 1 отправляем fetch-запрос на 1, при клике на 2 - fetch-запрос на 2


const usersContainer = document.querySelector('.users_container')

function getTodos (num){


fetch(`https://reqres.in/api/users?page=${num}`)

.then(function(res){
    return res.json()
})
.then(function(json){
    cardsRender(json.data);
})
}

getTodos(1)

function cardsRender (users_array){
    usersContainer.innerText = ''
    users_array.forEach (function({ first_name, avatar  }){
        const cardElem = document.createElement('div');
        const avatarElem = document.createElement('img');
        const nameElem = document.createElement('p');
        

        nameElem.innerText = first_name;
        avatarElem.src = avatar
        cardElem.append(avatarElem, nameElem);
        usersContainer.append(cardElem);
      })
    }


    let button1 = document.querySelector(".btn1");
    let button2 = document.querySelector(".btn2");

    button1.addEventListener('click', function () {

     getTodos(1)})

     button2.addEventListener('click', function () {

        getTodos(2)})


        // const [ first_btn, second_btn ] = document.querySelectorAll('.triggers button');

        // first_btn.addEventListener('click', function(){
        // getUsers(1)
        // });

        // second_btn.addEventListener('click', function(){
        // getUsers(2)
        // });
//     let products = [];

// add_product_form.addEventListener('submit', function(event){
//   event.preventDefault();
//   const { product, price } = event.target;
//   products.push({
//     id: Date.now(),
//     product: product.value,
//     price: +price.value,
//     quantity: 5
//   });
//   product.value = '';
//   price.value = '';
//   render_cards();
// });
  