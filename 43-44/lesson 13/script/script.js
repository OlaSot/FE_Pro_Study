// function getUser () {
//     fetch('https://dummyjson.com/users')
//       .then(function(res){
//         return res.json()
//       })
//       .then(function(data){
//         const result = data.users.map(function({firstName, lastName, image, email}){
//             return { firstName, lastName, image, email}
//         })
//         console.log(result);
//         // console.log(json.users)  //чтобы вывести массив , а не объект (json.users), а это просто объект json
//       })
//   }
  

//   getUser ()




//   function cards_render (users) {

//     users.forEach(function({firstName, lastName, email}) {

//     const userCard = document.createElement('div')
//     const userName = document.createElement('p')
//     const userLastName = document.createElement('p')
//     const userEmail = document.createElement('p')



//     userName.innerText = firstName
//     userLastName.innerText = lastName
//     userEmail.innerText = email

//     userCard.append(userName, userLastName, userEmail)
//     })
//   }

//   console.log(userCard);

const newCard = document.querySelector('#root')
let usersData = []



function createCard(firstName, lastName, image, email) {
    
    
    const userCard = document.createElement('div')
    const userName = document.createElement('p')
    const userLastName = document.createElement('p')
    const userEmail = document.createElement('a')
    const userImg = document.createElement('img')
    const btn = document.createElement('button')

    userName.innerText = firstName
    userLastName.innerText = lastName
    userEmail.innerText = email
    btn.innerText = 'Button'

    userImg.src = image
    userEmail.href = `mailto:${email}`




    userCard.append(userImg, userName, userLastName, userEmail, btn)
    newCard.append(userCard)

    userCard.classList.add('user')



}

        function rerender (){
            usersData.forEach(function({firstName, lastName, image, email}){
            createCard(firstName, lastName, image, email)
        })
    }


// доработать функцию loadUsers таким образом, чтобы она принимала callback и 
// для каждого элемента массива из полученных данных была сгенерированная карточка
// и добавлена в #root

async function getUser (callback) {
    const resp = await fetch('https://dummyjson.com/users')
    const data = await resp.json()
    const result = data.users.map(function({firstName, lastName, image, email}){
            return { firstName, lastName, image, email}
        })

        console.log(callback);
        callback(result)
        // result.forEach(function({firstName, lastName, image, email}){
        //     callback(firstName, lastName, image, email)
        // })
}
  
  

  getUser (function(data){
    usersData = data
    rerender()
  })




// создать функцию rerender, которая проходится циклом по массиву usersData и отрисовывает карточки с пользователями

//   const newCard = document.querySelector('#root')

//   function createCard(users_array) {
//       newCard.innerText = ''
//       users_array.forEach (function({firstName, lastName, image, email}) {
          
//           const userCard = document.createElement('div')
//           const userName = document.createElement('p')
//           const userLastName = document.createElement('p')
//           const userEmail = document.createElement('p')
  
//           userName.innerText = firstName
//           userLastName.innerText = lastName
//           userEmail.innerText = email
  
//           userCard.append(userName, userLastName, userEmail)
//           newCard.append(userCard)
//   });
//   }
  
