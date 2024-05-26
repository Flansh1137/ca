import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
// import Header from './components/Header/header';
import Home from './components/Homepage/home';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import Service from './components/Servicepage/service';
import Career from './components/Career/career';
import Blog from './components/Blog/blog';
import Contact from './components/Contact/contact';
import ErrorBoundary from './components/ErrorBoundary';
import { Navbar, Topper } from './components/Header/header';

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
};

export default App;
