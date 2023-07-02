// 1. Отправить get-запрос по ссылке https://api.escuelajs.co/api/v1/users, получить данные
// 2. Из полученных данных отрисовать карточки с пользователями (name, email, avatar)

const users_container = document.querySelector('.users_container')
const add_user_form = document.querySelector('.add_user_form')



function get_info(){
fetch('https://api.escuelajs.co/api/v1/users')
.then(function(res) {
    return res.json()
})
.then(function(json){
    card_creation(json);
})
}

get_info()

function card_creation(arr){
    users_container.innerText = ''
    arr.forEach(function({name, email, avatar}){

        const cardElem = document.createElement('div')
        const avatarElem = document.createElement('img')
        const nameElem = document.createElement ('p')
        const emailElem = document.createElement('a')

        nameElem.innerText = `Name: ${name}`
        emailElem.innerText = `Email: ${email}`
        
        emailElem.href = `mailto: ${email}`

        avatarElem.src = avatar

        cardElem.classList.add('cardElem')

        cardElem.append(avatarElem, nameElem, emailElem)
        users_container.append(cardElem)

    })
}

// 3. Создать форму с тремя инпутами (имя, мэйл, ссылка фото). При отправке формы формируется объект и выводится в консоль


add_user_form.addEventListener('submit', function(event){
    event.preventDefault()
    const {name, email, avatar} = event.target

    createUser({
        name: name.value,
        email: email.value,
        avatar: avatar.value,
        password: 'something',
        role: 'admin'


    });


    event.target.reset()
})

// 4. При отправки формы вызывать функцию, отправляющую post-запрос https://api.escuelajs.co/api/v1/users, и передать в эту функцию объект с собранными данными. Полученный ответ вывести в консоль


function createUser(obj){
    fetch('https://api.escuelajs.co/api/v1/users', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        console.log(json);
        get_info()
    })
}