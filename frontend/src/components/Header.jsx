
import { Outlet } from 'react-router-dom';
import AppLogo from './AppLogo';
import '../styles/header.css';

export default function Header () {
  return (
    <>
      <div className='header'>
        <AppLogo/>
        <div>
          <button
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
