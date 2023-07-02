
function CreatePost(title, body) {
    const container = document.createElement('div')    
    const pTitle = document.createElement('p')
    const pBody = document.createElement ('p')
    pTitle.innerText = title
    pBody.innerText = body

    pTitle.classList.add('title')
    pBody.classList.add('title')

    container.append(pTitle, pBody)

    return container
}



const posts = document.querySelector('.posts')
const link = 'https://jsonplaceholder.typicode.com/posts'

fetch(link)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
            data.forEach(function({title, body}){
                const newPost = CreatePost(title, body)
                posts.append(newPost)
            })
        
    })



// написать скрипт, который проходится циклом по data
        // и для каждого объекта генерирует карточку и добавляет ее в 
        // div с классом posts


// const request = new Promise (function (resolve, reject) {
//    const number = Math.random();
//    if (number < 0.5){
//     resolve(number)
//    } else {
//     reject (number)
//    }
// })

// request.then(function (value) {
//     console.log(`positive result ${value}`);    
// },
// function (value) {
//     console.log(`negative result ${value}`)
// })


// создать функцию, которая получает заголовок и текст поста и формирует следующую структуру

/* 
<div>
    <p class='title'>title</p>
    <p class='text'>body</p>
</div> 
*/



