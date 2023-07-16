import React from 'react';
import './Login.css';
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleLogo from '../assets/GoogleLogo.png';
import AppleLogo from '../assets/AppleLogo.png';
import { signInWithGoogle } from "../firebase";

function Login({ onLogin }) {
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        // Call the onLogin prop to indicate successful login
        onLogin();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login__background">
      <div className="box">
        <TwitterIcon className="twitter__Icon" />
        <div className="Text">
          <h3>Sign in to Twitter</h3>
        </div>

        <button className="google__button" onClick={handleGoogleLogin}>
          <img src={GoogleLogo} alt="" />
          <span>Sign in with Google</span>
        </button>

        <button className="apple__button">
          <img src={AppleLogo} alt="" />
          <span>Sign in with Apple</span>
        </button>

        <p>or</p>

        <button className="email__button">Sign in with phone or email</button>

        <CloseIcon className="closeButton">
          Close
        </CloseIcon>
      </div>
    </div>
  );
}

export default Login;
