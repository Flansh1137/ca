import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Header from './components/Header/header';
import Home from './components/Homepage/home';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import Service from './components/Servicepage/service';
import Casestudy from './components/Casestudy/casestudy';
import Blog from './components/Blog/blog';
import Contact from './components/Contact/contact';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <Routes> {/* Wrap your Route components within Routes */}
          <Route path="/" element={<Home />} /> {/* Use element prop instead of component */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/casestudy" element={<Casestudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
};

export default App;
