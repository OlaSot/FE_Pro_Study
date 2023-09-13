import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsByCategoriesPage from './pages/ProductsByCategoriesPage';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import SingleProductPage from './pages/SingleProductPage';
import { getAllCategories } from './requests/categories_req';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from './requests/all_products_req';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategories)
    dispatch(getAllProducts)
  },[])
  
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/categories' element={<AllCategoriesPage/>}/>
        <Route path='/products' element={<AllProductsPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/categories/:category' element={<ProductsByCategoriesPage/>}/>
        <Route path='/products/:id' element={<SingleProductPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
