import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ProductPage from './pages/productPage';
import NotFoundPage from './pages/notFoundPage';
import ProductsPage from './pages/productsPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='productspage' element={<ProductsPage/>}>
        </Route>

      </Route>
      <Route path='productspage/:clothing' element={<ProductPage />} />

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
