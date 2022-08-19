import React from 'react';
// import { a} from 'react-router-dom';

const sidebarToggle = document.body.querySelector('#sidebarToggle');
if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // console.log("78yuguh")

    // }
    console.log("yuguh")
    sidebarToggle.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
}

export default function Header() {
  return (
   <>   {/* <!-- ======= Header ======= --> */}
  <heade   id="heefader" className="fixed--top ">
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* <!-- Navbar Brand--> */}
            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            {/* <!-- Sidebar Toggle--> */}
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            {/* <!-- Navbar Search--> */}
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            {/* <!-- Navbar start--> */}
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="Settings.html">Settings</a></li>
                        <li><a class="dropdown-item" href="/">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
            {/* <!-- Navbar end--> */}
        </nav>
        {/* <!-- side nav bar start --> */}
        {/* <div id="layoutSidenav">
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
            
          
        </div> */}
        {/* <!-- side nav bar end --> */}
        {/* <div id="layoutSidenav"> */}
            {/* <div id="layoutSidenav_nav">
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
            </div> */}
            
        
        {/* </div> */}
  </heade>
   {/* <!-- End Header -->  */}
   </> 

  )
}
