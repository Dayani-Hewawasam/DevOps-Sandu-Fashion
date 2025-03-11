import React, { useContext } from 'react';
import './../Pages/CSS/PlaceOrder.css';
import { ShopContext } from '../Context/ShopContext';
import SanduFashionPacking from '../Components/Assets/Sandu Fashion Packing.png';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  return (
    

   
    <form className='place-order' style={{     backgroundImage: `url(${SanduFashionPacking})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center'}}>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

    
        <div className="cartitems-total">
          <h1>CartTotals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>Rs.{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED</button>
        </div>
     
    </form>
  
  );
}

export default PlaceOrder;
