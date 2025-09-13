import '../styles/videoCall.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function VideoCallPage() {
  return (
    <>
      <div className="conference-container">
        <div className='video-call-screen'>
          <div className='video-call-gestures'>
             <div className='end-call-btn'>
              <FontAwesomeIcon icon={faPhone} style={{ color: "white", fontSize: "40px" }} />
             </div>
          </div>
        </div>
        <div className='prescription-container'>
          <h1>Prescription-container</h1>
        </div>
      </div>
    </>
  );
}
