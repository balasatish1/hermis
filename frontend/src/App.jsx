import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientConference from './pages/PatientConference';
import DoctorConference from './pages/DoctorConference';
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import PatientDashboard from './pages/PatientDashboard';
import Pharmacy from './pages/Pharmacy';
import CheckForMedicines from './pages/CheckForMedicines';
import SymptomChatbot from './pages/SymptomChatbot';

let GlobalDataContext = createContext();

export default function App() {

  const [loginType, setLoginType] = useState('');
  const [videoCallPov, setVideoCallPov] = useState('');

  const [medicineList, setMedicineList] = useState(() => {
    const saved = localStorage.getItem("medicineList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("medicineList", JSON.stringify(medicineList));
  }, [medicineList]);


  return (
    <GlobalDataContext.Provider value={{ loginType, setLoginType, videoCallPov, setVideoCallPov, medicineList, setMedicineList }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<LandingPage />} />
            <Route path='home' element={<Home />} />
            <Route path='book-appointment' element={<BookAppointmentPage />} />
            <Route path='doctor-dashboard' element={<DoctorDashboard />} />
            <Route path='doctor-conference' element={<DoctorConference />} />
            <Route path='patient-conference' element={<PatientConference />} />
            <Route path='patient-dashboard' element={<PatientDashboard />} />
            <Route path='pharmacy' element={<Pharmacy />} />
            <Route path='check-for-medicines' element={<CheckForMedicines />} />
            <Route path='symptom-chatbot' element={<SymptomChatbot />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ GlobalDataContext.Provider>

  )
}

export { GlobalDataContext };
