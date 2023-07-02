const add_product_form = document.querySelector('.add_product_form')
let products = []


const form_btn = document.createElement('button')
const name_input = document.createElement('input')
const price_input = document.createElement('input')
const products_container = document.querySelector('.products_container')


const delete_all = document.createElement('button')
delete_all.innerText = 'DELETE'
delete_all.addEventListener('click', function(){
    products.length = 0;
    rerender()
})
const buttonsContainer = document.querySelector('.buttons_container');
buttonsContainer.append(delete_all);


name_input.setAttribute('name', 'product')
name_input.setAttribute('placeholder', 'name')
price_input.setAttribute('name', 'price')
price_input.setAttribute('placeholder', 'price')

form_btn.innerText = 'Add Product'

add_product_form.append(name_input, price_input, form_btn, )

add_product_form.addEventListener('submit', (event) => {
    event.preventDefault()

    const {product, price} = event.target;
    products.push({
        id:Date.now(),
        product: product.value,
        price: +price.value,
        quantity: 5
    });
    event.target.reset() 
    rerender()
    // console.log(products); // во внутрь , чтобы отработала после сабмита формы
    })

 function rerender() {
    products_container.innerText = ''
    products.forEach(function({ id, product, price, quantity}){
    const card_elem = document.createElement('div')

    const title_elem = document.createElement('p')
    const price_elem = document.createElement('p')
    const quantity_elem = document.createElement('p')

    title_elem.innerText = `Title: ${product}`
    price_elem.innerText = `Price: ${price}`
    quantity_elem.innerText = `Quantity: ${quantity}`

    card_elem.classList.add('product_card')
    card_elem.style.backgroundColor = price <= 1000 ? 'lightgreen' : 'lightpink'

        card_elem.addEventListener('click', function(){
            products = products.filter(function(el){
                return el.id !== id
            })
            rerender()
        })

    card_elem.append(title_elem, price_elem, quantity_elem)
    products_container.append(card_elem)

    })
}

