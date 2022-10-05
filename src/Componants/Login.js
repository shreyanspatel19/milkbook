import React, { useState } from 'react';
import {
  // MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  // MDBBtn,
  MDBIcon,
  // MDBInput,
  // MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Navigate, NavLink, useNavigate} from 'react-router-dom';

function Login() {

  // const [justifyActive, setJustifyActive] = useState('tab1');;

  // const handleJustifyClick = (value) => {
  //   if (value === justifyActive) {
  //     return;
  //   }

  //   setJustifyActive(value);
  // };
  const [iconsActive, setIconsActive] = useState('tab1');
  const [data,setData] = useState({});
  const navigate = useNavigate();

  const handleIconsClick = (value: string) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };
  var i=0;
  return (
    <>
      <div class="limiter" >
		<div class="container-login100" style={{backgroundImage: "url('images/bg-01.jpg')"}}>
			<div class="wrap-login100 p-t-30 p-b-50">
				<span class="login100-form-title p-b-41">
				</span>
				<div class=" text-white p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
					<div class="login10-form-title p-b- text w-100">
						<h2>Welcome {  }customer</h2>
					</div>
		  </div>
				<div class="login100-form validate-form p-b-33 p-t-1">
					<div class=" row container-login100-form-btnn m-t-32">
          <MDBTabs className='mb-3 ml-2 container'   >
        <MDBTabsItem style={{margin:"-9px"}} className="" >
          <MDBTabsLink onClick={() => handleIconsClick('tab1')}   active={iconsActive === 'tab1'}> &nbsp;
            <MDBIcon fas icon='american-sign-language-interpreting' className='me-1' />Agent
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem style={{margin:"-9px"}} >
          <MDBTabsLink onClick={() => handleIconsClick('tab2')} active={iconsActive === 'tab2'}>
            <MDBIcon fas icon='chart-line' className='me-1' />Clinet
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem  style={{margin:"-9px"}} >
          <MDBTabsLink onClick={() => handleIconsClick('tab3')} active={iconsActive === 'tab3'}>
            <MDBIcon fas icon='address-book' className='me-1' />customer
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      </div>
						<div class="col-6 mx-auto">
						{/* <button class="button-85" role="button" onClick={() =>  handleJustifyClick('tab1') } active={justifyActive === 'tab1'}>Agent </button> */}
						</div>
						<div class="col-6">
							{/* <button class="button-85 ml-3" role="button" onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Clinte</button> */}
						</div>
					
          <MDBTabsContent>
          <MDBTabsPane show={iconsActive === 'tab2'}>
					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="text" name="username" placeholder="User name" onChange={(e)=>{
              setData({...data,company_contactnumber:e.target.value})
            }}/>
						<span class="focus-input100" data-placeholder="&#xe82a;"></span>
					</div>
					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder="Password" onChange={(e)=>{
              setData({...data,company_password:e.target.value})
            }}/>
						<span class="focus-input100" data-placeholder="&#xe80f;"></span>
					</div>
          <div class="container-login100-form-btn m-t-32">
          
						<button class="login100-form-btn" onClick={()=>{
              fetch('http://thehappyhomedecor.com/Unique_MilkBook/unique_api/api/Loginsystem/company_login.php',{
                method: "POST",
                body: JSON.stringify(data)
                // headers: {
                //   "Content-Type": "application/json"
                // }
              }).then(res=>res.json()).then((res)=>{
                //if(res.status){
                  console.log(res);
                  localStorage.setItem('apikey', res.apikey);
                
                  navigate('client/Dashboard');
               // }
               // else{

              //  }
                
              });
            }}>
							Login
						</button>
          
					</div>
          </MDBTabsPane>
          </MDBTabsContent>
          <MDBTabsContent>
          <MDBTabsPane show={iconsActive === 'tab1' }>
					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="text" name="username" placeholder="User name"/>
						<span class="focus-input100" data-placeholder="&#xe82a;"></span>
					</div>

					<div class="container-login100-form-btn m-t-32">
          

          <button class="login100-form-btn" onClick={()=>{
            navigate('agent');
            }}>
							Login
						</button>


					</div>
          </MDBTabsPane>
          </MDBTabsContent>

					

				</div>
			</div>
						
			</div>
		</div>
      {/* <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs> */}

      {/* <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" to='/Dashboard'>Sign up</MDBBtn>
          <NavLink to="/Dashboard">
          <button style={{width:"100%"}} class="btn btn-primary" >Create an account</button>

          </NavLink>

        </MDBTabsPane>

      </MDBTabsContent> */}

    </>
  );
}

export default Login;