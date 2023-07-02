const get_user_form = document.querySelector('.get_user_form');
const users_cards_container = document.querySelector('.users_cards_container');

function getUser (id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      cards_render(json)
    })
}

get_user_form.addEventListener('submit', function(event){
  event.preventDefault();
  const id_num = event.target.id.value;
  getUser(id_num);
  event.target.id.value = '';
});

function cards_render(data){
  const userCard = document.createElement('div');
  const nameElem = document.createElement('p');
  const emailElem = document.createElement('a');

  nameElem.innerText = data.name;
  emailElem.innerText = data.email;

  emailElem.href = `mailto:${data.email}`;

  userCard.append(nameElem, emailElem);
  users_cards_container.append(userCard);
}