import { useNavigate } from "react-router-dom";

export default function AppLogo() {
  const navigate = useNavigate();
  return (
    <h1
     onClick={() => navigate('/')}
    >
      Hermis
    </h1>
  );
}
