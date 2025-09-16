
import { Outlet } from 'react-router-dom';
import AppLogo from './AppLogo';
import '../styles/header.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isLoginTypeVisible, setLoginTypeVisiblity] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className='header'>
        <AppLogo />
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
                <li
                  onClick={() => {
                    navigate('/home')
                    setLoginTypeVisiblity(prev => !prev)
                  }}
                ><a>Patient</a></li>
                <li
                  onClick={() => {
                    navigate('/doctor-dashboard')
                    setLoginTypeVisiblity(prev => !prev)
                  }}
                ><a>Doctor</a></li>
                <li><a>Pharmacy</a></li>
              </div>
            )
          }
        </div>

      </div>

      <Outlet />
    </>
  );
}
