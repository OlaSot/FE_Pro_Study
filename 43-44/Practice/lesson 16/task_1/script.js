

fetch('https://api.storerestapi.com/users')
.then(function(res){
  return res.json()
})
.then(function(json){
  render (json.data)
})

const cards_container = document.querySelector('.cards_container')



function render (arr) {

    arr.forEach(function({name, email}) {
        const userCard = document.createElement('div');
        const nameElem = document.createElement('p');
        const emailElem = document.createElement('a')

        nameElem.innerText = name
        emailElem.innerText = email
    
        emailElem.href = `mailto:${email}`;
    
        userCard.style.backgroundColor = name[0] === 'D' ? 'lightpink' : 'lightgreen';
        userCard.append(nameElem, emailElem);
        cards_container.append(userCard);

        userCard.classList.add('userCard')

    })

}