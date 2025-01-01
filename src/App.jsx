
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


const App = () => {
  return (
    <div className='w-full overflow-hidden '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/admin' element={<AdminLogin/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/PaintingsHome' element={<PaintingsHome/>}/>
          <Route path='/PaintingsAdd' element={<PaintingsAdd/>}/>
          <Route path='/PaintingsEdit' element={<PaintingsEdit/>}/>
          <Route path='/TestimonialsAdd' element={<TestimonialsAdd/>}/>
          <Route path='/TestimonialsEdit' element={<TestimonialsEdit/>}/>
          <Route path='/TestimonialsHome' element={<TestimonialsHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
