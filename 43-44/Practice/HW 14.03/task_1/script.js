// Коллеги, ловите обещанную домашку:
// Задача 1:
// В html-документе создать форму (два инпута и кнопка). Первый инпут принимает название коллекции, второй - айди объекта.
// Форма собирает данные и отправляет fetch-запрос по ссылке https://dummyjson.com/COLLECTION/ID (в collection и id подставляются собранные значения из формы)
// Полученные данные вывести в консоль
// Задача 2:
// В html-документе создать форму (инпут и кнопка). Инпут принимает айди объекта.
// Форма собирает данные и отправляет fetch-запрос по ссылке https://dummyjson.com/products/ID (в id подставляются собранные значения из формы)
// Из полученных данных сформировать карточку товара (title, description, картинка)



const get_user_form = document.querySelector('.get_user_form')
const new_card = document.querySelector('.new_card')


function getUser (collection, id) {
    fetch(`https://dummyjson.com/${collection}/${id}`)
      .then(function(res){
        return res.json()
      })
      .then(function(json){
       console.log(json)
      })
  }



  get_user_form.addEventListener('submit', function(event){
    event.preventDefault()
    const id_num = event.target.id.value
    const collection_num = event.target.collection.value
  
    getUser(id_num, collection_num)
  })

  // get_id.addEventListener('submit', function(event){
  //   event.preventDefault();
  //   const id_num = event.target.productid.value
  //   getUser(id_num)
  //   event.target.id.value = ''
  // })

  // function cards_render(data) {
  //   const userCard = document.createElement('div');
  //   const avatarElem = document.createElement('img');
  //   const titleElem = document.createElement('p');
  //   const descrElem = document.createElement('p')

  //   titleElem.innerText = data.title
  //   descrElem.innerText = data.description
  //   avatarElem.src = data.image;

  //   userCard.append(titleElem, avatarElem, descrElem)
  //   new_card.append(userCard)
  // }

