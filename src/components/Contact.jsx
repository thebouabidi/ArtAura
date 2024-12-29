    import React from 'react'

    const Contact = () => {

            const [result, setResult] = React.useState("");

            const onSubmit = async (event) => {
            event.preventDefault();
            setResult("Sending....");
            const formData = new FormData(event.target);
        
            formData.append("access_key", "518e65cc-dbbf-42fa-810e-881b47701509");
        
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
        
            const data = await response.json();
        
            if (data.success) {
                setResult("");
                alert("Form submitted successfully !")
                event.target.reset();
            } else {
                console.log("Error", data);
                alert(data.message);
                setResult("");
            }
            };

    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full
        overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-8 
            text-center text-[#222E2F] '>Get in Touch</h1>
            <p className='text-center text-[#405558] 
            mb-12 max-w mx-auto'>We’d love to hear from you! Whether 
                you have a question, need assistance, or want to request a 
                custom artwork, our team is here to help. Contact 
                us today and let’s bring your vision to life.</p>

                <form onSubmit={onSubmit} className='max-w-2x1 mx-auto text-[#222E2F] pt-8'>
                        <div className='flex flex-wrap justify-center items-center gap-4 mb-5'>
                            <div className='w-full md:w-1/2 text-left'>
                            Your Name
                            <input className='w-full border border-[#adb5b6] 
                            rounded py-3 px-4 mt-2 outline-none  
                            focus:ring-2 focus:ring-[#D12943]' 
                            type="text" name='Name' placeholder='Enter your name' required/>
                            </div>
                            <div className='w-full md:w-1/2 text-left md:p1-4'>
                            Your Email
                            <input className='w-full border border-[#adb5b6] 
                            rounded py-3 px-4 mt-2 outline-none  
                            focus:ring-2 focus:ring-[#D12943]' 
                            type="email" name='Email' placeholder='Enter your email' required/>
                            </div>
                            <div className='w-full md:w-1/2 text-left'>
                            Message
                            <textarea className='w-full border border-[#adb5b6] rounded py-3
                            px-4 mt-2 h-48 resize-none outline-none  
                            focus:ring-2 focus:ring-[#D12943]'
                            name="Message" placeholder='Write your message here...' required></textarea>
                            </div>
                        </div>
                        <button className='bg-[#D12943] text-white py-2 px-12 mb-10
                            rounded'>{result ? result : "Send Message"}</button>
                </form>    
        </div>
    )
    }

    export default Contact
