const add_form = document.querySelector('.add_product_form')
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
let currentProductIndex = 0
let productsData = []

function get_product (){
    fetch(`https://dummyjson.com/products`)
    .then((res) => res.json())
    .then((json => 
        // render(json.products)))
        productsData = json.products))
        renderNextProduct()
}

const renderNextProduct = () => {
    if(currentProductIndex < productsData.length){
        const el = productsData[currentProductIndex]
        const productCard = document.createElement('div');
        const productImage = document.createElement('img');
        const productPrice = document.createElement('p');

        productImage.src = el.images[0]; 
        productPrice.innerText = `Price: ${el.price}`; 

        productCard.append(productImage, productPrice)
        container.append(productCard)

        currentProductIndex++
    }
}

const render = (arr) => {
    arr.forEach((el) => {
        const productCard = document.createElement('div');
        const productImage = document.createElement('img');
        const productPrice = document.createElement('p');

        productImage.src = el.images[0]; 
        console.log(el.images)
        productPrice.innerText = `Price: ${el.price}`; 

        productCard.append(productImage, productPrice)
        container.append(productCard)

    });
}



btn.addEventListener('click', () => {
    if (productsData.length === 0){
        get_product()
} else {
    renderNextProduct()
}
})



