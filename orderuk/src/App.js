import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './pages/login';
import Home from './pages/home';
import Header from './components/header';
import Footer from "./components/footer";
import ProductPage from './pages/product';
import Checkout from './pages/checkout';
import Payment from './pages/payment';
import Profile from './pages/profile';
import Address from './pages/addresadd';
import Success from './pages/paysuccess';
import { ToastContainer, toast, useToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetUser } from './customhooks';


const App=()=>{
  const [phonecart, setphonecart] = useState(false)
  const user = useGetUser()
    return (
      <div className="App px-2 md:px-5 lg:px-10">
          {window.location.pathname !== '/' && <Header phonecart={phonecart} setphonecart={setphonecart} />}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/cart" element={<ProductPage phonecart={phonecart} setphonecart={setphonecart} />} />
           {user?.data?.name &&
            <>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/address" element={<Address />} />
           </>}
            <Route path="/success" element={<Success />} />
          </Routes>
          <Footer/>
          <ToastContainer />
          </div>
    );
  }

export default App;
