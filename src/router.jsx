import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import DetailProduct from './pages/detail'
import AddProduct from './pages/addProduct';
import LayoutAuth from './pages/auth/auth';
import EditProduct from './pages/editProduct';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/layout" element={<LayoutAuth />} />
      </Routes>
    </BrowserRouter>
  );
}