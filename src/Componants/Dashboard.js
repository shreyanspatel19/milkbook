import React from 'react'
import Header from './Header'
import Sidenav from './Sidenav'


export default function Dashboard() {
  return (
    <>
    <Header/>
    
    <div id="layoutSidenav">
    <Sidenav/>
    </div>
    </>
  )
}
