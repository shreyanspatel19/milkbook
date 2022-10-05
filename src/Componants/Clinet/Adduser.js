import React from 'react';
import {
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import {  useState,useEffect } from "react";
import {  useNavigate, useParams} from "react-router-dom";

export default function Adduser() {
  let params = useParams();

  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    if (params.id> 0) {
      console.log(5632)
      fetch(
        "https://thehappyhomedecor.com/Unique_MilkBook/unique_api/api/Customer/showCustomerById.php?apikey=123&customer_sno=" + params.id,
        {
          method: "GET"
        }
        
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res[0]);
        });
        console.log(data)
    }
  }, []);
  return (
    <>
    
      <div id="layoutSidenav_content">
        <div className='container-fluid px-4' >
                        <h1 class="mt-4">{!params.id > 0 && "Add "} {params.id > 0 && "Edit "}{params.id}Customer Details</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Add-user</li>
                        </ol>

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
      <div className='row'>
        <div className='col-12' >
        <button style={{width:"100%"}} class="btn btn-primary"   onClick={(e)=>{
              if (params.id > 0) {
                fetch(
                  "https://thehappyhomedecor.com/Unique_MilkBook/unique_api/api/Customer/editCustomer.php?apikey=123&customer_sno=" +
                    params.id,
                  {
                    method: "POST",
                    body: JSON.stringify(data),
                    // headers: {
                    //   "Content-Type": "application/json"
                    // }
                  }
                ).then(() => {
                  navigate("/client/Dashboard");
                });
                }
                else{
                  fetch(
                    "https://thehappyhomedecor.com/Unique_MilkBook/unique_api/api/Customer/addCustomer.php?apikey=123",
                    {
                      method: "POST",
                      body: JSON.stringify(data)
                      // headers: {
                      //   "Content-Type": "application/json"
                      // }
                    }
                  ).then(() => {
                    navigate("/client/Showuser");
                  });
                }

                  e.preventDefault();
              }}>Create an account{JSON.stringify(data) }</button>
        </div>
      </div>
        </div>
    
    </div>
        </>
  );
}

