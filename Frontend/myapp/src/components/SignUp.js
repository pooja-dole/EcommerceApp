import React from "react";
import { Link } from "react-browser-router";
const SignUp=()=>{
    return (
        <div style={{marginTop:'10px'}}>
          <div className="signUpContainer">
          <div className="row ">
                <div className="col-lg-6 col-sm-12 login-part"><h5 style={{color:'red'}}> Sign Up </h5></div>
                <div className="col-lg-6 col-sm-12 signup-part">
                   <Link to={"/"} type="button" style={{color:'white'}}  className="link-body-emphasis link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover">Login In</Link>
                </div>
        </div>
              <div className="row">
               
                <div className="col-sm-12">
                  <label>Full Name</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Full Name"
                    aria-label="Name"
                    name="Name"
                    required
                  />
                </div>
                <div className="col-sm-12">
                  <label>Phone Number</label>
                  <input
                    className="input"
                    type="number"
                    placeholder="+91"
                    aria-label="Phone Number"
                    name="Phone Number"
                    required
                  />
                </div>
                <div className="col-sm-12">
              <label> Email Address </label>
              <input
                className="input"
                type="email"
                placeholder="Email"
                aria-label="Email"
                name="Email"
                required
              />
            </div>
                <div className="col-sm-12">
                  <label>Password </label>
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    name="Password"
                    required
                  />
                </div>
                <div className="col-sm-12">
                  <label> Confirm Password </label>
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    name="Password"
                    required
                  />
                </div>
                <div className="row justify-content-center ">
                  <div classNames="col-4">
                    <input
                      classNamess="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label classNames="form-check-label" for="invalidCheck">
                     &nbsp;  I have accepted the <span style={{color:'red'}}> terms and conditions</span>
                    </label>
                  </div>
                  
                </div>
                <br />
                <br />
                <div className="col">
                  <button
                    type="button"
                    class="btn btn-danger"
                    style={{ width: "100%", alignItems: "center" }}
                  >
                    Login Now
                  </button>
                </div>
              </div>
           
          </div>
        </div>
       
      );
}

export default SignUp;