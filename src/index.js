import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Adduser from './Componants/Adduser';
import Dashboard from './Componants/Dashboard';
import Header from './Componants/Header';
import Showuser from './Componants/Showuser';
import Sidenav from './Componants/Sidenav';
import Userdetails from './Componants/Userdetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Layout(){
    return(
        <>
            <Header/>
            <div id="layoutSidenav">
            <Sidenav/>
            <Outlet />
            </div>
        </>
    );
}
root.render(
  
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard/>} />
            <Route path="/Adduser" element={<Adduser/>} />
            <Route path="/Showuser" element={<Showuser/>} />
            <Route path="/Userdetails" element={<Userdetails/>} />
            
        </Route>
      
    </Routes>
  
  </BrowserRouter> 
  
);
