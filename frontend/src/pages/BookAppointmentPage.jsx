
import { useNavigate } from 'react-router-dom';
import '../styles/bookAppointment.css';

export default function BookAppointmentPage() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="appointment-container"
      >
        <h1 className='appointment-heading'>Fill patient details</h1>
        <form className='appointment-form'>
          <div>
            <label >Full Name</label>
            <input
              type="text"
              className='patient-name-input'
              placeholder='john williams'
            />
          </div>

          <div>
            <label>Date of birth</label>
            <input
              type="date"
              className='patient-dob-input'
            />
          </div>

          <div>
            <label>Age</label>
            <input
              type="number"
              className='patient-age-input'
            />
          </div>

          <div className='gender-selection-box'>
            <label className='gender-label'>Gender</label>
            <input type="radio" name='gender' value="male" /><label>Male</label>
            <input type="radio" name='gender' value="female" /><label>female</label>
            <input type="radio" name='gender' value="other" /><label>other</label>

          </div>

          <div>
            <label>Mobile</label>
            <input
              type="number"
              className='patient-mobile-number-input'
              placeholder='+91'
            />
          </div>

          <div>
            <label >Select reason for appointment</label>
            <select name="symptoms" required>
              <option value="">-- Symptoms--</option>
              <option value="fever">Fever</option>
              <option value="cough_cold">Cough / Cold</option>
              <option value="headache">Headache</option>
              <option value="stomach_pain">Stomach Pain</option>
              <option value="body_pain">Body Pain / Joint Pain</option>
              <option value="skin_allergy">Skin Allergy / Rashes</option>
              <option value="injury">Injury / Wound</option>
              <option value="eye_problem">Eye Problem / Irritation</option>
              <option value="ear_pain">Ear Pain / Hearing Issue</option>
              <option value="dental_problem">Toothache / Dental Problem</option>
              <option value="child_health">Child Health Issue</option>
              <option value="women_health">Women’s Health (Gynecology)</option>
              <option value="pregnancy_checkup">Pregnancy Check-up</option>
              <option value="chronic_disease">Chronic Disease (Diabetes / BP / Heart)</option>
              <option value="respiratory_issue">Breathing Problem / Asthma</option>
              <option value="mental_health">Mental Health (Stress / Anxiety)</option>
              <option value="vaccination">Vaccination</option>
              <option value="general_checkup">General Check-up</option>
              <option value="other">Other (Please Specify)</option>
            </select>

          </div>

          <div>
            <label >Upload previous health records if any (.pdf)</label>
            <input
              type="file"
              accept="application/pdf"
            />
          </div>

          <div>
            <label for="doctorType">Select Doctor Type:</label>
            <select id="doctorType" name="doctorType" required>
              <option value="">-- Select Doctor Type --</option>

              <option value="general_physician">General Physician</option>

              <option value="pediatrician">Pediatrician (Child Specialist)</option>
              <option value="gynecologist">Gynecologist (Women’s Health)</option>
              <option value="dermatologist">Dermatologist (Skin Specialist)</option>
              <option value="dentist">Dentist</option>
              <option value="ophthalmologist">Ophthalmologist (Eye Specialist)</option>
              <option value="ent_specialist">ENT Specialist (Ear, Nose, Throat)</option>
              <option value="orthopedician">Orthopedician (Bone & Joint Specialist)</option>
              <option value="cardiologist">Cardiologist (Heart Specialist)</option>
              <option value="pulmonologist">Pulmonologist (Lung & Breathing Specialist)</option>
              <option value="neurologist">Neurologist (Brain & Nerves)</option>
              <option value="psychiatrist">Psychiatrist / Mental Health</option>
              <option value="urologist">Urologist (Kidney & Urinary Tract)</option>

              <option value="other">Other (Please Specify)</option>
            </select>
          </div>

          {/* <div>
            <label >Select mode of consultation</label>
            <select>
              <option value="virtual">virtual</option>
              <option value="in-person">In person</option>
            </select>
          </div> */}

          <div>
            <label >Preferred time slots(optional)</label>
            <select>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>

          <div>
            <button
            type='reset'
            className='book-appointment-slot-btn'
            onClick={() => navigate('/patient-dashboard')}
          >
            book appointment slot
          </button>
          </div>

        </form>
      </div>
    </>
  );
}
