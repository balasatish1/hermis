
import '../styles/landingPage.css';
import { useNavigate } from 'react-router-dom';


export default function LandingPage () {
  const navigate = useNavigate();
  return (
    <>
      <div className='get-started-container'>
        <div className='landing-page-content'>
          <h1>Choose a Doctor or Specialty</h1>
          <button
            className='get-started-btn-in-landing'
            onClick={() => navigate('/home')}
          >
            Get started
          </button>
        </div>

        <div className='cover-image'>

        </div>
      </div>
    </>
  );
}
