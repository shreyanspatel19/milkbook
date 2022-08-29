// import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Dashboard from './Componants/Dashboard';
import Adduser from './Componants/Adduser';
// import Sidenav from "./Componants/Sidenav";
import Showuser from "./Componants/Showuser";
// import Try from './Componants/Try'
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
function App() {
  return (
    <>
             

       <Router>
           <Routes>
             <Route path="/" element={<Dashboard/>} />
             <Route path="/Adduser" element={<Adduser/>} />
             {/* <Route path="/sidenav" element={<Sidenav/>} /> */}
             <Route path="/Showuser" element={<Showuser/>} />
             {/*<Route path="/Adduser" element={<Adduser/>} /> */}
           </Routes>
         
         </Router>       
        
        
      
    </>
  );
}

export default App;

// import './App.css';
// import React from "react";
// import Navbar from './componants/Navbar';
// import Foter from './componants/Foter';
// import About from './componants/About';
// import Designs from './componants/Designs';
// import Contect from './componants/Contect';
// import Home from './componants/Home';



// // https://stackoverflow.com/questions/34418254/how-do-i-add-an-active-class-to-a-link-from-react-router








// function App() {
 

//   return (
//     <>
//       <div className="App">
//         <Router>
//           <Navbar/>
//           <Routes>
//             <Route path="/" element={<Home/>} />
//             <Route path="/contect" element={<Contect />} />
//             <Route path="/design" element={<Designs />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
         
//           <Foter />
//         </Router>
       

//       </div>
//     </>
//   );
// }

// export default App;
