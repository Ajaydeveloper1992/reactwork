import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from "./pages/Home";
import About from "./pages/About";
import Marketing from "./pages/Marketing";
import Website from "./pages/Website";
import SEM from "./pages/SEM";
import Referral from "./pages/Referral";
import Contact from "./pages/Contact";
import Managed_IT from "./pages/Managed_IT";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import NoPage from "./pages/NoPage";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="website" element={<Website />} />
          <Route path="SEM" element={<SEM />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Managed_IT" element={<Managed_IT />} />
          <Route path="services" element={<Services />} />
          <Route path="resources" element={<Resources />} />
          <Route path="referral" element={<Referral />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
