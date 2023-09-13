import React from 'react'
import { useSelector} from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import SortForm from '../../components/FilterForms/SortFrom'
import FilterForm from '../../components/FilterForms/FilterForm'
import CheapProductForm from '../../components/FilterForms/CheapProductForm'


export default function AllProductsPage() {


const allProducts = useSelector(state => state.allProducts)

console.log(allProducts);

  return (
    <div>
      <FilterForm/>
      <SortForm/>
      <CheapProductForm />
      <ProductsContainer products={allProducts}/>
    </div>
  )
}
