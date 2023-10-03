import React, { Component } from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import About from './views/about/about';
import Contact from"./views/contact/contact";
import Home from"./views/home/home";



const router =createBrowserRouter(
  [
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/Contact',
          element: <Contact/>
        }
  ]
  );


const root = ReactDOM.createRoot(document.getElementById('root'));





root.render(
  
  <>
  
    <RouterProvider router={router}/>

    
   
  </>

);