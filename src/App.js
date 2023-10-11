import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import './App.css';
import HomePage from "./container/HomePage";
// import Product from "./container/Product";
// import ProductType from "./container/ProductType";
// import ProductDetail from "./container/ProductDetail";
// import UngDung from "./container/UngDung";
import GioiThieu from "./container/GioiThieu";
import Footer from "./components/Footer";
import {useTranslation} from "react-i18next";
import HeaderFinal from "./components/HeaderFinal";
// import ProductMockData from "./container/ProductMockData";

function App() {
    const {t, i18n} = useTranslation()
    if (!localStorage.getItem("locales")) {
        localStorage.setItem("locales", "vi")
    }
    return (
        <div>
            <HeaderFinal/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    {/* <Route path="/product-catalogue" element={<Product/>}/>
                    <Route path="/product-catalogue/:id" element={<Product/>}/>
                    <Route path="/application" element={<UngDung/>}/> */}
                    <Route path="/introduce" element={<GioiThieu/>}/>
                    {/* <Route path="/product/categories/:type" element={<ProductType/>}/>
                    <Route path="/product-catalogue/:type/:id" element={<ProductDetail/>}/>
                    <Route path="/product-mock/:id" element={<ProductMockData/>}/> */}
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
