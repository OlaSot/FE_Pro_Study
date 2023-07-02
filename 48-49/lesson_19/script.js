// При клике на burger_icon класс nav_active у ul появляется, если его нет, и удаляется, если он есть


// ДЗ
// При сабмите формы собираются данные, формируется объект (id, email, password) и добавляется объект в массив со всеми зарегистрированными пользователями


const registration_form = document.querySelector('.registration_form')
const ul = document.querySelector('ul')
const burner_icon = document.querySelector('.burger_icon')
const account = document.querySelector('.account')
const popup = document.querySelector('.popup')
const cross = document.querySelector('.cross_icon')
let all_users = []



    registration_form.addEventListener('submit', (e) =>{
        e.preventDefault()
        const { email, password} = e.target
        const user = {
            id: Date.now(),
            email: email.value,
            password: password.value
        }
        all_users.push(user)
        console.log(all_users);
    })

    
burner_icon.addEventListener('click', () => {
    ul.classList.toggle('nav_active')
})


account.addEventListener('click', () => {
    popup.classList.add('modal_active')
})

cross.addEventListener('click', () => {
    popup.classList.remove('modal_active')
})

