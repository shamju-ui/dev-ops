import React from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../interface/product';
import { useCart } from '../../context/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
interface ProductDescriptionCardProps {
    product: IProduct;
  }
const ProductDescriptionCard: React.FC<ProductDescriptionCardProps> = ( ProductDescription) => {
    const { id } = useParams();
    const { addToCart } = useCart();

    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch<AppDispatch>();
    return (
       <>
        <div className="container mx-auto p-6 bg-white  rounded-lg mt-3">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img src={ProductDescription.product.image} alt={ProductDescription.product.title} className="w-full h-auto object-cover" />
        </div>
        <div className="w-full md:w-2/3 md:pl-6">
          <h1 className="text-2xl font-semibold mb-2">{ProductDescription.product.title}</h1>
          <p className="text-gray-600 mb-2">{ProductDescription.product.description}</p>
          <div className="flex items-center mb-2">
            <span className="text-green-500 font-bold text-lg mr-2">{ProductDescription.product.rating.rate}★</span>
            <span className="text-gray-600">({ProductDescription.product.rating.count})</span>
            <span className="ml-2 text-blue-500">Assured</span>
          </div>
          <div className="flex items-center mb-2">
          <div className="text-red-600 font-bold text-2xl mb-2">{ProductDescription.product.price} <span className="text-gray-500 line-through">{200}</span> <span className="text-green-600 text-lg">2 off</span></div>
          <div className="mb-4">
            {/* <p className="text-gray-800 font-semibold mb-2">Available offers</p> */}
            {/* <ul className="list-disc list-inside text-gray-600">
              {product.offers.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul> */}
          </div>
          </div>
          <div className="flex">
            <button  onClick={() => addToCart(ProductDescription.product)} className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mr-2">ADD TO CART</button>
            <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
       </>
    );
}
export default ProductDescriptionCard