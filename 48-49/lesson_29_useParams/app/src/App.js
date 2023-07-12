import './App.css';
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import NavMenu from './components/NavMenu';
import SingleProductPage from './pages/SingleProductPage';


function App() {
  return (
    <div >
      <NavMenu/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/products/:id' element={<SingleProductPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
