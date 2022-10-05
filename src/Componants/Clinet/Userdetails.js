import React from 'react';


export default function Userdetails() {

  return (
    <>
    <div id="layoutSidenav_content">
      <div class="container-fluid px-4">
          <div>
              <h3 class="mt-4">Customer id :</h3>
              <form class=" d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                  <div class="input-group">
                      <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
              <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>

                  </div>
                  
              </form>
          </div>
          <div>
          <div>
              <h1 class="mt-3 text-center">
                  UNIQUE DAIRY FARM <hr/>
              </h1>
          </div>
          <div>
              <h6 class="price-font container mt-1 " style={{display: "flex",justifyContent: "flex-end",position: "absolute",right: 0}}><br/> Total Price : 8465   </h6>
              <ram><samp> <h5 class="price-font">Ramji Kaka Matelvada bajuvada</h5> </samp></ram>

              <h4 class="price-font">Price :- 56</h4>

          </div>
          <div>
            
            
          </div>
          {/* <!-- table start --> */}
          <div class="table-responsive">
          <table class="mt-3 table table-sm Tablesborder table-bordered" >
              <thead>
                <tr>
                  <th scope="col-2" className='col-2'>&nbsp; #</th>
                  <th scope="col-4" className='col-4'>Date</th>
                  <th scope="col-4"  className='col-4'>Liter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">&nbsp;1</th>
                  <td>12-05</td>
                  <td>2</td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;2</th>
                  <td>13-05</td>
                  <td>5</td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;3</th>
                  <td>14-05</td>
                  <td>3</td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;4</th>
                  <td>15-05</td>
                  <td>2.5</td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;5</th>
                  <td>16-05</td>
                  <td>5.5</td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;6</th>
                  <td>17-05</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;7</th>
                  <td>18-05</td>
                  <td>1.5</td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;8</th>
                  <td>19-05</td>
                  <td>2.5</td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;9</th>
                  <td>20-05</td>
                  <td>3.5</td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;10</th>
                  <td>21-05</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
            </div>
          {/* <!-- table end --> */}
          </div>
      </div>
    </div>
  </>
  );
}

