import React from 'react';
import './Login.css';
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleLogo from '../assets/GoogleLogo.png';
import AppleLogo from '../assets/AppleLogo.png';
import { signInWithGoogle } from "../firebase";

function Box() {

    return (
        <div className="login__background">
            <div className="box">
                <TwitterIcon className="twitter__Icon"/>
                <div className='Text'>
                    <h3>Sign in to Twitter</h3>
                </div>

                <button className="google__button" onClick={signInWithGoogle} >
                <img src={GoogleLogo}/>
                <span>Sign in with Google</span>
                </button>


                <button className="apple__button">
                <img src={AppleLogo}/>
                <span>Sign in with Apple</span>
                </button>
                <p> or</p>
                <button className="email__button">
                Sign in with phone or email
                </button>
                <CloseIcon className="closeButton" id="closeButton">Close</CloseIcon>
            </div>
        </div>
    );
}

export default Box;