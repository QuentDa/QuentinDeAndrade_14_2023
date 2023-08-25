import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Employees from './pages/Employees/Employees';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='Wrapper xl:flex'>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          {/* PAGE 404 */}
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);
