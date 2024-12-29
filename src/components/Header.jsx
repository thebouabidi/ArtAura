import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center
    flex items-center w-full overflow-hidden'
    style={{backgroundImage: "url('/header_img.png')"}}
    id='Header'>
    <Navbar/>  
    <motion.div
    initial={{opacity: 0, y:100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once: true}}
    className='container text-center mx-auto py-4 px-6 
    md:px-20 lg:px-32 text-[#222E2F]'>
        <h2 className='text-2xl sm:text-6xl
        md:text-[40px] inline-block max-w font-bold pt-15'>
        <p>Welcome to <span>Art Aura</span>,</p>
        <p>a world where elegance and creativity shine through every detail!</p></h2>
        <div className='mt-16'>
            <a href="#Contact" className=' bg-[#D12943] text-[#ffF]
            font-semibold px-8 py-3 rounded '>Contact Us</a>
        </div>
        </motion.div>
    </div>
  )
}

export default Header
