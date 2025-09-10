import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route path='home' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
