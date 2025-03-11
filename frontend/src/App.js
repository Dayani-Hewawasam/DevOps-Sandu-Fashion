import React from 'react';

import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import long_frocks_banner from './Components/Assets/banner_long frocks.png';
import short_frocks_banner from './Components/Assets/banner_short frocks.png';
import tshirts_banner from './Components/Assets/banner_t-shirts.png';
import PlaceOrder from './Pages/PlaceOrder';
//import home_banner from './Components/Assets/home.png';

 function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop />}/> 
        <Route path='/long frocks' element={<ShopCategory banner={long_frocks_banner} category="long frocks"/>}/>
        <Route path='/short frocks' element={<ShopCategory banner={short_frocks_banner} category="short frocks"/>}/>
        <Route path='/t-shirts' element={<ShopCategory banner={tshirts_banner} category="t-shirts"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
