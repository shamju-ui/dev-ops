import React from 'react';
import logo from '../../assets/images/logo192.png'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
const Header: React.FC = () => {
  const navigate = useNavigate();
  // const cart  = useCart();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <header className="flex items-center justify-between p-4 bg-[#2847F0] text-white shadow-md">
      <div className="flex items-center hover: cursor-pointer" onClick={()=>navigate('/')}>
        <img src={logo} alt="Flipkart Logo" className="h-8 mr-2" />
        {/* <span className="text-sm text-blue-600">Explore <span className="text-yellow-500">Plus</span> <span className="text-yellow-500">✱</span></span> */}
      </div>
      <div className="flex-grow max-w-lg mx-4 md:hidden">
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center cursor-pointer"  onClick={()=>navigate('/login')}>
          <span className="material-icons-outlined mr-1">account_circle</span>
          <span>Login</span>
        </div>
        <div className="flex items-center cursor-pointer relative" onClick={()=>navigate('/cart')}>
          <span className="material-icons-outlined mr-1">shopping_cart</span>
          {cart.length > 0 && (
            <span className="-mt-2 absolute top-0 right-0 bg-red-500 text-white rounded-full h-4 w-4 text-xs flex items-center justify-center">
              {cart.length}
            </span>
          )}
          <div >Cart</div>
         
        </div>
        <div className="flex items-center cursor-pointer">
          <span className="material-icons-outlined mr-1">storefront</span>
          <span>Become a Seller</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <span className="material-icons-outlined">more_vert</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
