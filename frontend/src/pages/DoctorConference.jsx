import VideoCall from '../components/VideoCall.jsx';
import secondaryImage from '../assets/doctor_image_2.jpg';
import primaryImage from '../assets/patient_image.jpg';

export default function DoctorConference() {
  return (
    <>
      <VideoCall primaryImage={primaryImage} secondaryImage={secondaryImage}/>

    </>
  );
}
