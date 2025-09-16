import VideoCall from "../components/VideoCall";
import primaryImage from '../assets/doctor_image_2.jpg';
import secondaryImage from '../assets/patient_image.jpg';
import {useState} from 'react';

export default function PatientConference() {
  const [ inputMedicineVisibility, setInputMedicineVisibility ] = useState(true);

  return (
    <>
      <VideoCall inputVisibility={inputMedicineVisibility} primaryImage={primaryImage} secondaryImage={secondaryImage}/>
    </>
  );
}
