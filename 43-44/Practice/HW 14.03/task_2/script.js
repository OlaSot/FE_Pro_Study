
// В html-документе создать форму (инпут и кнопка). Инпут принимает айди объекта.
// Форма собирает данные и отправляет fetch-запрос по ссылке https://dummyjson.com/products/ID (в id подставляются собранные значения из формы)
// Из полученных данных сформировать карточку товара (title, description, картинка)


const get_id = document.querySelector('.get_id')


function getUser (id){
    fetch(`https://dummyjson.com/products/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        console.log(json);
    })
}

getUser(5)

get_id.addEventListener('submit', function(event){
    event.preventDefault()
    const id_num = event.target.id.value
    getUser(id_num)
})
