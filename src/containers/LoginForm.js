import React from "react";
import './LoginForm.css';
import { Link } from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {BsFacebook} from "react-icons/bs";
import {FaTwitter} from "react-icons/fa";

class LoginForm extends React.Component{
    render(){
      return(
        <div id="loginform">
          <FormHeader title="Login" />
          <Form />
          <OtherMethods />
        </div>
      )
    }
  }
  
  const FormHeader = props => (
      <h2 id="headerTitle">{props.title}</h2>
  );
  
  
  const Form = props => (
     <div>
       <FormInput description="Username" placeholder="Enter your username" type="text" />
       <FormInput description="Password" placeholder="Enter your password" type="password"/>
       <Link to='/Products'><FormButton title="Log in"/></Link>
     </div>
  );
  
  const FormButton = props => (
    <div id="button" class="row">
      <button>{props.title}</button>
    </div>
  );
  
  const FormInput = props => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );
  
  const OtherMethods = props => (
    <div>
    <div id="alternativeLogin">
      <div className="icon-buttons">
        <Link to='/'><FcGoogle/></Link>
        <Link to='/'><BsFacebook/></Link>
        <Link to='/'><FaTwitter/></Link>
      </div>
      <label>Or sign in with:</label>
      
    </div>
    </div>
  );
  

  export default LoginForm;