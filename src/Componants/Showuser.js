import React from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";

import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

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

export default function Showuser() {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const params = useParams();
  
    useEffect(() => {
      if (params.id > 0) {
        fetch(
          "https://thehappyhomedecor.com/unique/api/Customer/showCustomer.php?clientid=1&apikey=123",
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
      }
    }, []);
    console.log(data);
  return (
    <>
      <Header />

      <div id="layoutSidenav">
        <Sidenav />
        <div id="layoutSidenav_content">
            
        <div class="container-fluid px-4">
                        <h1 class="mt-4">Tables</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Tables</li>
                        </ol>
                        <div class="card mb-4">
                            
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div class="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th className="text-center">EDIT</th>
                                            <th className="text-center">DELETE</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Salary</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>

                                        <tr>
                                            <td>Prescott Bartlett</td>
                                            <td>Technical Author</td>
                                            <td>London</td>
                                            <td  className=" text-center " ><button type="button" class="btn btn-success">edit</button></td>
                                            <td className=" text-center " ><button type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <td>Gavin Cortez</td>
                                            <td>Team Leader</td>
                                            <td>San Francisco</td>
                                            <td  className=" text-center " ><button type="button" class="btn btn-success">edit</button></td>
                                            <td className=" text-center " ><button type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <td>Martena Mccray</td>
                                            <td>Post-Sales support</td>
                                            <td>Edinburgh</td>
                                            <td  className=" text-center " ><button type="button" class="btn btn-success">edit</button></td>
                                            <td className=" text-center " ><button type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <td>Hermione Butler</td>
                                            <td>Regional Director</td>
                                            <td>London</td>
                                            <td  className=" text-center " ><button type="button" class="btn btn-success">edit</button></td>
                                            <td className=" text-center " ><button type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <td>Lael Greer</td>
                                            <td>Systems Administrator</td>
                                            <td>London</td>
                                            <td  className=" text-center " ><button type="button" class="btn btn-success">edit</button></td>
                                            <td className=" text-center " ><button type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <td>Jonas Alexander</td>
                                            <td>Developer</td>
                                            <td>San Francisco</td>
                                            <td  className=" text-center " ><button type="button" class="btn btn-success">edit</button></td>
                                            <td className=" text-center " ><button type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <td>Shad Decker</td>
                                            <td>Regional Director</td>
                                            <td>Edinburgh</td>
                                            <td  className=" text-center " ><button type="button" class="btn btn-success">edit</button></td>
                                            <td className=" text-center " ><button type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <td>Michael Bruce</td>
                                            <td>Javascript Developer</td>
                                            <td>Singapore</td>
                                            <td  className=" text-center " ><button type="button" class="btn btn-success">edit</button></td>
                                            <td className=" text-center " ><button type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <td>Donna Snider</td>
                                            <td>Customer Support</td>
                                            <td>New York</td>
                                            <td  className=" text-center " ><button type="button" class="btn btn-success">edit</button></td>
                                            <td className=" text-center " ><button type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
          </div>
          
        
      </div>
    </>
  );
}
