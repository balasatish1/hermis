

import '../styles/homePage.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useContext } from "react";
import { GlobalDataContext } from "../App";


export default function Home() {

  const navigate = useNavigate();
  // const { setMedicineList } = useContext(GlobalDataContext);

  // useEffect(() =>  {
  //   localStorage.removeItem("medicineList");
  //   setMedicineList([]);
  // }, []);

  return (
    <>
      <div className="home-container">

        <button
          onClick={() => navigate('/book-appointment')}
          className='book-an-appointment-btn'
        >
          Book an appointment
        </button>
        <button
          onClick={() => navigate('/patient-dashboard')}
          className='my-appointment-list-btn'
        >
          My appointments
        </button>
      </div>
    </>
  );
}
