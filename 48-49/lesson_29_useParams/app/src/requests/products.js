export const getAllProducts = (callback) => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(json => callback(json))
}

export const getProduct = ( id) => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(res => res.json())
    .then(json => console.log(json))
}

