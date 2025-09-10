import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<LandingPage />}/>
          <Route path='home' element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
