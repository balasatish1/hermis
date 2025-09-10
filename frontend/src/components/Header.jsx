
import { Outlet, useNavigate } from 'react-router-dom';
import AppLogo from './AppLogo';
import '../styles/header.css';

export default function Header () {
  const navigate = useNavigate();
  return (
    <>
      <div className='header'>
        <AppLogo/>
        <div>
          <button
            onClick={() => navigate('/home')}
            className='get-started-btn'
          >
            Get started
          </button>
        </div>
      </div>

      <Outlet/>
    </>
  );
}
