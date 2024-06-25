import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { IProduct } from "../interface/product";

const PriceDetails: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch<AppDispatch>();
    const totalAmount = cart.reduce((total, product: IProduct) => total + product.price * (product.quantity || 1), 0);
    return (
      <div className="border p-4 rounded-md">
        <h2 className="font-bold mb-2">PRICE DETAILS</h2>
        <div className="flex justify-between mb-2">
          <span>Price ({cart.length} item item{ cart.length > 1 ? 's' : '' })</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery Charges</span>
          <span className="line-through">₹240</span> <span className="text-green-500">FREE</span>
        </div>
        <div className="flex justify-between font-bold mb-2">
          <span>Total Payable</span>
          <span>₹167,988</span>
        </div>
        <div className="text-green-500">
          Your Total Savings on this order ₹1,34,512
        </div>
      </div>
    );
  };
  
  export default PriceDetails;