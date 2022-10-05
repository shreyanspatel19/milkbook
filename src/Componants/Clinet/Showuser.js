import React from "react";

import { useEffect, useState } from "react";
import {  useNavigate, useParams} from "react-router-dom";

// function myFunction() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }       
//     }
//   }


export default function Showuser() {
  let params = useParams();
    const [data, setData] = useState([]);
     const navigate = useNavigate();
    
    useEffect(() => {
      
        fetch(
          "https://thehappyhomedecor.com/Unique_MilkBook/unique_api/api/Customer/showAllCustomer.php?apikey=123&company_sno=1"
          
        )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            setData(res);
          });
      
    }, []);
    var i=1;
    const  customerdetails = data.map((cus) =>{
      return (
        <><tr key={cus.customer_sno}>
         <td>{i++}</td>
    <td>{cus.customer_name}</td>
    <td  className=" text-center " ><button type="button" class="btn btn-success"data-mdb-toggle="modal" data-mdb-target="#exampleModal" onClick={() => { 
                  navigate("/client/Edituser/"+cus.customer_sno) 
                }}>EDIT</button></td>
    <td className=" text-center " ><button type="button" class="btn btn-danger"  onClick={() => {
                  fetch(
                    "https://thehappyhomedecor.com/Unique_MilkBook/unique_api/api/Customer/deleteCustomer.php?apikey=123&customer_sno="+cus.customer_sno,
                    {
                      method: "POST"
                    }  
                  ).then(() => {
                    console.log(params.customer_sno);
                    navigate("/client/Showuser")
                  });
                }}>delete</button></td>
      </tr>  </>
      );
    });

  return (
    <>
    
        <div id="layoutSidenav_content">
            
        <div class="container-fluid px-4">
                       
                        <div class=" mb-4">
                            <div class="">
                                <i class="fas fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div class="">
                                <table id="" className="mt-3 table table-sm Tablesborder table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th className="text-center" data-mdb-toggle="modal" data-mdb-target="#exampleModal">EDIT</th>
                                            <th className="text-center">DELETE</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>EDIT</th>
                                            <th>DELETE</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>

                                        
                                            {customerdetails}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
          </div>
    </>
  );
}
