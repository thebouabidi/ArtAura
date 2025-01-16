import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Admin-Dash/Home";
import PaintingsHome from "./components/Admin-Dash/PaintingsHome";
import PaintingsAdd from "./components/Admin-Dash/PaintingsAdd";
import AdminLogin from "./components/Admin-Dash/AdminLogin";
import PaintingsEdit from "./components/Admin-Dash/PaintingsEdit";
import TestimonialsAdd from "./components/Admin-Dash/TestimonialsAdd";
import TestimonialsEdit from "./components/Admin-Dash/TestimonialsEdit";
import TestimonialsHome from './components/Admin-Dash/TestimonialsHome';
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import Auth from './components/Admin-Dash/Auth';
import Logout from './components/Admin-Dash/Logout';


const App = () => {
  return (
    <div className='w-full overflow-hidden '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          {/* Protected routes */}
          <Route path='/admin' element={<AdminLogin/>}/>
          <Route path='/Home' element={<Auth><Home/></Auth>}/>
          <Route path='/logout' element={<Auth><Logout/></Auth>}/>
          <Route path='/PaintingsHome' element={<Auth><PaintingsHome/></Auth>}/>
          <Route path='/PaintingsAdd' element={<Auth><PaintingsAdd/></Auth>}/>
          <Route path='/PaintingsEdit' element={<Auth><PaintingsEdit/></Auth>}/>
          <Route path='/TestimonialsAdd' element={<Auth><TestimonialsAdd/></Auth>}/>
          <Route path='/TestimonialsEdit' element={<Auth><TestimonialsEdit/></Auth>}/>
          <Route path='/TestimonialsHome' element={<Auth><TestimonialsHome/></Auth>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
