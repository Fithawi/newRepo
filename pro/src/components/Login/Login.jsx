import React from 'react';
import './Login.css';
import user_icon from '../Assets/person.png';
import pass_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';
export const Login = () => {
  return (
    <div className = "container">
        <div className="header">Sign-up</div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="image"/>
                <input type="text"/>
            </div>
            <div className="input">
            <img src={email_icon} alt="image"/>
            <input type="email"/>
            </div>
            <div className="input">
            <img src={pass_icon} alt="image"/>
            <input type="password"/>
            </div>
        </div>
    </div>
  )
}
