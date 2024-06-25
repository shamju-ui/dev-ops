import React from 'react';
import Header from './components/layout/header';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDescription from './pages/ProductDescription';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import CategoryUI from './components/CategoryUI';
import Register from './pages/Register';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import store from './app/store';


function App() {

  return (
    <div className="App" >
      
      <BrowserRouter>
      <Provider store={store}>
      <CartProvider>
      <Header />
    
       <Routes>
        <Route path="/" element={ <Navigate to="/home" />}></Route> 
        <Route path="/home"element={<Home />}></Route> 
        <Route path="/cart"element={<Cart />}></Route> 
        <Route path="/login"element={<Login />}></Route> 
        <Route path="/register"element={<Register />}></Route> 
        <Route path="/product/:id" element={<ProductDescription />} />
       </Routes>
       </CartProvider>
       </Provider>
       </BrowserRouter>
    </div>
  );
}

export default App;
