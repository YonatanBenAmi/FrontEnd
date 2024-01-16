import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Managers from "./pages/Managers";
import ContactUs from "./pages/ContactUs";
import Price from "./pages/Price";
import Careers from "./pages/Careers";
import ScrollTop from "./components/ScrollTop";
import Payments from "./pages/Payments";
import './App.css';

export default function App() {
  return (
    <Layout>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/managers" element={<Managers />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/price" element={<Price />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </Layout>
  );
}
