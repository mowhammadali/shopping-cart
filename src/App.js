import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import "./App.css";

// componets
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';

// contexts
import ProductContextProvider from './Contexts/ProductContextProvider';
import CartContextProvider , {cartContext} from './Contexts/CartContextProvider';

const App = () => {

    return (
        <div className="App">
            <ProductContextProvider>
                <CartContextProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/products/:id" element={<ProductDetails />}/>
                        <Route path="/products" element={<Store />}/>
                        <Route path="/cart" element={<ShopCart />} />
                        <Route path="*" element={<Navigate to="/products" replace/>}/>
                    </Routes>
                </CartContextProvider>
            </ProductContextProvider>
        </div>
    );
};

export default App;