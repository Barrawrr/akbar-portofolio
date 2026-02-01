import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import PreLoader from "./components/PreLoader.jsx";
import Footer from "./components/Footer.jsx";

import AboutDetail from "./pages/AboutDetail.jsx";
import Portfolio1 from "./pages/Portfolio1.jsx";
import Portfolio2 from "./pages/Portfolio2.jsx";
import Portfolio3 from "./pages/Portfolio3.jsx";
import Portfolio4 from "./pages/Portfolio4.jsx";
import Portfolio5 from "./pages/Portfolio5.jsx";
import Portfolio6 from "./pages/Portfolio6.jsx";
import Portfolio7 from "./pages/Portfolio7.jsx";
import Portfolio8 from "./pages/Portfolio8.jsx";
import Portfolio9 from "./pages/Portfolio9.jsx";
import Portfolio10 from "./pages/Portfolio10.jsx";
import Portfolio11 from "./pages/Portfolio11.jsx";
import Portfolio12 from "./pages/Portfolio12.jsx";
import Portfolio13 from "./pages/Portfolio13.jsx";
import Portfolio14 from "./pages/Portfolio14.jsx";

import "./index.css";
import "remixicon/fonts/remixicon.css";
import BlogDetail from "./pages/BlogDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PreLoader />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutDetail />} />
        <Route path="/blog" element={<BlogDetail />} />
        {/* Portfolio Detail */}
        <Route path="/portfolio/1" element={<Portfolio1 />} />
        <Route path="/portfolio/2" element={<Portfolio2 />} />
        <Route path="/portfolio/3" element={<Portfolio3 />} />
        <Route path="/portfolio/4" element={<Portfolio4 />} />
        <Route path="/portfolio/5" element={<Portfolio5 />} />
        <Route path="/portfolio/6" element={<Portfolio6 />} />
        <Route path="/portfolio/7" element={<Portfolio7 />} />
        <Route path="/portfolio/8" element={<Portfolio8 />} />
        <Route path="/portfolio/9" element={<Portfolio9 />} />
        <Route path="/portfolio/10" element={<Portfolio10 />} />
        <Route path="/portfolio/11" element={<Portfolio11 />} />
        <Route path="/portfolio/12" element={<Portfolio12 />} />
        <Route path="/portfolio/13" element={<Portfolio13 />} />
        <Route path="/portfolio/14" element={<Portfolio14 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
