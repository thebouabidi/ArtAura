    import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

    const Testimonials = () => {
    return (
        <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
        id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-8 text-center text-[#222E2F] '>What Our Clients Say</h1>
            <p className='text-center text-[#405558] mb-12 max-w mx-auto'>Discover how Art Aura has inspired and delighted art 
                enthusiasts. 
                Read their experiences and see how our 
                artworks and custom pieces have transformed 
                their spaces and brought creativity to life.</p>

            <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index)=>(
                    <div key={index}
                    className='max-w-[280px] border shadow-lg rounded
                    px-8 py-8 text-center '>
                        <img className='w-20 h-20 rounded-full mx-auto mb-4 object-contain' src={testimonial.image} alt={testimonial.alt} />
                        <h2 className='text-xl text-[#222E2F] font-medium'>{testimonial.name}</h2>
                        <p className='text-[#405558] mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-[#405558] mb-4'>
                            {Array.from({length: testimonial.rating}, (item, index)=> (
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className='text-[#405558]'>{testimonial.text}</p>
                    </div>
                ))}
            </div>    
        </div>
    )
    }

    export default Testimonials
