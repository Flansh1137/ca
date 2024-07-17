import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
// import Header from './components/Header/header';
import Home from './components/Homepage/home';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import Service from './components/Servicepage/service';
import Career from './components/Career/career';
import Pricing from './components/Pricing/pricing';
import Contact from './components/Contact/contact';
import ErrorBoundary from './components/ErrorBoundary';
import { Navbar, Topper } from './components/Header/header';
import BlogPage from './components/Blog/BlogPage';
import TestomonialVideo from './components/TestomonialVideo/video';


const App = () => {
  return (
    <Router>
      <ErrorBoundary>
      <Topper />
      <Navbar />
        <Routes> {/* Wrap your Route components within Routes */}
          <Route path="/" element={<Home />} /> {/* Use element prop instead of component */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/career" element={<Career />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/videos" element={<TestomonialVideo />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
};

export default App;
