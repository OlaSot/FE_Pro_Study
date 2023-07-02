const get_user_form = document.querySelector('.get_user_form')


get_user_form.addEventListener('submit', e => {
  e.preventDefault();
  const { id } = e.target;
  getUsers(id.value);
  e.target.reset()
})

function  getUsers(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
    render_cards(json)
    })
  }


  const render_cards = (user) => {
    const container = document.querySelector('.container');
    const card_elem = document.createElement('div')
    const cross = document.createElement('span')


    cross.innerText = 'X'

    const nameElem = document.createElement('p');
    nameElem.innerText = user.name;

    const emailElem = document.createElement('a');
    emailElem.innerText = user.email;
    emailElem.href = `mailto:${user.email}`



    const addressElem = document.createElement('p')
    const {street, suite, zipcode, city} = user.address
    addressElem.innerText = street + ', ' + city + ', ' + suite + zipcode;


   card_elem.append(cross, nameElem, emailElem, addressElem);
   container.append(card_elem)

    card_elem.addEventListener('click', () => {
        card_elem.style.backgroundColor = 'lightgreen'
    } )

    cross.addEventListener('click', () => {
        card_elem.remove()
    })

  }

// ДЗ
// 1. Разобраться в коде
// 2. Понять почему не работает удаление карточки по клику на крестик
// 3. Придумать как починить функцию удаления карточки
