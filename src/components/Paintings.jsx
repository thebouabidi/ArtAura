import { useEffect, useState } from 'react'
import { assets, paintingsData  } from '../assets/assets'
import { motion } from 'framer-motion';

    const Paintings = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(()=>{
        const updateCrdsToShow = ()=>{
            if(window.innerWidth >= 1024){
                setCardsToShow(paintingsData.length);
            }else{
                setCardsToShow(1)
            }
        };
            updateCrdsToShow();

            window.addEventListener('resize', updateCrdsToShow);
            return ()=> window.removeEventListener('resize', updateCrdsToShow);
    },[])

    const nextPainting = ()=> {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % paintingsData.length)
    }
    const prevPainting = ()=>{
        setCurrentIndex((prevIndex) => prevIndex ===0 ? paintingsData.length - 1 : prevIndex - 1)
    }

    return (
        <motion.div 
        initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className=' container mx-auto py-4 pt-20 px-6 
        md:px-20 lg:px-32 w-full overflow-hidden mb-12 ' id='Paintings' >
            <h1 className=' text-2xl sm:text-4xl font-bold mb-8 text-center text-[#222E2F]
            max-w mx-auto '>Exclusive Art Collection & Custom Orders</h1>
            <p className='text-center text-[#405558] mb-8'>Art Aura offers a curated collection of 
                displayed artworks, carefully selected 
                for their uniqueness. At the same time, 
                you have the opportunity to request a custom 
                painting tailored to your personal taste, 
                creating a one-of-a-kind masterpiece just for you.</p>

                {/* slider buttons */}
                <div className='flex justify-end items-center mb-8'>
                    <button onClick={prevPainting}
                    className='p-3 bg-[#D12943] rounded mr-2' 
                    aria-label='Next Painting'>
                        <img src={assets.left_arrow} alt="Next" />
                    </button>
                    <button onClick={nextPainting} 
                    className='p-3 bg-[#D12943] rounded mr-2' 
                    aria-label='Previous Painting'>
                        <img src={assets.right_arrow} alt="Previous" />
                    </button>
                </div>

                {/* Painting slider container */}
                <div className='overflow-hidden'>
                    <div className='flex gap-8 transition-transform duration-500
                    ease-in-out'
                    style={{transform:`translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
                        {paintingsData .map((painting , index)=>(
                            <div key={index} className=' relative flex-shrink-0
                            w-full sm:w-1/4'>
                                <img src={painting.image} alt={painting.title}  className=' w-full
                                h-auto mb-14'/>
                                <div className='absolute left-0 right-0 bottom-5 flex 
                                    justify-center '>
                                        <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                            <h2 className='text-xs text-[#222E2F] font-medium'>{painting.title}</h2>
                                            <p className='text-[#405558] text-sm'>{painting.price} <span>|</span> {painting.location}</p>
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>    
                </div>
        </motion.div>
    )
    }

    export default Paintings
