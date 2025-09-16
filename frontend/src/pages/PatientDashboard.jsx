import { useState } from "react";
import '../styles/patientDashboard.css';
import { useNavigate } from "react-router-dom";

export default function PatientDashboard() {

  const navigate = useNavigate();

  const [appointmentList, setAppointmentList] = useState([{
    sno: 1,
    doctorName: 'Dr. Srinivas Rao, MS',
    timeAndDate: '10:30 AM 17/09',
  }]);
  return (
    <>
      <div className="patient-dashboard">

        <div className="appointment-header">
          <p>Sno</p>
          <p>Doctor</p>
          <p>Time / Data</p>
          <span></span>
        </div>
        {

          appointmentList.length !== 0 ? (
            appointmentList.map((appointment, index) => {
              return (
                <div key={index} className="appointment">
                  <p>{appointment.sno}</p>
                  <p>{appointment.doctorName}</p>
                  <p>{appointment.timeAndDate}</p>
                  <button
                    onClick={() => {
                      localStorage.removeItem("medicineList");
                      navigate('/patient-conference');
                    }}
                    className='join-call-btn'
                  >

                    Join call
                  </button>
                </div>
              )
            })
          ) : (<h1>You don't have any appointments</h1>)
        }
      </div>

    </>
  );
}
