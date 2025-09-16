import '../styles/videoCall.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faMicrophoneSlash, faPhone, faVideo, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { GlobalDataContext } from '../App';
import { useContext } from 'react';

export default function VideoCallPage({ primaryImage, secondaryImage, inputVisibility }) {

  const { medicineList, setMedicineList } = useContext(GlobalDataContext);

  const [isVideoVisible, setVideoVisibility] = useState(true);
  const [isAudioAudible, setAudioAudibility] = useState(true);
  const [currentMedicine, setCurrentMedicine] = useState('');

  const handleAddMedicine = () => {
    const isMedicineAlreadyExist = medicineList.some((medicine) => {
      return medicine.toLowerCase() === currentMedicine.toLowerCase();
    });

    if (!isMedicineAlreadyExist) {
      setMedicineList(prev => [...prev, currentMedicine]);
    }
  }

  const handleVideoClick = () => setVideoVisibility(prev => !prev);
  const handleAudioClick = () => setAudioAudibility(prev => !prev);


  return (
    <>
      <div className="conference-container">
        <div className='video-call-screen'
          style={{ backgroundImage: `url(${primaryImage})` }}
        >

          <div
            style={{ backgroundImage: `url(${secondaryImage})` }}
            className="incoming-person-video-preview"
          >
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
                <div onClick={handleAudioClick} className='mike-on-btn'>
                  <FontAwesomeIcon icon={faMicrophoneSlash} style={{ color: "white", fontSize: "40px" }} />
                </div>
              )
            }
          </div>
        </div>

        <div className='prescription-container'>
          <div className='medicine-list'>
            {
              medicineList.length !== 0 &&
              medicineList.map((medicine, index) => {
                return (
                  <div key={index} className='medicine'>
                    <p>{index + 1 + ' . '}{medicine}</p>
                  </div>
                )
              })
            }
          </div>
          {
            !inputVisibility ? (
              <div className='add-medicine-container'>

            <input
              type="text"
              className='medicine-input'
              placeholder='enter medicine'
              value={currentMedicine}
              onChange={(e) => setCurrentMedicine(e.target.value)}
            />

            <button
              onClick={handleAddMedicine}
              className='add-medicine-btn'
            >
              Add
            </button>
          </div>
            ) : (<button className='download-prescription-btn'>Download Prescription</button>)
          }
        </div>
      </div>
    </>
  );
}
