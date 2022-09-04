import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";
import {  useNavigate} from "react-router-dom";

export default function Adduser() {
  const navigate = useNavigate();
  const [data, setData] = useState({customer_sno:1});
  

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
          setData(res);
        });
    
  }, []);
  
  return (
    <>
    
      <div id="layoutSidenav_content">
        <div className='container-fluid px-4' >
                        <h1 class="mt-4">Add Customer Details</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Add-user</li>
                        </ol>
          
        <MDBInput value={data.company_sno}
              onChange={(e) => {
                setData({  ...data,company_sno: e.target.value });
              }} wrapperClass='mb-4' id='form6Example10' label='Customer id' />

      <MDBInput value={data.customer_name}
              onChange={(e) => {
                setData({ ...data, customer_name: e.target.value });
              }} wrapperClass='mb-4' id='form6Example3' label='Customer name' />

      <MDBInput value={data.customer_contactnumber}
              onChange={(e) => {
                setData({ ...data, customer_contactnumber: e.target.value});
              }} wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone Number' />
      <MDBInput value={data.customer_area}
              onChange={(e) => {
                setData({ ...data, customer_area: e.target.value });
              }} wrapperClass='mb-4' id='form6Example4' label='Area' />
      <MDBInput value={data.customer_adress}
              onChange={(e) => {
                setData({...data,  customer_adress: e.target.value });
              }} wrapperClass='mb-4' id='form6Example4' label='Adress' />
      <MDBInput value={data.customer_avarageliter} 
              onChange={(e) => {
                setData({ ...data, customer_avarageliter: e.target.value });
              }} wrapperClass='mb-4' type='number' id='form6Example5' label='Milk Liter' />
      <MDBInput value={data.customer_milkprice}
              onChange={(e) => {
                setData({ ...data, customer_milkprice: e.target.value });
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
                      // headers: {
                      //   "Content-Type": "application/json"
                      // }
                    }
                  )
                  .then(() => {
                    navigate("/");
                  })
                  ;
              }}
             >
      Create an account{JSON.stringify(data)}
      </MDBBtn>
        </div>
    
    </div>
        </>
  );
}

