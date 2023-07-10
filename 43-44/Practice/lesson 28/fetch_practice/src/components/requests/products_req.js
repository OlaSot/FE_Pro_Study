export const getProducts = (callback) => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then (json => callback(json.products));
}


// async () => {
//     const resp = await fetch('https://dummyjson.com/products')
//     const data = await resp.json()
//    console.log(getProducts(data))};
