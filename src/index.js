import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login/Login';
import reportWebVitals from './reportWebVitals';

function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Set the login state to true
    setIsLoggedIn(true);
  };

  return (
    <React.StrictMode>
      {isLoggedIn ? <App /> : <Login onLogin={handleLogin} />}
    </React.StrictMode>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

reportWebVitals();
