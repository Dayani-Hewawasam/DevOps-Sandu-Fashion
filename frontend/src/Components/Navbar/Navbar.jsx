import React, { useContext, useState ,useRef} from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown1_icon from '../Assets/dropdown1_icon.png'

export const Navbar = () => {

const [menu,setMenu] = useState("shop");
const{getTotalCartItems} = useContext(ShopContext);
const menuRef = useRef();

const dropdown_toggle =(e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SANDU FASHION</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown1_icon} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none' }} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("long frocks")}}><Link style={{textDecoration: 'none' }} to='/long frocks'>Maxi/Midi Dress</Link>{menu==="long frocks"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("short frocks")}}><Link style={{textDecoration: 'none' }} to='/short frocks'>Mini Dress</Link>{menu==="short frocks"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("t-shirts")}}><Link style={{textDecoration: 'none' }} to='/t-shirts'>T-Shirt/Blouse</Link>{menu==="t-shirts"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{
                localStorage.removeItem('auth-token');
                window.location.replace('/')}}>Logout</button>
            :        <Link to='/login'><button>Login</button></Link>}

        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar