import { useState } from "react";
import Product from "../Product";
import AddProduct from "../AddProduct";


function App() {


  
  const defaultProducts = [
    {id: 1, title: 'велосипед', price: 3500, amount: 0},
    {id: 2, title: 'ролики', price: 500, amount: 7},
    {id: 3, title: 'самокат', price: 700, amount: 3},
    {id: 4, title: 'лыжи', price: 2200, amount: 6},
  ]


  const [products, setProducts] = useState(defaultProducts)
// в компоненте App сформировать параграфы с описанием продуктов
/* 
<p>велосипед (3500)</p>
<p>велосипед (3500)</p>
<p>велосипед (3500)</p> 
*/

if (products.length === 0) {
  return <p>Товаров нет</p>;
}

let deleteProduct = (delId) =>  setProducts(products.filter(({id}) => id !== delId))
const incrAmount = (id) => {
  const newArr = products.map((item) => {
    if (item.id === id) {
      item.amount += 1
    }
    return item
  })
  setProducts(newArr)
}
//setProducts(products.filter(({id}) => amount += 1))
const decrAmount = (id) => {
  const newArr = products.map((item) => {
    if (item.id === id && item.amount !== 0) {
      item.amount -= 1
    }
    return item
  })
  setProducts(newArr)
}


const add = (id) => {
  const newArr = products.map((item) =>{
    if (item.id === id) {
      item.amount += 1000
    }
    return item
  })
  setProducts(newArr)
}

const reset = (id) => {
  const newArr = products.map((item) =>{
    if (item.id === id) {
      item.amount = 0
    }
    return item
  })
  setProducts(newArr)
}

const newobj = (product) => {
  const newState = [...products, product]
  setProducts(newState)
}

  return (
    <div>
      <AddProduct newobj={newobj}/>
    <div>
      {products.map((item) => <Product key= {item.id}{...item} {...deleteProduct=
          {...{
            deleteProduct,
            incrAmount,
            decrAmount, 
            reset,
            add
          }}
        }
        />)
      }
    </div>
    </div>  
  )




    }

  export default App;