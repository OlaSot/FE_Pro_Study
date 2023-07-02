// 1. Отправить fetch-запрос по ссылке https://dummyjson.com/users
// 2. Вывести в консоль массив users
const usersContainer = document.querySelector('.users_container')
fetch('https://dummyjson.com/users') // отправляем запрос

  .then(function(res){
    return res.json()
  })
  .then(function(json){
    cardsRender(json.users)
    // getOlderUsers(json.users)
  })

  // 3. Из полученных данных cформировать карточки пользователей со следующими данными: фото, имя + фамилия, кликабельный email. Добавить все карточки в div с классом users_container

  // 5. Добавить в карточку информацию о компании человека (название департамента и адресс компании)

  // 6. Добавить параграф, описывающий банковские данные

  function cardsRender(users_array){
    users_array.forEach(function({ firstName, lastName, email, image, company, bank  }){
  
    const { address, department } = company;
    const {cardExpire, cardNumber, cardType} = bank


      const cardElem = document.createElement('div');
      const avatarElem = document.createElement('img');
      const nameElem = document.createElement('p');
      const emailElem = document.createElement('a');
      const departmentElem = document.createElement('p');
      const addressElem = document.createElement('p');
      const bankElem = document.createElement('p');
        
        bankElem.innerText = `Number ${cardNumber}
                              Type ${cardType}
                              Expire ${cardExpire}`
      nameElem.innerText = `${firstName} ${lastName}`;
      emailElem.innerText = email;
      departmentElem.innerText = `Department name: ${department}`;
      addressElem.innerText = `Address: ${address.address}, ${address.city}`;
  
      // emailElem.setAttribute('href', `mailto:${email}`);
      emailElem.href = `mailto:${email}`;
      avatarElem.src = image;
      avatarElem.alt = `${firstName} ${lastName}`;
  
      cardElem.append(avatarElem, nameElem, emailElem, departmentElem, addressElem, bankElem);
      usersContainer.append(cardElem);
    })
  }

//   function getOlderUsers(users_array) {
//     const older_users = users_array.filter(function(el){
//         return el.age >= 40
//     })
//     console.log(older_users);
//   }