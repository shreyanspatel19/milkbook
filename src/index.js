import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './Componants/Login';

import Adduser from './Componants/Clinet/Adduser';
import Dashboard from './Componants/Clinet/Dashboard';
import Header from './Componants/Clinet/Header';
import Showuser from './Componants/Clinet/Showuser';
import Sidenav from './Componants/Clinet/Sidenav';
import Userdetails from './Componants/Clinet/Userdetails';

import ASidenav from './Componants/Agent/ASidenav';
import AHeader from './Componants/Agent/AHeader';


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

function LayoutAgent(){
  return(
      <>
          <AHeader/>
          <div id="layoutSidenav">
          <ASidenav/>
          <Outlet />
          </div>
      </>
  );
}

root.render(
  
  <BrowserRouter>
    <Routes> 
          <Route path='/' element={<Login /> } />
          <Route path='/client' element={<Layout />}>
            <Route path="Adduser" element={<Adduser/>} />
            <Route path="Dashboard" element={<Dashboard/>} />
            <Route path="Edituser/:id" element={<Adduser/>} />
            <Route path="Showuser" element={<Showuser/>} />
            <Route path="Userdetails" element={<Userdetails/>} />
          </Route>

          <Route path='/agent' element={<LayoutAgent />}>

          </Route>
      
    </Routes>
  
  </BrowserRouter> 
  
);
