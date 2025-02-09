
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from './pages/Home'
import Service from './pages/Service'
import Footer from "./components/Footer";
import Prop from "./components/Prop";
import Card from "./pages/Cards/Cards";
import Cards from "./pages/Cards/Cards";

// import GridTwo from './components/GridTwo'
// import Dashboard from './components/Dashboard'

// import Grid from './components/Grid'

function App() {


  return (
    <>
    
      <BrowserRouter>
      <header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Service' element={<Service />} />
          <Route path='/props' element={<Prop/>} />
          <Route path='/Card' element={<Cards/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
