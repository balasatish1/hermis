
import { Outlet } from 'react-router-dom';
import AppLogo from './AppLogo';
import '../styles/header.css';
import { useState } from 'react';

export default function Header () {
  const [ isLoginTypeVisible, setLoginTypeVisiblity ] = useState(false);

  return (
    <>
      <div className='header'>
        <AppLogo/>
        <div className='login-btn-container'>
          <button
            className='login-as-btn'
            onClick={() => setLoginTypeVisiblity(prev => !prev)}
          >
            Login as
          </button>
        {
          isLoginTypeVisible && (
            <div className='login-type-drop-down'>
          <li><a>Patient</a></li>
          <li><a>Doctor</a></li>
          <li><a>Pharmacy</a></li>
        </div>
          )
        }
        </div>

      </div>

      <Outlet/>
    </>
  );
}
