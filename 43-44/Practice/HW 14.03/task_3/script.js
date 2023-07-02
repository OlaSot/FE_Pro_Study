// 1 уровень сложности: реализовать проект, который считывает данные о пользователях по ссылке https://reqres.in/api/users?page=2
// Данные необходимо отрисовать в карточках, используя гриды

const usersContainer = document.querySelector('.users_container');


fetch ('https://reqres.in/api/users?page=2')
.then(function(res){
    return res.json()
})
.then(function(json){
    cards_render(json.data);
})

function cards_render (arr) {
arr.forEach(function({avatar, email, first_name}){

    const cardElem = document.createElement('div');
    const avatarElem = document.createElement('img');
    const nameElem = document.createElement('p');
    const emailElem = document.createElement('a');


nameElem.innerText = first_name,
emailElem.innerText = email;


emailElem.href = `mailto:${email}`;
avatarElem.src = avatar;



cardElem.append(avatarElem, nameElem, emailElem);
usersContainer.append(cardElem);

}

)}

