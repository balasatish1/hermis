import '../styles/videoCall.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faMicrophoneSlash, faPhone, faVideo, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export default function VideoCallPage() {

  const [isVideoVisible, setVideoVisibility] = useState(true);
  const [isAudioAudible, setAudioAudibility] = useState(true);

  const handleVideoClick = () => setVideoVisibility(prev => !prev);
  const handleAudioClick = () => setAudioAudibility(prev => !prev);


  return (
    <>
      <div className="conference-container">
        <div className='video-call-screen'>

          <div className='incoming-person-video-preview'>

          </div>

          <div className='video-call-gestures'>

           

            {
              (isVideoVisible == true) ? (
                <div onClick={handleVideoClick} className='video-off-btn'>
                  <FontAwesomeIcon icon={faVideo} style={{ color: "white", fontSize: "40px" }} />
                </div>
              ) : (
                <div onClick={handleVideoClick} className='video-on-btn'>
                  <FontAwesomeIcon icon={faVideoSlash} style={{ color: "white", fontSize: "40px" }} />
                </div>
              )
            }

             <div id="end-call-btn" className='end-call-btn'>
              <FontAwesomeIcon icon={faPhone} style={{ color: "white", fontSize: "40px" }} />
            </div>


            {
              (isAudioAudible == true) ? (
                <div onClick={handleAudioClick} className='mike-off-btn'>
                  <FontAwesomeIcon icon={faMicrophone} style={{ color: "white", fontSize: "40px" }} />
                </div>
              ) : (
                <div onClick={handleAudioClick}  className='mike-on-btn'>
                  <FontAwesomeIcon icon={faMicrophoneSlash} style={{ color: "white", fontSize: "40px" }} />
                </div>
              )
            }
          </div>
        </div>

        <div className='prescription-container'>
          <div className='medicine-list'>

          </div>
          <div className='add-medicine-container'>

            <input
              type="text"
              className='medicine-input'
              placeholder='enter medicine'
            />

            <button
              className='add-medicine-btn'
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
