import React from 'react'


export default function Dashboard() {
    //localStorage.removeItem('apikey');
    
    
  return (
    <>
    
      <div id="layoutSidenav_content">
              <main>
                      <div className="container-fluid px-4 mt-3">
                          <div className="col ">
                              <div className="card shadow-lg border-0 rounded-lg">
                                  <div className="card-header"><h3 className="text-center font-weight-light my-4">Unique IT Solution  </h3></div>
                                <div className="container-fluid" >
                                  <div className="row mb-1">
                                      <div className="col-6">
                                          <div className=" container mt-1 mb-1 mb-md-0">
                                            
                                            <h6>25/4/2022</h6>
                                          </div>
                                      </div>
                                      <div className="col-6">
                                          <div className="container mt-1 mb-md-0 ">
                                            <h6> TUESDAY</h6>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                                
                                  <div className="card-body">
                                      <form>
                                          <div className="row mb-3">
                                          <div class="col-md-6 mb-3">
                                          <div className="form-floating">
                                                      <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                                      <label htmlFor="inputLastName">CUSTOMER ID</label>
                                                  </div>
                                            </div>
                                            
                                                <div className="col-md-6">
                                                  <div className="form-floating">
                                                      <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                                      <label htmlFor="inputLastName">CUSTOMER NAME</label>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                              <div className="row mb-3" >
                                                  <div className="col-3 d-flex align-items-center justify-content-center">
                                                      <label className="text-center" style={{fontSize:"15px"}} htmlFor="inputPassword6">Liter :-</label>
                                                  </div>
                                                  <div className="col-9 ">
                                                  <div className="form-floating">
                                                      <input className="form-control" id="inputLastName" type="number"  />
                                                      <label htmlFor="typeNumber">number</label>
                                                  </div>
                                                  </div>
                                                  
                                             
                                              
                                          </div>
                                          <div className="row mb-3">
                                              <div className="row">
                                                  <div className="col-4 align-items-center">
                                                      <div className="btn btn-primary mb-3 mb-md-0" style={{backgroundColor: "#3b5998"}}>
                                                          50
                                                      </div>
                                                  </div>
                                                  <div className="col-4">
                                                      <button className="btn btn-primary mb-3 mb-md-0" style={{backgroundColor: "#55acee"}} >
                                                          56
                                                      </button>
                                                  </div>
                                                  <div className="col-4 mb-3">
                                                      <button className="btn btn-primary mb-3 mb-md-0" style={{backgroundColor: "#3b5998"}} >
                                                          60
                                                      </button>
                                                  </div>
                                                  <div className="col-4">
                                                      <button className="btn btn-primary mb-3 mb-md-0" style={{backgroundColor: "#481449"}} >
                                                          65
                                                      </button>
                                                  </div>
                                                  <div className="col-4 ">
                                                      <button className="btn btn-primary mb-3 mb-md-0" style={{backgroundColor: "#3b5998"}}  >
                                                          60
                                                      </button>
                                                  </div>
                                                  <div className="col-4">
                                                      <button className="btn btn-primary mb-3 mb-md-0" style={{backgroundColor: "#481449"}}  >
                                                          65
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-xl  col-md">
                                              <div className="text-center card bg-success text-white mb-4">
                                                  <button className="btn btn-success " type="button">UPDATE CARD &nbsp;
                                                  {/* <i class="far fa-paper-plane"></i> */}
                                                  </button>
                                                  <div class="card-footer d-flex align-items-center  justify-content-between">
                                                  <button className="btn btn-secondary btn-rounde" style={{ backgroundColor: '#333333' }}  data-mdb-ripple-color="light" type="button"><i class="fas fa-edit"></i>&nbsp;Edit
                                                  </button>&nbsp;
                                                  <button className="btn btn-danger" style={{ backgroundColor: '#c61118' }}   type="button"><i class="fab fa-amazon-pay"></i>  &nbsp;Payment
                                                  </button>
                                                  </div>
                                                  
                                              </div>
                                          </div>
                                          
                                      </form>
                                  </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="card-footer text-center py-3">
                                      <div className="small"><a href="login.html">Have an account? Go to login</a></div>
                                  </div>
              </main>
      </div>
    </>
  )
   
}
