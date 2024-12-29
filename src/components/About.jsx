import { assets } from '../assets/assets'
import { motion } from "framer-motion"


    const About = () => {
    return (
        <motion.div 
        initial={{opacity: 0, x:200}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
        className='flex flex-col items-center justify-center 
        container mx-auto p-14 md:px-20 lg:px-32 w-full 
        overflow-hidden' id='About'>
            <h1 className='text-3xl sm:text-4xl
            text-[#222E2F] font-bold mb-5 '>
            About Our Brand</h1>
            <p className='text-[#405558]  max-w text-center mb-8 '>
            Art Aura is a platform for art enthusiasts to request
            custom drawings and explore a curated collection of
            artistic paintings. We aim to bridge creativity and
            individuality, offering a space where every piece
            captures the essence of artistic expression.</p>
            <div className='flex flex-col md:flex-row items-center
            md:items-start md:gap-20'>
                <img src={assets.brand_img}  alt="" 
                className='w-full sm:w-1/2 max-w-lg' />
                <div className='flex flex-col items-center md:items-start
                mt-10 text-[#405558]'>
                    <div className='grid grid-cols-2 gap-6 
                    md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-[#D12943]'>8+</p>
                            <p>Years of Artistic Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-[#D12943]'>50+</p>
                            <p>Custom Artworks Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-[#D12943]'>100+</p>
                            <p>Art Enthusiasts Engaged</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-[#D12943]'>20+</p>
                            <p>Featured Paintings</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg'> Art Aura is your premier destination for ordering 
                        bespoke artwork and discovering a curated selection of one-of-a-kind paintings. 
                        Our platform is built on a foundation of creativity, craftsmanship, 
                        and an unwavering commitment to quality. We aim to make art not only 
                        accessible but deeply meaningful, offering a diverse range of pieces 
                        that resonate with every individual. Whether you're seeking to 
                        transform your space with custom designs or explore exceptional artwork..</p>
                                <button className='bg-[#D12943] text-[#ffff]  font-semibold px-8 py-2 rounded'>Learn more</button>
                </div>
            </div>
        </motion.div>
    )
    }

    export default About
