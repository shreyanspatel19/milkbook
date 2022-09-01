// import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from "react-router-dom";
import Dashboard from './Componants/Dashboard';
import Adduser from './Componants/Adduser';
import Showuser from "./Componants/Showuser";
import Header from "./Componants/Header";
import Sidenav from "./Componants/Sidenav";

function App() {
  return (
    <> <BrowserRouter>
    <Routes>
             <Header/>
            <div id="layoutSidenav">
            <Sidenav/>
           
        <Route path='/' element={<Dashboard />}>
            <Route index element={<Dashboard/>} />
            <Route path="/Adduser" element={<Adduser/>} />
            <Route path="/Showuser" element={<Showuser/>} />
        </Route>
        </div>
      
    </Routes>
  
  </BrowserRouter> 
           {/* not a use app.js in this project so ignoer this app.js file --> thx. */}
    </>
  );
}

export default App;
