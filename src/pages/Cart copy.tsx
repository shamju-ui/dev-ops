// src/components/Cart.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { IProduct } from '../interface/product';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate();

  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (productId: number, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  const totalAmount = cart.reduce((total, product:IProduct) => total + product.price * (product.quantity || 1), 0);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg mt-3 shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left">Description</th>
            <th className="py-2 px-4 text-center">Size</th>
            <th className="py-2 px-4 text-center">Quantity</th>
            <th className="py-2 px-4 text-center">Remove</th>
            <th className="py-2 px-4 text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product: IProduct) => (
            <tr key={product.id} className="border-b">
              <td className="py-2 px-4 flex items-center">
                <img onClick={()=>navigate(`/product/${product.id}`)} src={product.image} alt={product.title} className="w-16 h-16 object-cover mr-4 hover:cursor-pointer" />
                <div>
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-gray-600">Product Code: {product.id}</p>
                </div>
              </td>
              <td className="py-2 px-4 text-center">
                <select className="border rounded p-2">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => handleQuantityChange(product.id, (product.quantity || 1) + 1)}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    +
                  </button>
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
                    className="w-12 text-center border mx-2"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange(product.id, (product.quantity || 1) - 1)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                </div>
              </td>
              <td className="py-2 px-4 text-center">
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded"
                >
                  x
                </button>
              </td>
              <td className="py-2 px-4 text-right">₹{product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-6">
        <div className="w-full md:w-1/2">
          <div className="flex justify-between py-2 border-t">
            <span>Discount</span>
            <span>₹0.00</span>
          </div>
          <div className="flex justify-between py-2 border-t">
            <span>Delivery</span>
            <span>₹0.00</span>
          </div>
          <div className="flex justify-between py-2 border-t">
            <span>Subtotal</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-t font-bold">
            <span>Total</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Please enter promo code"
          className="border rounded p-2 w-full mb-4"
        />
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Apply Discount</button>
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded">Checkout</button>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded">Update Quantity</button>
          <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
