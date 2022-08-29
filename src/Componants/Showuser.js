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
          <div className=" px-4">
            <div class="mb-4">
              <div class=""> <i class="fas fa-table me-1"></i>DataTable Example</div>
              <div class="">

                <div className="input-group w-25 mb-4 float-end">
                <input type="text"  className=" p-3 form-control d-flex justify-content-end" id="myInput"  onKeyUp={myFunction} placeholder="Search for names.." title="Type in a name"/>
                </div>

                <table id="myTable"  className="table table-striped table-hover" >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td> Njixon</td>
                      <td> Architect</td>
                      <td>Edinburgh</td>
                      <td>10</td>
                      <td>20/04/25</td>
                      <td>$20,800</td>
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
