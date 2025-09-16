import { useEffect, useState } from 'react';
import '../styles/doctorDashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function DoctorDashboard() {

  const navigate = useNavigate();

  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    const getPatientsData = async () => {
      const data = await axios.get('http://localhost:3500/patientsData');
      console.log(data.data);
      setPatientsData(data.data);
    };

    getPatientsData();
  }, []);

  return (
    <>

      <div className='doctor-dashboard-container'>
        <div className='mode-of-consultancy'>
          <button
            className='virtual-appointments-btn'
          >
            Virtual appointments
          </button>
           <button
            className='physical-appointments-btn'
          >
            Physical appointments
          </button>
        </div>

        <div className='patient-list-container'>


          <div className='patient-box  patient-box-header'>
            <p>S no</p>
            <p>Patient Name</p>
            <p>Age</p>
            <p>Gender</p>
            <p>Appointment Time</p>
          </div>
          {
            patientsData.length != 0 &&
            patientsData.map((patient, index) => {
              return (
                <div
                  key={index} className='patient-box'
                >
                  <p>{index + 1}</p>
                  <p>{patient.full_name}</p>
                  <p>{patient.age}</p>
                  <p>{patient.gender}</p>
                  <p>{patient.appointment_time}</p>

                  <button className='view-patient-details-btn'>
                    View details
                  </button>

                  <button
                    onClick={() => navigate('/doctor-conference')}
                    className='join-call-btn'
                  >
                    Join call
                  </button>
                </div>
              )
            })
          }
        </div>

      </div>
    </>
  );
}
