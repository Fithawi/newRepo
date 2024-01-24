import React, {useState} from 'react';
import './Login.css';
import user_icon from '../Assets/person.png';
import pass_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';

const Login = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className = "container">
        <div className="header">
           <div className="text">{action}</div>
           <div className="underline"></div>
        </div>
        <div className="inputs">
          {
          action ==="Login"? <div></div>: <div className="input">
                <img src={user_icon} alt="image3"/>
                <input type="text" placeholder="Name"/>
            </div>
            }
            <div className="input">
            <img src={email_icon} alt="image1"/>
            <input type="email" placeholder="Email ID"/>
            </div>
            <div className="input">
            <img src={pass_icon} alt="image2"/>
            <input type="password" placeholder="Password"/>
            </div>
        </div>
        {
          action === "Sign Up"? <div></div>:<div className='forgot-pass'>Forgot password <span>Click here:</span></div> 
        }
        
        <div className='submit-container'>
            <div className={action === "Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign-up</div>
            <div className={action === "Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>

    </div>
  )
}
export default Login;