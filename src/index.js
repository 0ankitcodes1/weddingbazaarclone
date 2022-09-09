import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Service from "./pages/Service";
import Career from "./pages/Career";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import BlogDetails from "./pages/BlogDetails";
import CareerDetails from "./pages/CareerDetails";
import BlogCategory from "./pages/BlogCategory";
import RegisterAsVendor from "./pages/RegisterAsVendor";
import ServiceDetails from "./pages/ServiceDetails";
import './index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="login" element={<Login />} />
          <Route path="service" element={<Service />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="register-as-vendor" element={<RegisterAsVendor />} />
          <Route path="career/career-details" element={<CareerDetails />} />
          <Route path="service/service-details" element={<ServiceDetails />} />
          <Route path="blog/category" element={<BlogCategory />} />
          <Route path="blog/category/blog-details" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);