
import { Outlet } from 'react-router-dom';

export default function Header () {
  return (
    <>
      <h1>This is header</h1>
      <Outlet/>
    </>
  );
}
