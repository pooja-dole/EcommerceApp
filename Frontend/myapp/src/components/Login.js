
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
                <div className="col-lg-6 col-sm-12 login-part"><h5  style={{color:'red'}}>Login In</h5></div>
                <div className="col-lg-6 col-sm-12 signup-part">
                   <Link to={"signUp"} type="button" style={{color:'white'}}  className="link-body-emphasis link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover">Sign Up</Link>
                </div>
        </div>
          <div className="row">
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
                 &nbsp;  Remember Me
                </label>
              <Link className="a-form" to={"/"}>Forgot Password?</Link>
               
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
    </>
  );
};
export default Login;
