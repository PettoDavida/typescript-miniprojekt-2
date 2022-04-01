import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Provider from "./components/context";
import Header from "./components/header";
import AdminPage from "./pages/Admin/adminPage";
import MainPage from "./pages/mainPage";
import NotFoundPage from "./pages/notFoundPage";
import ProductPage from "./pages/productPage";
import ProductsPage from "./pages/productsPage";
import PaymentMethod from "./components/payment";

function App() {
  return (

   /* <PaymentMethod />*/
             <BrowserRouter>
          <Provider>
            <Header/>
              <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path='productspage' element={<ProductsPage/>}/>
                <Route path='productspage/:clothing' element={<ProductPage />} />
                <Route path='admin' element={<AdminPage/>} />

                <Route path='*' element={<NotFoundPage />} />
              </Routes>
          </Provider>
        </BrowserRouter> 

  );
}

export default App;
