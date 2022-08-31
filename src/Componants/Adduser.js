import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import Header from './Header';
import Sidenav from './Sidenav';
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function Adduser() {
  const navigate = useNavigate();
  const [data, setData] = useState({clientid:1});
  

  useEffect(() => {
    fetch(
        "https://thehappyhomedecor.com/unique/api/Customer/addCustomer.php?apikey=123",
        {
          method: "POST",
          body: JSON.stringify(data),
          // headers: {
          //   "Content-Type": "application/json"
          // }
          
        }
      )
      .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    
  }, []);
  
  return (
    <>
    <Header/>
    <div id="layoutSidenav">
    <Sidenav/>
      <div id="layoutSidenav_content">
        <div className='container-fluid px-4' >
                        <h1 class="mt-4">Add Customer Details</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Add-user</li>
                        </ol>
          
        <MDBInput value={data.customername}
              onChange={(e) => {
                setData({  ...data,customerid: e.target.value });
              }} wrapperClass='mb-4' id='form6Example10' label='Customer id' />

      <MDBInput value={data.customername}
              onChange={(e) => {
                setData({ ...data, customername: e.target.value });
              }} wrapperClass='mb-4' id='form6Example3' label='Customer name' />

      <MDBInput value={data.customermobilenumber}
              onChange={(e) => {
                setData({ ...data, customermobilenumber: e.target.value});
              }} wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone Number' />
      <MDBInput value={data.customerarea}
              onChange={(e) => {
                setData({ ...data, customerarea: e.target.value });
              }} wrapperClass='mb-4' id='form6Example4' label='Area' />
      <MDBInput value={data.customeradress}
              onChange={(e) => {
                setData({...data,  customeradress: e.target.value });
              }} wrapperClass='mb-4' id='form6Example4' label='Adress' />
      <MDBInput value={data.liter}
              onChange={(e) => {
                setData({ ...data, liter: e.target.value });
              }} wrapperClass='mb-4' type='number' id='form6Example5' label='Milk Liter' />
      <MDBInput value={data.customermilkprice}
              onChange={(e) => {
                setData({ ...data, customermilkprice: e.target.value });
              }} wrapperClass='mb-4' type='number' id='form6Example9' label='Milk Price' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form6Example8'
        label='Create an account?'
        defaultChecked
      />

      <MDBBtn className='mb-4' type='submit' block  onClick={() => {
                  fetch(
                    "https://thehappyhomedecor.com/unique/api/Customer/addCustomer.php?apikey=123",
                    {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/");
                  });
              }}
             >
      Create an account
      </MDBBtn>
        </div>
    
    </div>
    </div>
        </>
  );
}


// import React from 'react';

// export default function Dashboard() {
//     return (
//       <>
//         <div class="container-fluid px-4">
//                         <h1 class="mt-4">addCustomerDetails</h1>
//                         <ol class="breadcrumb mb-4">
//                             <li class="breadcrumb-item active">Add-user</li>
//                         </ol>
//                         <form>
//                             {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
//                             <div class="row mb-4">
//                               <div class="col">
//                                 <div class="form-outline">
//                                   <input type="text" id="form6Example1" class="form-control" />
//                                   <label class="form-label" for="form6Example1">Customer name</label>
//                                 </div>
//                               </div>
//                               {/* <!-- <div class="col">
//                                 <div class="form-outline">
//                                   <input type="text" id="form6Example2" class="form-control" />
//                                   <label class="form-label" for="form6Example2">Last name</label>
//                                 </div>
//                               </div> --> */}
//                             </div>
                          
//                             {/* <!-- Text input -->
//                             <!-- <div class="form-outline mb-4">
//                               <input type="text" id="form6Example3" class="form-control" />
//                               <label class="form-label" for="form6Example3">Company name</label>
//                             </div> --> */}
//                             <div class="form-outline mb-4">
//                                 <input type="number" id="form6Example6" class="form-control" />
//                                 <label class="form-label" for="form6Example6">Phone Number</label>
//                               </div>
//                             {/* <!-- Text input --> */}
//                             <div class="form-outline mb-4">
//                               <input type="text" id="form6Example4" class="form-control" />
//                               <label class="form-label" for="form6Example4">Address</label>
//                             </div>
//                             <div class="form-outline mb-4">
//                                 <input type="text" id="form6Example4" class="form-control" />
//                                 <label class="form-label" for="form6Example4">Area</label>
//                               </div>
//                             {/* <!-- Email input -->
//                             <!-- <div class="form-outline mb-4">
//                               <input type="email" id="form6Example5" class="form-control" />
//                               <label class="form-label" for="form6Example5">Email</label>
//                             </div> --> */}
//                             <div class="form-outline mb-4">
//                                 <input type="number" id="form6Example6" class="form-control" />
//                                 <label class="form-label" for="form6Example6">Milk Liter</label>
//                               </div>
//                             {/* <!-- Number input --> */}
//                             <div class="form-outline mb-4">
//                                 <input type="number" id="form6Example6" class="form-control" />
//                                 <label class="form-label" for="form6Example6">Milk Price</label>
//                               </div>
//                             {/* <!-- Message input --> */}
//                             <div class="form-outline mb-4">
//                               <textarea class="form-control" id="form6Example7" rows="1"></textarea>
//                               <label class="form-label" for="form6Example7">Additional information</label>
//                             </div>
                          
//                             {/* <!-- Checkbox --> */}
//                             {/* <!-- <div class="form-check d-flex justify-content-center mb-4">
//                               <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
//                               <label class="form-check-label" for="form6Example8"> Create an account? </label>
//                             </div> --> */}
                          
//                             {/* <!-- Submit button --> */}
//                             <button type="submit" class="btn btn-primary btn-block mb-4">Create an account</button>
//                     </form>
//                     </div>
                
//       </>
//     )
// }