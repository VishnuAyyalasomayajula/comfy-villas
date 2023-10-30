import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Management_SignIn from './pages/Management_SignIn';
import Profile from './pages/Profile';
import Resident_SignIn from './pages/Resident_SignIn';



export default function App() {
  return 
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/ressignin' element={<Resident_SignIn />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/mansignin' element={<Management_SignIn />} />
    
  </Routes>
  </BrowserRouter>
}
