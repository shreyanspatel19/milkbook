import React from 'react';
// import { a} from 'react-router-dom';



export default function Sidenav() {
  return (
<div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <a class="nav-link" href="index.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            
                            <div class="sb-sidenav-menu-heading">Interface</div>
                            <a class="nav-link" href="Add-User.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Add-User
                            </a>
                            <a class="nav-link" href="User-Details.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                User Details
                            </a>                            
                            <a class="nav-link" href="charts.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Calculation-User

                            </a>                            
                            <div class="sb-sidenav-menu-heading">Support</div>
                            <a class="nav-link" href="Settings.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Settings
                            </a>
                            <a class="nav-link" href="HelpSupport.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Help and Contact Us
                            </a>

                            <a class="nav-link" href="HowTouse.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                How to Use ?
                            </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Unique IT Solution
                    </div>
                </nav>
            </div>
)
}