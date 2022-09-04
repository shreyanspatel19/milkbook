import React from "react";

import { useEffect, useState } from "react";

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
    const [data, setData] = useState({});
    
    useEffect(() => {
      
        fetch(
          "https://thehappyhomedecor.com/unique/api/Customer/showAllCustomer.php?apikey=123&company_sno=1",
          {
            method: "GET"
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            setData(res);
          });
      
    }, []);
    var i
    const  customerdetails = data.map((cus) =>{
      return (
        <>
         <td>{i++}</td>
    <td>{cus.customer_name}</td>
    <td  className=" text-center " ><button type="button" class="btn btn-success"data-mdb-toggle="modal" data-mdb-target="#exampleModal">{cus.customer_name}</button></td>
    <td className=" text-center " ><button type="button" class="btn btn-danger">{cus.customer_name}</button></td>
        </>
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
                                <table id="" className="mt-3 table table-sm Tablesborder">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th className="text-center" data-mdb-toggle="modal" data-mdb-target="#exampleModal">EDIT</th>
                                            <th className="text-center">DELETE</th>
                                        </tr>
                                    </thead>
                                    {/* <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Salary</th>
                                        </tr>
                                    </tfoot> */}
                                    <tbody>

                                        <tr>
                                            {customerdetails}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
          </div>
    </>
  );
}
