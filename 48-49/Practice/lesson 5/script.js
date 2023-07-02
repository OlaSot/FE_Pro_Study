// const get_product = () => {
//     fetch ('https://dummyjson.com/products')
//     .then (res => res.json())
//     .then (json => console.log(json.products)) 
// }

// get_product()


const products = document.querySelector('.products')

const get_products = () => {
const promiseFromFetch = fetch('https://dummyjson.com/products');

const promiseFromJson = promiseFromFetch.then((response) => {
    return response.json();
})

promiseFromJson.then((data) => {
    render(data.products);

})}

get_products()

const render = (arr) => {

   const card_elements = arr.map(({title, description, price}) => {
        const titleElem = document.createElement('p')
        const descElem = document.createElement('p')
        const priceElem = document.createElement('p')
        const cardElem = document.createElement('div')
        

        titleElem.innerText = title
        descElem.innerText = description
        priceElem.innerText = price

        cardElem.append(titleElem, priceElem, descElem)
        return cardElem
    })

    card_elements.forEach(el => {
        products.append(el)
    })
    
    

}

