import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
  render() {
    return (
      <div className="Login"> 
      <div className="t"><h2>Registered User? Please Login </h2></div>
      <form>
      <div>
      <input type="text" placeholder=" Rackf ID" name="rackf"  maxLength ="7" size="30" required></input>
      </div>
       <div>
       <input type="password" placeholder="Password" name="psw" size ="30" required></input>
       </div>
       <button class="button1">Sign Up</button>
      <button class="button2"> Login</button>
      <div>

          
        <button class ="button3">Forgot Password</button>
        </div>
      </form>
      </div>
    );

    }
  }
      export default Login