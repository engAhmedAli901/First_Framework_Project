// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './components/About/About.jsx';
import Layout from './components/Layout/Layout.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';
import Notfound from './components/NotFound/Notfound.jsx';

let x = createBrowserRouter([
 {path:"", element:<Layout />, children:[
  {index:true,element:<Home />},
  {path:"about",element:<About />},
  {path:"portfolio",element:<Portfolio />},
  {path:"contact",element:<Contact />},
  {path:"*",element:<Notfound />}
 ]}
])

function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
