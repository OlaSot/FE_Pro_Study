const cards_container = document.querySelector('.cards_container')
const add_product_form = document.querySelector('.add_product_form')


function get_info () {
fetch(`https://api.storerestapi.com/products`)
.then(function(res) {
    return res.json()
})
.then(function(json){
    cards_render(json.data);
})
}

get_info();

function cards_render (products) {
    products.forEach(function({title, price}){

        const cardElem = document.createElement('div')
        const titleElem = document.createElement ('p')
        const priceElem = document.createElement('p')

        titleElem.innerText = `Title: ${title}`
        priceElem.innerText = `Price: ${price}$`

        cardElem.classList.add('cardElem')

        cardElem.append(titleElem, priceElem)
        cards_container.append(cardElem)

    })

    add_product_form.addEventListener('submit', function(event){
        event.preventDefault()
        const { title, price} = event.target


        console.log({

        title: title.value,
        price: +price.value,
        description: 'bbbb',
        category: 'Hi I am product'

       
        })


        event.target.reset()
    })

}

function createProduct(obj){
    fetch('https://api.storerestapi.com/products', {
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