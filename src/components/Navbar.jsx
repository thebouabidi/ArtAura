import { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

useEffect(()=>{
  if(showMobileMenu){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }
  return()=>{
    document.body.style.overflow = 'auto'
  };
},[showMobileMenu])  




  return (
    <div className='fixed top-0 left-0 w-full z-10 '>
      <div className=' mx-auto flex justify-between 
      items-center py-4 px-6 md:px-10 lg:px-32 backdrop-blur-xl'>
        {/* <img src={assets.logo} alt="" /> */}
        <Link 
        to="/" 
        className='font-bold text-2xl text-[#222E2F]'>Art Aura</Link>
        <ul className='hidden font-bold md:flex gap-7 text-[#222E2F]'>
          <a href="#Header" 
          className='cursor-pointer hover:text-[#D12943]'>Home</a>
          <a href="#About" 
          className='cursor-pointer hover:text-[#D12943]'>About</a>
          <a href="#Paintings" 
          className='cursor-pointer hover:text-[#D12943]'>Paintings</a>
          <a href="#Testimonials" 
          className='cursor-pointer hover:text-[#D12943]'>Testimonials</a>
          <a href="#Contact" 
          className='cursor-pointer hover:text-[#D12943]'>Contact Us</a>
        </ul>
        {/* <button className='hidden md:block bg-[#222E2F] text-[#ffff] font-semibold px-8 py-2 rounded-full'>Contact Us</button> */}
        <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7'
        alt=''/>
      </div>
      
       {/* mobile-menu */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} 
      right-0 top-0 bottom-0 overflow-hidden bg-[#93BCB3]
      text-[#222E2F] transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2
        mt-5 px-5 text-lg font-medium'>
          <a onClick={()=> setShowMobileMenu(false)} href="#Header" 
          className='px-4 py2 rounded-full inline-block hover:text-[#ffff]'>Home</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#About" 
          className='px-4 py2 rounded-full inline-block hover:text-[#ffff]'>About</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Paintings" 
          className='px-4 py2 rounded-full inline-block hover:text-[#ffff]'>Paintings</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Testimonials" 
          className='px-4 py2 rounded-full inline-block hover:text-[#ffff]'>Testimonials</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Contact" 
          className='px-4 py2 rounded-full inline-block hover:text-[#ffff]'>Contact Us</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
