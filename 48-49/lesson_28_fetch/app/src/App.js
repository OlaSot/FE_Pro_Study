import './App.css';
import {Routes, Route} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import NavMenu from './components/NavMenu';


function App() {
  return (
    <div>
      <NavMenu/>
      <Routes>
        <Route path='/' element = {<ProductsPage/>}/>
        <Route path='/users_page' element = {<UsersPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
