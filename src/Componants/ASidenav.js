import React from 'react';
import { NavLink} from 'react-router-dom';
// import { HashLink } from "react-router-hash-link";

export default function ASidenav() {
  return (
<div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <NavLink  className="nav-link" to="/Dashboard"  >
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                akraman
                            </NavLink>
                            
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <NavLink className="nav-link" to="/Adduser">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                pratighat
                            </NavLink>
                            <NavLink className="nav-link" to="/Userdetails">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                User 
                            </NavLink> 
                            <NavLink className="nav-link" to="/Showuser">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Show-User
                            </NavLink>                            
                            <div className="sb-sidenav-menu-heading">Support</div>
                            <NavLink className="nav-link" to="/">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Settings
                            </NavLink>
                            <NavLink className="nav-link" to="/">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Help and Contact Us
                            </NavLink>

                            <NavLink className="nav-link" to="/">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                How to Use ?
                            </NavLink>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Unique IT Solution
                    </div>
                </nav>
            </div>
)
}