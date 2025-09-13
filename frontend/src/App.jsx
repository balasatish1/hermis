import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientConference from './pages/PatientConference';
import DoctorConference from './pages/DoctorConference';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<LandingPage />}/>
          <Route path='home' element={<Home />}/>
          <Route path='book-appointment' element={<BookAppointmentPage />}/>
          <Route path='doctor-dashboard' element={<DoctorDashboard/>}/>
          <Route path='doctor-conference' element={<DoctorConference/>}/>
          <Route path='patient-conference' element={<PatientConference/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
