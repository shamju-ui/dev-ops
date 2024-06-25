import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import { productApi } from "../services/API/productApi";
import { categoryApi } from "../services/API/categoryApi";


const store = configureStore({
    reducer:{
        cart:cartSlice,
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware,categoryApi.middleware),
    })
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;