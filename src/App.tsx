import "./App.css";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Provider from "./components/context";
import Header from "./components/header";
import AdminPage from "./pages/Admin/adminPage";
import MainPage from "./pages/mainPage";
import NotFoundPage from "./pages/notFoundPage";
import ProductPage from "./pages/productPage";
import ProductsPage from "./pages/productsPage";
import ContactFormPage from "./pages/contactFormPage";
import DeliveryPage from "./pages/deliveryPage";
import PaymentPage from "./pages/paymentPage";
import OrderConfirmationPage from "./pages/orderconfirmation";

function App() {
  return (

        <BrowserRouter>
          <Provider>
            <Header/>
              <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path='productspage' element={<ProductsPage/>}/>
                <Route path='productspage/:clothing' element={<ProductPage />} />
                <Route path='admin' element={<AdminPage/>} />
                <Route path='dina-uppgifter' element={<ContactFormPage/>}/>
                <Route path='dina-uppgifter/frakt' element={<DeliveryPage/>}/>
                <Route path='dina-uppgifter/frakt/betalning' element={<PaymentPage/>}/>
                <Route path='dina-uppgifter/frakt/betalning/orderconfirmation' element={<OrderConfirmationPage/>}/>

                  
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
          </Provider>
        </BrowserRouter> 

  );
}

export default App;
