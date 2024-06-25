import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interface/product";
import Q from "q";


interface cartState {
    cart: IProduct[];
}
const initialState: cartState = {
    cart: []
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const product = action.payload;
            const existingProduct = state.cart.find(item => item.id == product.id);
            if(existingProduct){
                existingProduct.quantity = ( existingProduct.quantity || 0) + 1;
            }
            else {
                state.cart.push({...product,quantity:1})
            }
        },
        removeFromCart:(state, action:PayloadAction<number>)=>{
            state.cart = state.cart.filter(product=> product.id !== action.payload);
        },
        clearCart:(state)=>{
            state.cart = [];
        },
        updateQuantity: (state, action: PayloadAction<{ productId: number, quantity: number }>) => {
            const { productId, quantity } = action.payload;
            const product = state.cart.find(product => product.id == productId);
            if (product) {
                product.quantity = quantity
            }
        },
    }
})
export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;