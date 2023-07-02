const container = document.querySelector('.container')
const product_form = document.querySelector('.product_form')
const btn_elem = document.querySelector('button')

let all_products = []


product_form.addEventListener('submit', (event) => {
   event.preventDefault()


    const {title, price, discount} = event.target

   const product = {
    id: Date.now(),
    title: title.value,
    price: +price.value,
    discount: +discount.value
   }

    
    all_products.push(product)
    render_card(all_products)

    event.target.reset()
})

const render_card = (products) => {
    
    container.innerText = ''

    products.forEach(({id, title, price, discount}) => {

    const title_elem = document.createElement('p')
    const price_elem = document.createElement('p')
    const discount_elem = document.createElement('p')
    const cards_container = document.createElement('div')
    const newprice_elem = document.createElement('p') 
    const cross = document.createElement('p')

    title_elem.innerText = title
    price_elem.innerText = price
    discount_elem.innerText = discount
    cross.innerText = 'X'
    
    


   cross.addEventListener('click', () => {
       all_products = all_products.filter(el => el.id != id)
        render_card(all_products)
    } )

    const discount_price = price - (discount * price / 100) 
    // const discount_price = price * (1 - discount / 100);

    newprice_elem.innerText = parseFloat(discount_price.toFixed(0))


    cards_container.append(title_elem, price_elem, discount_elem, newprice_elem, cross)
    container.append(cards_container)


    })
}

btn_elem.addEventListener('click', () => {
    all_products = []
    render_card(all_products)
})

//render_card отрисовывает все , из нашего массива