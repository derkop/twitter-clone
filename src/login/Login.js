import React from 'react';
import './Login.css';
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import {createButton} from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

function Box() {

    return (
        <div className="login__background">
            <div className="box">
                <TwitterIcon className="twitter__Icon"/>
                <div className='Text'>
                    <h3>Sign in to Twitter</h3>
                </div>
                
                <GoogleLoginButton className="google__signin" onClick={() => alert("Hello")} />
                <button className="sign-in-button">Sign in with Apple</button>
                <CloseIcon className="closeButton" id="closeButton">Close</CloseIcon>
            </div>
        </div>
    );
}

export default Box;