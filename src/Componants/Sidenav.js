import React from 'react';
import { NavLink} from 'react-router-dom';



export default function Sidenav() {
  return (
<div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <NavLink className="nav-link" to="/">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </NavLink>
                            
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <NavLink className="nav-link" to="/Adduser">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Add-User
                            </NavLink>
                            {/* <NavLink className="nav-link" to="/User-Details.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                User Details
                            </NavLink>                             */}
                            <NavLink className="nav-link" to="/Showuser">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Show-User
                            </NavLink>                            
                            <div className="sb-sidenav-menu-heading">Support</div>
                            <a className="nav-link" href="Settings.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Settings
                            </a>
                            <a className="nav-link" href="HelpSupport.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Help and Contact Us
                            </a>

                            <a className="nav-link" href="HowTouse.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                How to Use ?
                            </a>
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