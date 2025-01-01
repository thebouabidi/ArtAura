import {Link} from 'react-router-dom'

    const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-[#D12943] w-full overflow-hidden justify-center' 
        id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row
            justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <h1 className='font-bold text-[#fff] hover:text-[#222E2F]'>Art Aura</h1>
                <p className=' text-[#fff] mt-4'>Art Aura is your platform for discovering 
                and ordering unique, custom artworks.</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0 '>
                    <h3 className='text-[#fff] text-lg font-bold mb-4 hover:text-[#222E2F]'>Quick Links</h3>
                    <ul className='flex flex-col grap-2 text-[#fff]'>
                        <a href="#Header" className='hover:text-[#222E2F] '>Home</a>
                        <a href="#About" className='hover:text-[#222E2F] '>About Us</a>
                        <a href="#Paintings" className='hover:text-[#222E2F] '>Paintings</a>
                        <a href="#Testimonials" className='hover:text-[#222E2F] '>Testimonials</a>
                        <a href="#Contact" className='hover:text-[#222E2F] '>Contact Us</a>
                        <Link to ="/admin" className='hover:text-[#222E2F] '>Admin</Link>
                    </ul>
                </div>
                <div className='w-full md:w-1/3 mb-12 '>
                <h1 className='font-bold text-[#fff] hover:text-[#222E2F]'>Subscribe to our newsletter</h1>
                <p className=' text-[#fff] mt-4 '>The latest news, articles, 
                    and resources, sent to your inbox weekly.</p>
                <div className="flex gap-4 items-center mt-7 ">
                    <input type="email" placeholder='Enter your email'
                    className='p-2 rounded bg-[#fff] py-2 outline-none  
                    focus:ring-2 focus:ring-[#222E2F] text-[#222E2F] w-full md:w-auto' />
                    <button className="py-2 px-4 rounded bg-[#222E2F] text-[#fff] ">Subscribe</button>
                </div>
                </div>
            </div>
            <div className="border-t  py-4 mt-10 text-center text-[#fff]">
                Copyright 2025 © ArtAura. All Right Reserved.
            </div>
        </div>
    )
    }

    export default Footer
