import { useNavigate } from "react-router-dom";

export default function AppLogo() {
  const navigate = useNavigate();
  return (
    <h1
     className='app-logo-name'
     onClick={() => navigate('/home')}
    >
      Hermis
    </h1>
  );
}
