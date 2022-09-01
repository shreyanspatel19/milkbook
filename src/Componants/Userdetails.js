import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";
import { Navigate, useNavigate} from "react-router-dom";

export default function Adduser() {
  const navigate = useNavigate();
  const [data, setData] = useState({clientid:1});

  return (
    <>
    
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
                  // fetch(
                  //   "https://thehappyhomedecor.com/unique/api/Customer/addCustomer.php?apikey=123",
                  //   {
                  //     method: "POST",
                  //     body: JSON.stringify(data),
                  //     headers: {
                  //       "Content-Type": "application/json"
                  //     }
                  //   }
                  // ).then(() => {
                  //   navigate("/");
                  // });
              }}
             >
      Create an account
      </MDBBtn>
        </div>
    
    </div>
        </>
  );
}

