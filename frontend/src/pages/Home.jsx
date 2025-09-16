

import '../styles/homePage.css';
import { useNavigate } from 'react-router-dom';



export default function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">

        <button
          onClick={() => navigate('/book-appointment')}
        >
          Book an appointment
        </button>
        <button
          onClick={() => navigate('/patient-dashboard')}
        >
          My appointments
        </button>

        <button
          onClick={() => navigate('/symptom-chatbot')}
        >
          Chat with medibot
        </button>

        <button
          onClick={() => navigate('/check-for-medicines')}
        >
          check medicine availability
        </button>
      </div>
    </>
  );
}
