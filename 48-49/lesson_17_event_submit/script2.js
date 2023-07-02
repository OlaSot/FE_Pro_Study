const add_form_product = document.querySelector('.add_product_form')
const products_container = document.querySelector('.products_container')
let all_products = []

add_form_product.addEventListener('submit', (event) =>{
    event.preventDefault()

    const {title, price, discount} = event.target

    const product = {
        id: Date.now(),
        title: title.value,
        price: +price.value,
        discount: +discount.value
    }

    event.target.reset()
    all_products.push(product)
    render_cards(all_products);

    event.target.reset()


})

const render_cards = products => {

    products.map(({title, price, discount}) => {

    
    const card_elem = document.createElement('div')
    const nameElem = document.createElement('p')
    const priceElem = document.createElement('p')
    const discountElem = document.createElement('p')

    nameElem.innerText = `Title: ${title}`
    priceElem.innerText = `Price: ${price}`;
    discountElem.innerText = `Discount: ${discount}`;



    card_elem.append(nameElem, priceElem, discountElem)
    products_container.append(card_elem)

    

})
}


