import React from 'react';
import Header from './components/Header/header'
import Home from './components/Homepage/home';
import Footer from './components/Footer/footer';
import About from './components/About/about';
  import Service from './components/Servicepage/service';
  
  import Casestudy from './components/Casestudy/casestudy'

  import Blog from './components/Blog/blog';
  
  import Contact from './components/Contact/contact';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/services",
      element: <Service/>
    },
    {
      path: "/casestudy",
      element: <Casestudy/>
    },
    {
      path: "/blog",
      element: <Blog/>
    },
    {
      path: "/contact",
      element: <Contact />
    }
   
  ])
 
  return (
     <>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
      </>
  );
};

export default App;
